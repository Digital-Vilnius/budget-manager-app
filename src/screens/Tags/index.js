import React, { useEffect, useState } from 'react';
import { TagForm, Tags } from 'containers';
import { Header } from './styles';
import {
  IconButton,
  Input,
  Modal,
  ScreenContainer,
} from 'components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as _ from 'lodash';
import { TagActions } from 'core/actions';
import { SharedTypes } from 'core/utils';
import { Permissions } from 'core/constants';

function TagsScreen(props) {
  const { navigation, addTag, isLoading, selectedAccount } = props;
  const { permissions } = selectedAccount;
  const [addVisible, setAddVisible] = useState(false);
  const [filter, setFilter] = useState({});

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        if (permissions.includes(Permissions.TAGS.ADD)) {
          return <IconButton onPress={() => setAddVisible(true)} icon="add" />;
        }
        return null;
      },
    });
  }, [navigation, permissions]);

  const search = ({ value }) => {
    setFilter({ ...filter, keyword: value });
  };

  const onSearchChange = _.debounce(search, 500);

  const add = data => {
    addTag(data, () => {
      setAddVisible(false);
    });
  };

  return (
    <ScreenContainer>
      <Header>
        <Input
          dark
          leftIcon="search"
          placeholder="Search by keyword"
          onChange={onSearchChange}
          name="keyword"
        />
      </Header>
      <Tags filter={filter} />
      <Modal
        title="Add tag"
        visible={addVisible}
        onClose={() => setAddVisible(false)}>
        <TagForm
          onCancel={() => setAddVisible(false)}
          isLoading={isLoading}
          onSubmit={add}
        />
      </Modal>
    </ScreenContainer>
  );
}

TagsScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  addTag: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  selectedAccount: SharedTypes.AccountType.isRequired,
};

function mapStateToProps(state) {
  const { tag, account } = state;
  const { isLoading } = tag;
  return { isLoading, selectedAccount: account.account };
}

const mapDispatchToProps = {
  addTag: TagActions.addTag,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TagsScreen);
