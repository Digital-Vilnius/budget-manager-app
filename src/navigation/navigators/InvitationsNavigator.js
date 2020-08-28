import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SCREENS } from 'constants';
import { InvitationsScreen } from 'screens';
import { DRAWER_HEADER_OPTIONS } from '../config';

const InvitationsStack = createStackNavigator();

const OPTIONS = ({ navigation }) => {
  return DRAWER_HEADER_OPTIONS({ navigation });
};

function InvitationsNavigator() {
  return (
    <InvitationsStack.Navigator screenOptions={OPTIONS}>
      <InvitationsStack.Screen
        options={{ title: 'Invitations' }}
        name={SCREENS.INVITATIONS}
        component={InvitationsScreen}
      />
    </InvitationsStack.Navigator>
  );
}

export default InvitationsNavigator;
