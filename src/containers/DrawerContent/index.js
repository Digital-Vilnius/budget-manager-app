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
  HeaderTitle,
  NavigationItem,
  NavigationItemText,
  Wrapper,
} from './styles';
import { COLORS, Grid } from 'styles';
import { IconButton } from 'components';
import { NAVIGATORS } from 'constants';
import { SharedTypes } from 'utils';
import { auth as actions, accounts as accountsActions } from 'actions';
import AccountSelect from '../AccountSelect';

function DrawerContent(props) {
  const {
    style,
    fullName,
    email,
    navigation,
    selectedAccount,
    logout,
    selectAccount,
  } = props;
  const { balance } = selectedAccount;

  const renderNavigationItem = (onPress, label, icon) => (
    <NavigationItem onPress={onPress}>
      <IconButton iconColor={COLORS.GREY} iconSize={24} disabled icon={icon} />
      <NavigationItemText>{label}</NavigationItemText>
    </NavigationItem>
  );

  const changeAccount = ({ value }) => {
    selectAccount({ account: value });
  };

  return (
    <Container style={style}>
      <Wrapper>
        <Header>
          <Grid.Row spaceBetween>
            <Grid.Col>
              <AccountSelect
                value={selectedAccount.id}
                onChange={changeAccount}
                name="account"
              />
            </Grid.Col>
            <IconButton onPress={navigation.toggleDrawer} icon="close" />
          </Grid.Row>
        </Header>
        <BalanceContainer>
          <BalanceLabel>Balance</BalanceLabel>
          <BalanceText>{`${balance.toFixed(2)} $`}</BalanceText>
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
  const { accounts, user } = state;
  const { fullName, email } = user;
  const { selectedAccount } = accounts;
  return { fullName, email, selectedAccount };
}

const mapDispatchToProps = {
  logout: actions.logout,
  selectAccount: accountsActions.selectAccount,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(DrawerContent);
