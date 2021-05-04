import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import SettingsNavigator from './SettingsNavigator';
import { NAVIGATORS } from 'core/constants';
import DashboardNavigator from './DashboardNavigator';
import TransactionsNavigator from './TransactionsNavigator';
import CategoriesNavigator from './CategoriesNavigator';
import AccountUsersNavigator from './AccountUsersNavigator';
import TagsNavigator from './TagsNavigator';
import { DrawerContent } from 'containers';
import { COLORS } from 'styles';
import InvitationsNavigator from './InvitationsNavigator';

const Drawer = createDrawerNavigator();

const DRAWER_STYLE = {
  width: 320,
  inactiveTintColor: COLORS.RED,
};

function MainDrawerNavigator() {
  return (
    <Drawer.Navigator
      drawerContent={props => {
        return <DrawerContent {...props} />;
      }}
      drawerStyle={DRAWER_STYLE}>
      <Drawer.Screen
        name={NAVIGATORS.DASHBOARD}
        component={DashboardNavigator}
      />
      <Drawer.Screen
        name={NAVIGATORS.TRANSACTIONS}
        component={TransactionsNavigator}
      />
      <Drawer.Screen
        name={NAVIGATORS.CATEGORIES}
        component={CategoriesNavigator}
      />
      <Drawer.Screen
        name={NAVIGATORS.INVITATIONS}
        component={InvitationsNavigator}
      />
      <Drawer.Screen name={NAVIGATORS.TAGS} component={TagsNavigator} />
      <Drawer.Screen
        name={NAVIGATORS.USERS}
        component={AccountUsersNavigator}
      />
      <Drawer.Screen name={NAVIGATORS.SETTINGS} component={SettingsNavigator} />
    </Drawer.Navigator>
  );
}

export default MainDrawerNavigator;
