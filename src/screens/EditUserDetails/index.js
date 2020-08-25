import React from 'react';
import { Container } from './styles';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { UserDetailsForm } from 'containers';
import { auth as actions } from 'actions';

function EditUserDetailsScreen(props) {
  const {
    navigation,
    formData,
    isLoading,
    updateUserDetails,
    getLoggedUser,
  } = props;

  const save = data => {
    updateUserDetails(data, () => {
      getLoggedUser(() => {
        navigation.goBack();
      });
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
  updateUserDetails: PropTypes.func.isRequired,
  getLoggedUser: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  const { auth } = state;
  const { email, fullName, isLoading } = auth;
  const formData = { email, fullName };
  return { formData, isLoading };
}

const mapDispatchToProps = {
  updateUserDetails: actions.updateUserDetails,
  getLoggedUser: actions.getLoggedUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditUserDetailsScreen);
