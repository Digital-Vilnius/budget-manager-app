import React from 'react';
import { Content, Wrapper } from './styles';
import { ScreenContainer } from 'components';
import PropTypes from 'prop-types';
import { SCREENS } from 'constants';
import { connect } from 'react-redux';
import { AuthActions } from 'actions';
import { LoginForm } from 'containers';

function LoginScreen(props) {
  const { navigation, isLoading, login } = props;

  const submit = request => {
    login(request, () => {
      navigation.replace(SCREENS.ACCOUNT_SELECT);
    });
  };

  return (
    <ScreenContainer>
      <Content>
        <Wrapper>
          <LoginForm onSubmit={submit} isLoading={isLoading} />
        </Wrapper>
      </Content>
    </ScreenContainer>
  );
}

LoginScreen.propTypes = {
  navigation: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
  login: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  const { auth } = state;
  const { isLoading } = auth;
  return { isLoading };
}

const mapDispatchToProps = {
  login: AuthActions.login,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginScreen);
