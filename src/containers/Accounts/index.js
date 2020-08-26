import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, List } from './styles';
import { SharedTypes } from 'utils';
import { ViewPropTypes } from 'react-native';
import { AccountsItem } from 'components';
import { connect } from 'react-redux';
import { accounts as actions } from 'actions';

function Accounts(props) {
  const {
    style,
    accounts,
    getAccounts,
    isLoading,
    onPress,
    isRefreshing,
    count,
    refreshAccounts,
  } = props;

  useEffect(() => {
    getAccounts();
  }, [getAccounts]);

  const renderItem = item => (
    <AccountsItem onPress={() => onPress(item)} key={item.id} account={item} />
  );

  return (
    <Container style={style}>
      <List
        isLoading={isLoading}
        count={count}
        getFunction={getAccounts}
        isRefreshing={isRefreshing}
        refreshFunction={refreshAccounts}
        data={accounts}
        renderItem={renderItem}
      />
    </Container>
  );
}

Accounts.propTypes = {
  onPress: PropTypes.func,
  isLoading: PropTypes.bool.isRequired,
  style: ViewPropTypes.style,
  getAccounts: PropTypes.func.isRequired,
  refreshAccounts: PropTypes.func.isRequired,
  accounts: PropTypes.arrayOf(SharedTypes.AccountType).isRequired,
  isRefreshing: PropTypes.bool.isRequired,
};

Accounts.defaultProps = {
  style: {},
  onPress: () => {},
};

function mapStateToProps(state) {
  const { accounts } = state;
  const { isLoading, count, isRefreshing } = accounts;
  return { accounts: accounts.accounts, isLoading, count, isRefreshing };
}

const mapDispatchToProps = {
  getAccounts: actions.getAccounts,
  refreshAccounts: actions.refreshAccounts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Accounts);
