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
import { SCREENS } from 'constants';
import { connect } from 'react-redux';
import { auth as actions, user as userActions } from 'actions';
import { LoginForm } from 'containers';

function LoginScreen(props) {
  const { navigation, isLoading, login, getUser, isUserLoading } = props;

  const submit = request => {
    login(request, () => {
      getUser(() => {
        navigation.replace(SCREENS.ACCOUNT_SELECT);
      });
    });
  };

  return (
    <ScreenContainer>
      <Content>
        <LoginForm onSubmit={submit} isLoading={isLoading || isUserLoading} />
        <SafeAreaContainer>
          <Footer onPress={() => navigation.navigate(SCREENS.REGISTRATION)}>
            <FooterText>Don't have an account?</FooterText>
            <FooterMediumText>Sign up</FooterMediumText>
          </Footer>
        </SafeAreaContainer>
      </Content>
    </ScreenContainer>
  );
}

LoginScreen.propTypes = {
  navigation: PropTypes.shape({
    reset: PropTypes.func.isRequired,
  }).isRequired,
  login: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  getUser: PropTypes.func.isRequired,
  isUserLoading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  const { auth, user } = state;
  const { isLoading } = auth;
  return { isLoading, isUserLoading: user.isLoading };
}

const mapDispatchToProps = {
  login: actions.login,
  getUser: userActions.getUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);
