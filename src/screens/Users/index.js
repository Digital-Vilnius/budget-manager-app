import React, { useEffect, useState } from 'react';
import { Users } from 'containers';
import { Header } from './styles';
import { connect } from 'react-redux';
import { SharedTypes } from 'utils';
import PropTypes from 'prop-types';
import { Input, ScreenContainer } from 'components';
import * as _ from 'lodash';

function UsersScreen(props) {
  const { selectedAccount } = props;
  const [filter, setFilter] = useState({
    accountId: selectedAccount?.id,
  });

  useEffect(() => {
    setFilter({ accountId: selectedAccount.id });
  }, [selectedAccount]);

  const search = ({ value }) => {
    setFilter({ ...filter, keyword: value });
  };

  const onSearchChange = _.debounce(search, 500);

  return (
    <ScreenContainer>
      <Header>
        <Input
          leftIcon="search"
          placeholder="Search by keyword"
          onChange={onSearchChange}
          name="keyword"
        />
      </Header>
      <Users filter={filter} />
    </ScreenContainer>
  );
}

UsersScreen.propTypes = {
  selectedAccount: SharedTypes.AccountType.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  const { accounts } = state;
  const { selectedAccount } = accounts;
  return { selectedAccount };
}

export default connect(mapStateToProps)(UsersScreen);
