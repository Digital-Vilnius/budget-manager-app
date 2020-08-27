import React from 'react';
import { Container } from './styles';
import PropTypes from 'prop-types';
import { NAVIGATORS } from 'constants';
import { AccountSelect } from 'containers';
import { Title } from 'components';
import { COLORS, Grid } from 'styles';
import { AuthActions } from 'actions';
import { connect } from 'react-redux';
import { SharedTypes } from 'utils';

function AccountSelectScreen(props) {
  const { navigation, selectedAccount, logout } = props;

  const selectNavigate = () => {
    navigation.reset({
      routes: [{ name: NAVIGATORS.MAIN }],
    });
  };

  const cancelNavigate = () => {
    !selectedAccount ? logout() : selectNavigate();
  };

  return (
    <Container>
      <Grid.Row mt={15} mb={25} center>
        <Title color={COLORS.DARK_BLUE} text="Select account" />
      </Grid.Row>
      <AccountSelect
        onCancel={cancelNavigate}
        selectCallback={selectNavigate}
      />
    </Container>
  );
}

AccountSelectScreen.propTypes = {
  navigation: PropTypes.shape({
    reset: PropTypes.func.isRequired,
  }).isRequired,
  selectedAccount: SharedTypes.AccountType,
};

function mapStateToProps(state) {
  const { account } = state;
  return { selectedAccount: account.account };
}

const mapDispatchToProps = {
  logout: AuthActions.logout,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountSelectScreen);
