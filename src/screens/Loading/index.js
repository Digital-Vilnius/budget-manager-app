import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { NAVIGATORS, SCREENS } from 'constants';
import { AuthActions, UserActions } from 'actions';
import { ActivityIndicator } from 'react-native';
import { SharedTypes } from 'utils';

function LoadingScreen(props) {
  const {
    navigation,
    isLogged,
    getLoggedUser,
    selectedAccount,
    getUser,
  } = props;

  useEffect(() => {
    if (!isLogged) {
      navigation.replace(NAVIGATORS.AUTH, { screen: SCREENS.LOGIN });
      return;
    }

    getLoggedUser(() => {
      getUser(() => {
        navigation.replace(
          !selectedAccount ? SCREENS.ACCOUNT_SELECT : NAVIGATORS.MAIN,
        );
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
  selectedAccount: SharedTypes.AccountType,
};

function mapStateToProps(state) {
  const { auth, account } = state;
  const { isLogged } = auth;
  return { isLogged, selectedAccount: account.account };
}

const mapDispatchToProps = {
  getLoggedUser: AuthActions.getLoggedUser,
  getUser: UserActions.getUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoadingScreen);
