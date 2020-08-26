import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NAVIGATORS, SCREENS } from 'constants';
import { auth as actions, accounts as accountsAction } from 'actions';
import { ActivityIndicator } from 'react-native';
import { SharedTypes } from 'utils';

function LoadingScreen(props) {
  const {
    navigation,
    isLogged,
    getLoggedUser,
    getAccounts,
    selectedAccount,
  } = props;

  useEffect(() => {
    if (!isLogged) {
      navigation.replace(NAVIGATORS.AUTH, { screen: SCREENS.LOGIN });
      return;
    }

    if (!selectedAccount) {
      navigation.replace(NAVIGATORS.AUTH, { screen: SCREENS.ACCOUNT_SELECT });
      return;
    }

    getLoggedUser(() => {
      getAccounts(() => {
        navigation.replace(NAVIGATORS.MAIN);
      });
    });
  });

  return <ActivityIndicator />;
}

LoadingScreen.propTypes = {
  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
  isLogged: PropTypes.bool.isRequired,
  getLoggedUser: PropTypes.func.isRequired,
  getAccounts: PropTypes.func.isRequired,
  selectedAccount: SharedTypes.AccountType,
};

function mapStateToProps(state) {
  const { auth, accounts } = state;
  const { isLogged } = auth;
  const { selectedAccount } = accounts;
  return { isLogged, selectedAccount };
}

export default connect(
  mapStateToProps,
  {
    getLoggedUser: actions.getLoggedUser,
    getAccounts: accountsAction.getAccounts,
  },
)(LoadingScreen);
