import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StackNavigation from './StackNavigation';
import DrawerNavigation from './DrawerNavigation';
import HomeStackNavigation from './HomeStackNavigation';
import BottomTabNavigation from './BottomTabNavigation';

const AllAppNavigation = createNativeStackNavigator();

const RootNavigator = () => (
  <NavigationContainer>
    <AllAppNavigation.Navigator
      initialRouteName="AuthStack"
      screenOptions={{
        header: () => null,
      }}
    >

      <AllAppNavigation.Screen name="AuthStack" children={StackNavigation} />

      <AllAppNavigation.Screen name="HomeStack" children={HomeStackNavigation} />
      
      {/* <AllAppNavigation.Screen name="drawer" children={DrawerNavigation} /> */}
     
      <AllAppNavigation.Screen name="BottomTab" children={BottomTabNavigation} />
      
    </AllAppNavigation.Navigator>
  </NavigationContainer>
);

export default RootNavigator;