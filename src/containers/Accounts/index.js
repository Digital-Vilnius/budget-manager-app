import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container, List } from './styles';
import { SharedTypes } from 'utils';
import { ViewPropTypes } from 'react-native';
import { AccountsItem, Separator } from 'components';
import { connect } from 'react-redux';
import { accounts as actions } from 'actions';

function Accounts(props) {
  const { style, accounts, getAccounts, isLoading, onPress } = props;

  useEffect(() => {
    getAccounts();
  }, [getAccounts]);

  const renderItem = item => (
    <AccountsItem onPress={() => onPress(item)} key={item.id} account={item} />
  );

  return (
    <Container style={style}>
      <List
        refreshing={isLoading}
        onRefresh={getAccounts}
        ItemSeparatorComponent={() => <Separator />}
        data={accounts}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => renderItem(item)}
      />
    </Container>
  );
}

Accounts.propTypes = {
  onPress: PropTypes.func,
  isLoading: PropTypes.bool.isRequired,
  style: ViewPropTypes.style,
  getAccounts: PropTypes.func.isRequired,
  accounts: PropTypes.arrayOf(SharedTypes.AccountType).isRequired,
};

Accounts.defaultProps = {
  style: {},
  onPress: () => {},
};

function mapStateToProps(state) {
  const {
    accounts: { accounts, isLoading },
  } = state;
  return { accounts, isLoading };
}

export default connect(
  mapStateToProps,
  {
    getAccounts: actions.getAccounts,
  },
)(Accounts);
