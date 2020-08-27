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
import PropTypes from 'prop-types';
import { Grid } from 'styles';
import { Header } from './styles';
import * as _ from 'lodash';
import { TransactionActions } from 'actions';

function TransactionsScreen(props) {
  const { navigation, isLoading, addTransaction } = props;
  const [addVisible, setAddVisible] = useState(false);
  const [filterVisible, setFilterVisible] = useState(false);
  const [filter, setFilter] = useState({});
  const [keyword, setKeyword] = useState(null);

  useEffect(() => {
    const filtersCount = Object.keys(filter).filter(key => filter[key]).length;
    navigation.setOptions({
      headerRight: () => (
        <Grid.Row>
          <Grid.Col>
            <IconButton
              onPress={() => setFilterVisible(true)}
              iconSize={24}
              icon="options"
              badgeCount={filtersCount}
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
  }, [filter, navigation]);

  const onSearch = ({ value }) => {
    setKeyword(value);
  };

  const onFilter = formData => {
    setFilterVisible(false);
    setFilter(formData);
  };

  const onQuickFilter = formData => {
    setFilter({ ...filter, ...formData });
  };

  const onSearchChange = _.debounce(onSearch, 500);

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
        <QuickFilters filter={filter} onChange={onQuickFilter} />
      </Header>
      <Transactions filter={{ keyword, ...filter }} />
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
          formData={filter}
          onCancel={() => setFilterVisible(false)}
          isLoading={isLoading}
          onSubmit={onFilter}
        />
      </Modal>
    </ScreenContainer>
  );
}

TransactionsScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
  addTransaction: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { transaction } = state;
  const { isLoading } = transaction;
  return { isLoading };
}

const mapDispatchToProps = {
  addTransaction: TransactionActions.addTransaction,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TransactionsScreen);
