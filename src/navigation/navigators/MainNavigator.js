import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NAVIGATORS } from 'constants';
import React from 'react';
import SettingsNavigator from './SettingsNavigator';
import TransactionsNavigator from './TransactionsNavigator';
import DashboardNavigator from './DashboardNavigator';
import CategoriesNavigator from './CategoriesNavigator';
import AccountUsersNavigator from './UsersNavigator';
import { Icon } from 'components';
import { COLORS } from 'styles';

const MainTabs = createBottomTabNavigator();

const TAB_BAR_OPTIONS = {
  showLabel: false,
  activeTintColor: COLORS.PRIMARY,
  inactiveTintColor: COLORS.GREY,
};

const DASHBOARD_OPTIONS = {
  tabBarIcon: ({ color }) => <Icon disabled color={color} name="stats" />,
};

const TRANSACTIONS_OPTIONS = {
  tabBarIcon: ({ color }) => <Icon disabled color={color} name="card" />,
};

const CATEGORIES_OPTIONS = {
  tabBarIcon: ({ color }) => <Icon disabled color={color} name="list" />,
};

const USERS_OPTIONS = {
  tabBarIcon: ({ color }) => <Icon disabled color={color} name="people" />,
};

const SETTINGS_OPTIONS = {
  tabBarIcon: ({ color }) => <Icon disabled color={color} name="settings" />,
};

function MainNavigator() {
  return (
    <MainTabs.Navigator tabBarOptions={TAB_BAR_OPTIONS}>
      <MainTabs.Screen
        options={DASHBOARD_OPTIONS}
        name={NAVIGATORS.DASHBOARD}
        component={DashboardNavigator}
      />
      <MainTabs.Screen
        options={TRANSACTIONS_OPTIONS}
        name={NAVIGATORS.TRANSACTIONS}
        component={TransactionsNavigator}
      />
      <MainTabs.Screen
        options={CATEGORIES_OPTIONS}
        name={NAVIGATORS.CATEGORIES}
        component={CategoriesNavigator}
      />
      <MainTabs.Screen
        options={USERS_OPTIONS}
        name={NAVIGATORS.USERS}
        component={AccountUsersNavigator}
      />
      <MainTabs.Screen
        options={SETTINGS_OPTIONS}
        name={NAVIGATORS.SETTINGS}
        component={SettingsNavigator}
      />
    </MainTabs.Navigator>
  );
}

export default MainNavigator;
