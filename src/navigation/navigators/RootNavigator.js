import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { NAVIGATORS, SCREENS } from 'constants';
import AuthNavigator from './AuthNavigator';
import MainDrawerNavigator from './MainDrawerNavigator';
import { LoadingScreen, AccountSelectScreen } from 'screens';
import { NavigationService } from 'services';

const RootStack = createStackNavigator();

const OPTIONS = {
  headerShown: false,
};

function RootNavigator() {
  return (
    <NavigationContainer ref={NavigationService.navigationRef}>
      <RootStack.Navigator screenOptions={OPTIONS}>
        <RootStack.Screen name={SCREENS.LOADING} component={LoadingScreen} />
        <RootStack.Screen name={NAVIGATORS.AUTH} component={AuthNavigator} />
        <RootStack.Screen
          name={SCREENS.ACCOUNT_SELECT}
          component={AccountSelectScreen}
        />
        <RootStack.Screen
          name={NAVIGATORS.MAIN}
          component={MainDrawerNavigator}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigator;
