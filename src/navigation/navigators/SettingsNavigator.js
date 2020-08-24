import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SCREENS } from 'constants';
import {
  LanguageSettingsScreen,
  NotificationsSettingsScreen,
  SettingsScreen,
} from 'screens';
import { DRAWER_HEADER_OPTIONS } from '../config';

const SettingsStack = createStackNavigator();

const OPTIONS = ({ navigation }) => {
  return DRAWER_HEADER_OPTIONS({ navigation });
};

function SettingsNavigator() {
  return (
    <SettingsStack.Navigator screenOptions={OPTIONS}>
      <SettingsStack.Screen
        options={{ title: 'Settings' }}
        name={SCREENS.SETTINGS}
        component={SettingsScreen}
      />
      <SettingsStack.Screen
        options={{ title: 'Notifications' }}
        name={SCREENS.NOTIFICATIONS_SETTINGS}
        component={NotificationsSettingsScreen}
      />
      <SettingsStack.Screen
        options={{ title: 'Language' }}
        name={SCREENS.LANGUAGE_SETTINGS}
        component={LanguageSettingsScreen}
      />
    </SettingsStack.Navigator>
  );
}

export default SettingsNavigator;
