import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SCREENS } from 'core/constants';
import { TransactionsScreen } from 'screens';
import { DRAWER_HEADER_OPTIONS } from '../config';

const TransactionsStack = createStackNavigator();

const OPTIONS = ({ navigation }) => {
  return DRAWER_HEADER_OPTIONS({ navigation });
};

function TransactionsNavigator() {
  return (
    <TransactionsStack.Navigator screenOptions={OPTIONS}>
      <TransactionsStack.Screen
        options={{ title: 'Transactions' }}
        name={SCREENS.TRANSACTIONS}
        component={TransactionsScreen}
      />
    </TransactionsStack.Navigator>
  );
}

export default TransactionsNavigator;
