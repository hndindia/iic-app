import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import LogInScreen from '../screens/LogInScreen';
import LoadingScreen from '../screens/LoadingScreen';

const StackNavigator = createNativeStackNavigator();

const StackNavigation = () => (
  <StackNavigator.Navigator initialRouteName="Loading">


    <StackNavigator.Screen
      component={LoadingScreen}
      name="Loading"
      options={{headerShown: false}}
    />
  
    <StackNavigator.Screen
      component={LogInScreen}
      name="LogIn"
      options={{headerShown: false}}
    />
  
  </StackNavigator.Navigator>
);

export default StackNavigation;
