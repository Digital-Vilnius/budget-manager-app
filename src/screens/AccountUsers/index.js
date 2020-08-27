import React, { useState } from 'react';
import { AccountUsers } from 'containers';
import { Header } from './styles';
import PropTypes from 'prop-types';
import { Input, ScreenContainer, AccountUsersItem } from 'components';
import * as _ from 'lodash';

function AccountUsersScreen(props) {
  const [filter, setFilter] = useState({});

  const search = ({ value }) => {
    setFilter({ ...filter, keyword: value });
  };

  const onSearchChange = _.debounce(search, 500);

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
      <AccountUsers
        renderItem={item => (
          <AccountUsersItem key={item.id} accountUser={item} />
        )}
        filter={filter}
      />
    </ScreenContainer>
  );
}

AccountUsersScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default AccountUsersScreen;
