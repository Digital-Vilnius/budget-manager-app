import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import SettingsNavigator from './SettingsNavigator';
import { NAVIGATORS } from 'constants';
import DashboardNavigator from './DashboardNavigator';
import TransactionsNavigator from './TransactionsNavigator';
import CategoriesNavigator from './CategoriesNavigator';
import UsersNavigator from './UsersNavigator';
import TagsNavigator from './TagsNavigator';

const Drawer = createDrawerNavigator();

const DRAWER_STYLE = {
  width: 333,
};

function MainDrawerNavigator() {
  return (
    <Drawer.Navigator drawerStyle={DRAWER_STYLE}>
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
      <Drawer.Screen name={NAVIGATORS.TAGS} component={TagsNavigator} />
      <Drawer.Screen name={NAVIGATORS.USERS} component={UsersNavigator} />
      <Drawer.Screen name={NAVIGATORS.SETTINGS} component={SettingsNavigator} />
    </Drawer.Navigator>
  );
}

export default MainDrawerNavigator;
