import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SCREENS } from 'constants';
import { CategoriesScreen } from 'screens';
import { DRAWER_HEADER_OPTIONS } from '../config';

const CategoriesStack = createStackNavigator();

const OPTIONS = ({ navigation }) => {
  return DRAWER_HEADER_OPTIONS({ navigation });
};

function CategoriesNavigator() {
  return (
    <CategoriesStack.Navigator screenOptions={OPTIONS}>
      <CategoriesStack.Screen
        options={{ title: 'Categories' }}
        name={SCREENS.CATEGORIES}
        component={CategoriesScreen}
      />
    </CategoriesStack.Navigator>
  );
}

export default CategoriesNavigator;
