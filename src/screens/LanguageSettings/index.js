import React from 'react';
import { Container } from './styles';
import { SharedTypes } from 'utils';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

function LanguageSettingsScreen(props) {
  return <Container />;
}

LanguageSettingsScreen.propTypes = {
  selectedAccount: SharedTypes.AccountType.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  const { accounts } = state;
  const { selectedAccount } = accounts;
  return { selectedAccount };
}

export default connect(mapStateToProps)(LanguageSettingsScreen);
