import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';
import { SharedTypes } from 'utils';
import { ViewPropTypes } from 'react-native';
import { List } from 'components';
import { connect } from 'react-redux';
import { AccountUsersActions } from 'actions';

function AccountUsers(props) {
  const {
    style,
    accountUsers,
    isRefreshing,
    count,
    getAccountUsers,
    refreshAccountUsers,
    isLoading,
    filter,
    renderItem,
  } = props;

  return (
    <Container style={style}>
      <List
        filter={filter}
        isLoading={isLoading}
        count={count}
        getFunction={getAccountUsers}
        isRefreshing={isRefreshing}
        refreshFunction={refreshAccountUsers}
        data={accountUsers}
        renderItem={renderItem}
      />
    </Container>
  );
}

AccountUsers.propTypes = {
  renderItem: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isRefreshing: PropTypes.bool.isRequired,
  style: ViewPropTypes.style,
  count: PropTypes.number.isRequired,
  getAccountUsers: PropTypes.func.isRequired,
  refreshAccountUsers: PropTypes.func.isRequired,
  accountUsers: PropTypes.arrayOf(SharedTypes.AccountUserType).isRequired,
  filter: SharedTypes.AccountUsersFilter,
};

AccountUsers.defaultProps = {
  style: {},
};

function mapStateToProps(state) {
  const { accountUsers } = state;
  const { count, isLoading, isRefreshing } = accountUsers;
  return {
    accountUsers: accountUsers.accountUsers,
    isLoading,
    count,
    isRefreshing,
  };
}

const mapDispatchToProps = {
  getAccountUsers: AccountUsersActions.getAccountUsers,
  refreshAccountUsers: AccountUsersActions.refreshAccountUsers,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountUsers);
