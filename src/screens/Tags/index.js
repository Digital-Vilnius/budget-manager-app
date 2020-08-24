import React, { useEffect, useState } from 'react';
import { TagForm, Tags } from 'containers';
import { Header } from './styles';
import { IconButton, Input, Modal, ScreenContainer } from 'components';
import { connect } from 'react-redux';
import { SharedTypes } from 'utils';
import PropTypes from 'prop-types';
import * as _ from 'lodash';
import { tags as actions } from 'actions';

function TagsScreen(props) {
  const { selectedAccount, navigation, addTag, isLoading } = props;
  const [addVisible, setAddVisible] = useState(false);
  const [filter, setFilter] = useState({
    accountId: selectedAccount.id,
  });

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <IconButton onPress={() => setAddVisible(true)} icon="add" />
      ),
    });
  }, [navigation]);

  useEffect(() => {
    setFilter({ accountId: selectedAccount.id });
  }, [selectedAccount]);

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
  selectedAccount: SharedTypes.AccountType.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  addTag: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  const { accounts, tags } = state;
  const { selectedAccount } = accounts;
  const { isLoading } = tags;
  return { selectedAccount, isLoading };
}

const mapDispatchToProps = {
  addTag: actions.addTag,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TagsScreen);
