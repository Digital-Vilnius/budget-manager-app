import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SCREENS } from 'constants';
import { AccountUsersScreen } from 'screens';
import { DRAWER_HEADER_OPTIONS } from '../config';

const AccountUsersStack = createStackNavigator();

const OPTIONS = ({ navigation }) => {
  return DRAWER_HEADER_OPTIONS({ navigation });
};

function AccountUsersNavigator() {
  return (
    <AccountUsersStack.Navigator screenOptions={OPTIONS}>
      <AccountUsersStack.Screen
        options={{ title: 'Users' }}
        name={SCREENS.ACCOUNT_USERS}
        component={AccountUsersScreen}
      />
    </AccountUsersStack.Navigator>
  );
}

export default AccountUsersNavigator;
