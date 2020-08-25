import React from 'react';
import {
  Content,
  Footer,
  FooterMediumText,
  FooterText,
  SafeAreaContainer,
} from './styles';
import { ScreenContainer } from 'components';
import PropTypes from 'prop-types';
import { NAVIGATORS, SCREENS } from 'constants';
import { connect } from 'react-redux';
import { accounts as accountsActions, auth as actions } from 'actions';
import { LoginForm } from 'containers';

function LoginScreen(props) {
  const {
    navigation,
    isLoading,
    login,
    getAccounts,
    isAccountsLoading,
  } = props;

  const submit = request => {
    login(request, () => {
      getAccounts(() => {
        navigation.reset({
          routes: [{ name: NAVIGATORS.MAIN }],
        });
      });
    });
  };

  return (
    <ScreenContainer justifyContent="flex-end">
      <SafeAreaContainer>
        <Content>
          <LoginForm
            onSubmit={submit}
            isLoading={isLoading || isAccountsLoading}
          />
          <Footer onPress={() => navigation.navigate(SCREENS.REGISTRATION)}>
            <FooterText>Don't have an account?</FooterText>
            <FooterMediumText>Sign up</FooterMediumText>
          </Footer>
        </Content>
      </SafeAreaContainer>
    </ScreenContainer>
  );
}

LoginScreen.propTypes = {
  navigation: PropTypes.shape({
    reset: PropTypes.func.isRequired,
  }).isRequired,
  login: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  getAccounts: PropTypes.func.isRequired,
  isAccountsLoading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  const { auth, accounts } = state;
  const { isLoading } = auth;
  return { isLoading, isAccountsLoading: accounts.isLoading };
}

export default connect(
  mapStateToProps,
  {
    login: actions.login,
    logout: actions.logout,
    getAccounts: accountsActions.getAccounts,
  },
)(LoginScreen);
