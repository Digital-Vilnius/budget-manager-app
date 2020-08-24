import React from 'react';
import {
  Container,
  Content,
  Header,
  HeaderSubtitle,
  HeaderTitle,
  Section,
} from './styles';
import { Avatar, MenuItem, SectionTitle } from 'components';
import { Grid } from 'styles';
import { connect } from 'react-redux';
import { auth as actions } from 'actions';
import PropTypes from 'prop-types';
import { SCREENS } from 'constants';

function SettingsScreen(props) {
  const { logout, fullName, email, navigation } = props;

  return (
    <Container>
      <Grid.Row mb={5}>
        <Header>
          <Grid.Row mb={10} center>
            <Avatar size={70} />
          </Grid.Row>
          <Grid.Row mb={5} center>
            <HeaderTitle>{fullName}</HeaderTitle>
          </Grid.Row>
          <Grid.Row center>
            <HeaderSubtitle>{email}</HeaderSubtitle>
          </Grid.Row>
        </Header>
      </Grid.Row>
      <Content showsVerticalScrollIndicator={false}>
        <Section>
          <Grid.Row mt={15} center mb={5}>
            <SectionTitle text="Account" />
          </Grid.Row>
          <Grid.Row mb={2}>
            <MenuItem
              onPress={() => {}}
              icon="people"
              title="Account details"
              description="Businesses at present had creatively generated effective advertising."
            />
          </Grid.Row>
        </Section>
        <Section>
          <Grid.Row center mb={5}>
            <SectionTitle text="User" />
          </Grid.Row>
          <Grid.Row mb={2}>
            <MenuItem
              onPress={() => {}}
              icon="person"
              description="Businesses at present had creatively generated effective advertising."
              title="User details"
            />
          </Grid.Row>
          <Grid.Row mb={2}>
            <MenuItem
              onPress={() =>
                navigation.navigate(SCREENS.NOTIFICATIONS_SETTINGS)
              }
              icon="lock"
              description="Businesses at present had creatively generated effective advertising."
              title="Change password"
            />
          </Grid.Row>
          <Grid.Row mb={2}>
            <MenuItem
              onPress={() =>
                navigation.navigate(SCREENS.NOTIFICATIONS_SETTINGS)
              }
              icon="notifications"
              description="Businesses at present had creatively generated effective advertising."
              title="Notifications"
            />
          </Grid.Row>
          <Grid.Row>
            <MenuItem
              onPress={() => navigation.navigate(SCREENS.LANGUAGE_SETTINGS)}
              icon="flag"
              description="Businesses at present had creatively generated effective advertising."
              title="Language"
            />
          </Grid.Row>
        </Section>
        <Section>
          <Grid.Row center mb={5}>
            <SectionTitle text="Actions" />
          </Grid.Row>
          <Grid.Row mb={2}>
            <MenuItem
              onPress={() =>
                navigation.navigate(SCREENS.NOTIFICATIONS_SETTINGS)
              }
              icon="power"
              description="Businesses at present had creatively generated effective advertising."
              title="Delete account"
            />
          </Grid.Row>
          <Grid.Row>
            <MenuItem
              onPress={logout}
              description="Businesses at present had creatively generated effective advertising."
              icon="log-out"
              title="Logout"
            />
          </Grid.Row>
        </Section>
      </Content>
    </Container>
  );
}

SettingsScreen.propTypes = {
  logout: PropTypes.func.isRequired,
  email: PropTypes.string,
  fullName: PropTypes.string,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  const { auth } = state;
  const { email, fullName } = auth;
  return { email, fullName };
}

export default connect(
  mapStateToProps,
  {
    logout: actions.logout,
  },
)(SettingsScreen);
