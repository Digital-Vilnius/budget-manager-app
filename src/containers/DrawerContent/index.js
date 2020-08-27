import React from 'react';
import PropTypes from 'prop-types';
import { ViewPropTypes } from 'react-native';
import { connect } from 'react-redux';
import {
  BalanceContainer,
  DescriptionLabel,
  BalanceText,
  Container,
  Content,
  Footer,
  Header,
  NavigationItem,
  NavigationItemText,
  Wrapper,
  AccountSelectContainer,
  AccountTitle,
  FullNameText,
  BalanceLabel,
} from './styles';
import { COLORS, Grid } from 'styles';
import { Avatar, Icon, IconButton } from 'components';
import { NAVIGATORS, SCREENS } from 'constants';
import { SharedTypes } from 'utils';
import { AuthActions } from 'actions';

function DrawerContent(props) {
  const { style, navigation, selectedAccount, logout, user } = props;
  const { email, fullName } = user;

  const renderNavigationItem = (onPress, label, icon) => (
    <NavigationItem onPress={onPress}>
      <IconButton iconColor={COLORS.GREY} iconSize={24} disabled icon={icon} />
      <NavigationItemText>{label}</NavigationItemText>
    </NavigationItem>
  );

  return (
    <Container style={style}>
      <Wrapper>
        <Header>
          <Grid.Row mb={25} spaceBetween>
            <Grid.Col>
              <AccountSelectContainer
                onPress={() => navigation.navigate(SCREENS.ACCOUNT_SELECT)}>
                <Grid.Col mr={25}>
                  <AccountTitle>{selectedAccount.title}</AccountTitle>
                  <DescriptionLabel>{selectedAccount.type}</DescriptionLabel>
                </Grid.Col>
                <Icon
                  disabled
                  size={18}
                  color={COLORS.GREY}
                  name="arrow-down"
                />
              </AccountSelectContainer>
            </Grid.Col>
            <IconButton onPress={navigation.toggleDrawer} icon="close" />
          </Grid.Row>
          <Grid.Row>
            <Grid.Col mr={15}>
              <Avatar
                placeholderColor={COLORS.PURPLE}
                size={45}
                placeholder={email.substring(0, 2)}
              />
            </Grid.Col>
            <Grid.Col>
              <FullNameText>{fullName}</FullNameText>
              <DescriptionLabel>{selectedAccount.roles[0]}</DescriptionLabel>
            </Grid.Col>
          </Grid.Row>
        </Header>
        <BalanceContainer>
          <BalanceLabel>Balance</BalanceLabel>
          <BalanceText>{`${selectedAccount.balance.toFixed(2)} $`}</BalanceText>
        </BalanceContainer>
        <Content bounces={false}>
          {renderNavigationItem(
            () => navigation.navigate(NAVIGATORS.DASHBOARD),
            'Dashboard',
            'stats',
          )}
          {renderNavigationItem(
            () => navigation.navigate(NAVIGATORS.TRANSACTIONS),
            'History',
            'time',
          )}
          {renderNavigationItem(
            () => navigation.navigate(NAVIGATORS.CATEGORIES),
            'Categories',
            'keypad',
          )}
          {renderNavigationItem(
            () => navigation.navigate(NAVIGATORS.TAGS),
            'Tags',
            'bookmark',
          )}
          {renderNavigationItem(
            () => navigation.navigate(NAVIGATORS.USERS),
            'Users',
            'people',
          )}
        </Content>
        <Footer>
          {renderNavigationItem(
            () => navigation.navigate(NAVIGATORS.SETTINGS),
            'Settings',
            'settings',
          )}
          {renderNavigationItem(logout, 'Logout', 'log-out')}
        </Footer>
      </Wrapper>
    </Container>
  );
}

DrawerContent.propTypes = {
  style: ViewPropTypes.style,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    closeDrawer: PropTypes.func.isRequired,
  }).isRequired,
  user: SharedTypes.LoggedUserType.isRequired,
  selectedAccount: SharedTypes.AccountType.isRequired,
  logout: PropTypes.func.isRequired,
};

DrawerContent.defaultProps = {
  style: {},
};

function mapStateToProps(state) {
  const { account, auth } = state;
  const { user } = auth;
  return { user, selectedAccount: account.account };
}

const mapDispatchToProps = {
  logout: AuthActions.logout,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DrawerContent);
