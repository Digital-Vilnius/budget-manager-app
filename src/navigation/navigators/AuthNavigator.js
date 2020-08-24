import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SCREENS } from 'constants';
import { LoginScreen, RegistrationScreen } from 'screens';

const AuthStack = createStackNavigator();

const OPTIONS = {
  headerShown: false,
};

function AuthNavigator() {
  return (
    <AuthStack.Navigator screenOptions={OPTIONS}>
      <AuthStack.Screen name={SCREENS.LOGIN} component={LoginScreen} />
      <AuthStack.Screen
        name={SCREENS.REGISTRATION}
        component={RegistrationScreen}
      />
    </AuthStack.Navigator>
  );
}

export default AuthNavigator;
