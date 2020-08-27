import React, { useState } from 'react';
import { Container, Content, Footer } from './styles';
import { Button, List, OptionsItem } from 'components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SharedTypes } from 'utils';
import { AccountsActions, AccountActions } from 'actions';
import { BUTTONS, Grid } from 'styles';

function AccountSelect(props) {
  const {
    selectCallback,
    selectedAccount,
    selectAccount,
    accounts,
    getAccounts,
    isLoading,
    isRefreshing,
    count,
    refreshAccounts,
    isAccountLoading,
    onCancel,
  } = props;
  const [account, setAccount] = useState(selectedAccount);

  const navigate = () => {
    selectAccount(account.id, () => {
      selectCallback();
    });
  };

  const renderItem = item => (
    <OptionsItem
      selected={item.id === account?.id}
      description={item.roles.join(', ')}
      onPress={() => setAccount(item.id === account?.id ? null : item)}
      key={item.id}
      title={item.title}
    />
  );

  return (
    <Container>
      <Content>
        <List
          isLoading={isLoading}
          count={count}
          getFunction={getAccounts}
          isRefreshing={isRefreshing}
          refreshFunction={refreshAccounts}
          data={accounts}
          renderItem={renderItem}
        />
      </Content>
      <Footer>
        <Grid.Row mb={10} center>
          <Button
            isLoading={isAccountLoading}
            disabled={!account}
            onPress={navigate}
            title="Select"
          />
        </Grid.Row>
        <Grid.Row center>
          <Button
            outline
            type={BUTTONS.SECONDARY}
            onPress={onCancel}
            title="Cancel"
          />
        </Grid.Row>
      </Footer>
    </Container>
  );
}

AccountSelect.propTypes = {
  selectCallback: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  selectedAccount: SharedTypes.AccountType,
  selectAccount: PropTypes.func.isRequired,
  getAccounts: PropTypes.func.isRequired,
  refreshAccounts: PropTypes.func.isRequired,
  accounts: PropTypes.arrayOf(SharedTypes.AccountsListItemType).isRequired,
  isRefreshing: PropTypes.bool.isRequired,
  isAccountLoading: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  const { accounts, account } = state;
  const { count, isRefreshing, isLoading } = accounts;
  return {
    selectedAccount: account.account,
    accounts: accounts.accounts,
    isLoading,
    isAccountLoading: account.isLoading,
    count,
    isRefreshing,
  };
}

const mapDispatchToProps = {
  selectAccount: AccountActions.selectAccount,
  getAccounts: AccountsActions.getAccounts,
  refreshAccounts: AccountsActions.refreshAccounts,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountSelect);
