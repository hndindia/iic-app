import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LogInScreen from '../screens/LogInScreen';

const StackNavigator = createNativeStackNavigator();

const StackNavigation = () => (
  <StackNavigator.Navigator initialRouteName="LogIn">
    <StackNavigator.Screen
      component={LogInScreen}
      name="LogIn"
      options={{title: 'Log In'}}
    />
  </StackNavigator.Navigator>
);

export default StackNavigation;
