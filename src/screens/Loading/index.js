import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NAVIGATORS, SCREENS } from 'constants';
import { auth as actions, accounts as accountsAction } from 'actions';
import { ActivityIndicator } from 'react-native';

function LoadingScreen(props) {
  const { navigation, isLogged, getLoggedUser, getAccounts } = props;

  useEffect(() => {
    if (!isLogged) {
      navigation.replace(NAVIGATORS.AUTH, { screen: SCREENS.LOGIN });
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
};

function mapStateToProps(state) {
  const { auth } = state;
  const { isLogged } = auth;
  return { isLogged };
}

export default connect(
  mapStateToProps,
  {
    getLoggedUser: actions.getLoggedUser,
    getAccounts: accountsAction.getAccounts,
  },
)(LoadingScreen);
