import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ForMore from '../screens/ForMore';
import Profile from '../screens/Profile';

const StackNavigator = createNativeStackNavigator();

const HomeStackNavigation = () => (
  <StackNavigator.Navigator initialRouteName="ForMore">

    <StackNavigator.Screen
      component={ForMore}
      name="ForMore"
      options={{headerShown: false}}
    />

    <StackNavigator.Screen
      component={Profile}
      name="Profile"
      options={{headerShown: false}}
    />



  </StackNavigator.Navigator>
);

export default HomeStackNavigation;
