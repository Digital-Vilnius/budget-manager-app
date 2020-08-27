import React from 'react';
import {
  Container,
  Content,
  Header,
  HeaderSubtitle,
  HeaderTitle,
} from './styles';
import { Avatar, MenuItem, Separator } from 'components';
import { COLORS, Grid } from 'styles';
import { connect } from 'react-redux';
import { AuthActions as actions } from 'actions';
import PropTypes from 'prop-types';
import { SCREENS } from 'constants';
import { SharedTypes } from 'utils';

function SettingsScreen(props) {
  const { logout, user, navigation } = props;
  const { email, fullName } = user;

  return (
    <Container>
      <Header>
        <Grid.Row mb={20} center>
          <Avatar
            placeholderColor={COLORS.PURPLE}
            placeholder={email.substring(0, 2)}
            size={70}
          />
        </Grid.Row>
        <Grid.Row mb={5} center>
          <HeaderTitle>{fullName}</HeaderTitle>
        </Grid.Row>
        <Grid.Row center>
          <HeaderSubtitle>{email}</HeaderSubtitle>
        </Grid.Row>
      </Header>
      <Content showsVerticalScrollIndicator={false}>
        <Separator />
        <MenuItem
          onPress={() => navigation.navigate(SCREENS.EDIT_USER_DETAILS)}
          icon="person"
          description="Businesses at present had creatively generated effective advertising."
          title="User details"
        />
        <Separator />
        <MenuItem
          onPress={() => navigation.navigate(SCREENS.NOTIFICATIONS_SETTINGS)}
          icon="lock"
          description="Businesses at present had creatively generated effective advertising."
          title="Change password"
        />
        <Separator />
        <MenuItem
          onPress={() => navigation.navigate(SCREENS.NOTIFICATIONS_SETTINGS)}
          icon="notifications"
          description="Businesses at present had creatively generated effective advertising."
          title="Notifications"
        />
        <Separator />
        <MenuItem
          onPress={() => navigation.navigate(SCREENS.LANGUAGE_SETTINGS)}
          icon="flag"
          description="Businesses at present had creatively generated effective advertising."
          title="Language"
        />
        <Grid.Row mb={40}>
          <Separator />
        </Grid.Row>
        <Separator />
        <MenuItem
          onPress={logout}
          icon="log-out"
          description="Businesses at present had creatively generated effective advertising."
          title="Logout"
        />
        <Separator />
      </Content>
    </Container>
  );
}

SettingsScreen.propTypes = {
  logout: PropTypes.func.isRequired,
  user: SharedTypes.LoggedUserType.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  const { auth, account } = state;
  const { user } = auth;
  return { user, roles: account.account.roles };
}

const mapDispatchToProps = {
  logout: actions.logout,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SettingsScreen);
