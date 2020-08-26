import React from 'react';
import {
  Content,
  Footer,
  FooterMediumText,
  FooterText,
  SafeAreaContainer,
} from './styles';
import { ScreenContainer } from 'components';
import { SCREENS } from 'constants';
import PropTypes from 'prop-types';
import { RegistrationForm } from 'containers';
import { connect } from 'react-redux';
import { AuthActions } from 'actions';

function RegistrationScreen(props) {
  const { navigation, register, isLoading } = props;

  const save = data => {
    register(data, () => {
      navigation.navigate(SCREENS.LOGIN);
    });
  };

  return (
    <ScreenContainer>
      <Content>
        <RegistrationForm isLoading={isLoading} onSubmit={save} />
        <SafeAreaContainer>
          <Footer onPress={() => navigation.navigate(SCREENS.LOGIN)}>
            <FooterText>Already have an account?</FooterText>
            <FooterMediumText>Sign in</FooterMediumText>
          </Footer>
        </SafeAreaContainer>
      </Content>
    </ScreenContainer>
  );
}

RegistrationScreen.propTypes = {
  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
  register: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  const { auth } = state;
  const { isLoading } = auth;
  return { isLoading };
}

const mapDispatchToProps = {
  register: AuthActions.register,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegistrationScreen);
