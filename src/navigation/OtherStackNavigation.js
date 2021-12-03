import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ForMore from '../screens/ForMore';

const StackNavigator = createNativeStackNavigator();

const OtherStackNavigation = () => (
  <StackNavigator.Navigator initialRouteName="Home">

    <StackNavigator.Screen
      component={HomeScreen}
      name="Home"
      options={{headerShown: false}}
    />
    
    <StackNavigator.Screen
      component={ForMore}
      name="For More"
      options={{headerShown: false}}
    />

  </StackNavigator.Navigator>
);

export default OtherStackNavigation;
