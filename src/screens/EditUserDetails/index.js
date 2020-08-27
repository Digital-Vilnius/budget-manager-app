import React from 'react';
import { Container } from './styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { UserDetailsForm } from 'containers';
import { AuthActions } from 'actions';

function EditUserDetailsScreen(props) {
  const { navigation, formData, isLoading, updateLoggedUser } = props;

  const save = data => {
    updateLoggedUser(data, () => {
      navigation.goBack();
    });
  };

  return (
    <Container>
      <UserDetailsForm
        onCancel={navigation.goBack}
        formData={formData}
        isLoading={isLoading}
        onSubmit={save}
      />
    </Container>
  );
}

EditUserDetailsScreen.propTypes = {
  formData: PropTypes.shape({
    email: PropTypes.string.isRequired,
    fullName: PropTypes.string.isRequired,
  }).isRequired,
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  updateLoggedUser: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  const { auth } = state;
  const { user, isLoading } = auth;
  const { email, fullName } = user;
  const formData = { email, fullName };
  return { formData, isLoading };
}

const mapDispatchToProps = {
  updateLoggedUser: AuthActions.updateLoggedUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditUserDetailsScreen);
