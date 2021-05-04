import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SCREENS } from 'core/constants';
import { TagsScreen } from 'screens';
import { DRAWER_HEADER_OPTIONS } from '../config';

const TagsStack = createStackNavigator();

const OPTIONS = ({ navigation }) => {
  return DRAWER_HEADER_OPTIONS({ navigation });
};

function TagsNavigator() {
  return (
    <TagsStack.Navigator screenOptions={OPTIONS}>
      <TagsStack.Screen
        options={{ title: 'Tags' }}
        name={SCREENS.TAGS}
        component={TagsScreen}
      />
    </TagsStack.Navigator>
  );
}

export default TagsNavigator;
