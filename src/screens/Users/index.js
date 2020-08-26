import React, { useState } from 'react';
import { Users } from 'containers';
import { Header } from './styles';
import PropTypes from 'prop-types';
import { Input, ScreenContainer } from 'components';
import * as _ from 'lodash';

function UsersScreen(props) {
  const [filter, setFilter] = useState({});

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
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default UsersScreen;
