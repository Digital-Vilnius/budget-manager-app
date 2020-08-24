import React, { useEffect, useState } from 'react';
import { Categories, CategoryForm } from 'containers';
import { Header } from './styles';
import { IconButton, Input, Modal, ScreenContainer } from 'components';
import { connect } from 'react-redux';
import { SharedTypes } from 'utils';
import PropTypes from 'prop-types';
import { categories as actions } from 'actions';
import * as _ from 'lodash';

function CategoriesScreen(props) {
  const { selectedAccount, navigation, addCategory, isLoading } = props;
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
    addCategory(data, () => {
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
      <Categories filter={filter} />
      <Modal
        title="Add category"
        visible={addVisible}
        onClose={() => setAddVisible(false)}>
        <CategoryForm
          onCancel={() => setAddVisible(false)}
          isLoading={isLoading}
          onSubmit={add}
        />
      </Modal>
    </ScreenContainer>
  );
}

CategoriesScreen.propTypes = {
  selectedAccount: SharedTypes.AccountType.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
  addCategory: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { accounts, categories } = state;
  const { selectedAccount } = accounts;
  const { isLoading } = categories;
  return { selectedAccount, isLoading };
}

const mapDispatchToProps = {
  addCategory: actions.addCategory,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoriesScreen);
