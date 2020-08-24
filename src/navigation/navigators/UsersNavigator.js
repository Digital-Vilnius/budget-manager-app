import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SCREENS } from 'constants';
import { UsersScreen } from 'screens';
import { DRAWER_HEADER_OPTIONS } from '../config';

const UsersStack = createStackNavigator();

const OPTIONS = ({ navigation }) => {
  return DRAWER_HEADER_OPTIONS({ navigation });
};

function UsersNavigator() {
  return (
    <UsersStack.Navigator screenOptions={OPTIONS}>
      <UsersStack.Screen
        options={{ title: 'Users' }}
        name={SCREENS.USERS}
        component={UsersScreen}
      />
    </UsersStack.Navigator>
  );
}

export default UsersNavigator;
