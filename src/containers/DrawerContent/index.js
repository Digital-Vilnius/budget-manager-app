import React from 'react';
import PropTypes from 'prop-types';
import { ViewPropTypes } from 'react-native';
import { connect } from 'react-redux';
import {
  BalanceContainer,
  BalanceLabel,
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
} from './styles';
import { COLORS, Grid } from 'styles';
import { Icon, IconButton } from 'components';
import { NAVIGATORS, SCREENS } from 'constants';
import { SharedTypes } from 'utils';
import { AuthActions } from 'actions';

function DrawerContent(props) {
  const { style, navigation, selectedAccount, logout } = props;
  const { balance } = selectedAccount;

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
          <Grid.Row spaceBetween>
            <Grid.Col>
              <AccountSelectContainer
                onPress={() => navigation.navigate(SCREENS.ACCOUNT_SELECT)}>
                <AccountTitle>{selectedAccount.title}</AccountTitle>
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
        </Header>
        <BalanceContainer>
          <BalanceLabel>Balance</BalanceLabel>
          <BalanceText>{`${balance?.toFixed(2)} $`}</BalanceText>
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
  fullName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  selectedAccount: SharedTypes.AccountType.isRequired,
  logout: PropTypes.func.isRequired,
};

DrawerContent.defaultProps = {
  style: {},
};

function mapStateToProps(state) {
  const { account, user } = state;
  const { fullName, email } = user;
  return { fullName, email, selectedAccount: account.account };
}

const mapDispatchToProps = {
  logout: AuthActions.logout,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DrawerContent);
