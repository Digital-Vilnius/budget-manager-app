import React, { useEffect, useState } from 'react';
import {
  TransactionForm,
  Transactions,
  TransactionsFilterForm,
} from 'containers';
import {
  IconButton,
  Input,
  Modal,
  QuickFilters,
  ScreenContainer,
} from 'components';
import { connect } from 'react-redux';
import { SharedTypes } from 'utils';
import PropTypes from 'prop-types';
import { Grid } from 'styles';
import { Header } from './styles';
import * as _ from 'lodash';
import { transactions as actions } from 'actions';

function TransactionsScreen(props) {
  const { selectedAccount, navigation, isLoading, addTransaction } = props;
  const [addVisible, setAddVisible] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);
  const [filter, setFilter] = useState({
    accountId: selectedAccount.id,
  });

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Grid.Row>
          <Grid.Col>
            <IconButton
              onPress={() => setFilterVisible(true)}
              iconSize={24}
              icon="options"
            />
          </Grid.Col>
          <Grid.Col ml={10}>
            <IconButton
              onPress={() => setAddVisible(true)}
              iconSize={24}
              icon="add"
            />
          </Grid.Col>
        </Grid.Row>
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
    addTransaction(data, () => {
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
        <QuickFilters />
      </Header>
      <Transactions filter={filter} />
      <Modal
        title="Add transaction"
        visible={addVisible}
        onClose={() => setAddVisible(false)}>
        <TransactionForm
          onCancel={() => setAddVisible(false)}
          isLoading={isLoading}
          onSubmit={add}
        />
      </Modal>
      <Modal
        title="Filter"
        visible={filterVisible}
        onClose={() => setFilterVisible(false)}>
        <TransactionsFilterForm
          onCancel={() => setFilterVisible(false)}
          isLoading={isLoading}
          onSubmit={() => {}}
        />
      </Modal>
    </ScreenContainer>
  );
}

TransactionsScreen.propTypes = {
  selectedAccount: SharedTypes.AccountType.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
  addTransaction: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { accounts, transactions } = state;
  const { selectedAccount } = accounts;
  const { isLoading } = transactions;
  return { selectedAccount, isLoading };
}

const mapDispatchToProps = {
  addTransaction: actions.addTransaction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TransactionsScreen);
