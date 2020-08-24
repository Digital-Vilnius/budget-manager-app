import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SCREENS } from 'constants';
import { DashboardScreen } from 'screens';
import { DRAWER_HEADER_OPTIONS } from '../config';

const DashboardStack = createStackNavigator();

const OPTIONS = ({ navigation }) => {
  return DRAWER_HEADER_OPTIONS({ navigation });
};

function DashboardNavigator() {
  return (
    <DashboardStack.Navigator screenOptions={OPTIONS}>
      <DashboardStack.Screen
        options={{ title: 'Dashboard' }}
        name={SCREENS.DASHBOARD}
        component={DashboardScreen}
      />
    </DashboardStack.Navigator>
  );
}

export default DashboardNavigator;
