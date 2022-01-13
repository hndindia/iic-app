import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import StackNavigation from './StackNavigation';
import DrawerNavigation from './DrawerNavigation';
import OtherStackNavigation from './OtherStackNavigation';

const AllAppNavigation = createNativeStackNavigator();

const RootNavigator = () => (
  <NavigationContainer>
    <AllAppNavigation.Navigator
      initialRouteName="stack"
      screenOptions={{
        header: () => null,
      }}
    >

      <AllAppNavigation.Screen name="stack" children={StackNavigation} />

      <AllAppNavigation.Screen name="OtherScreenStack" children={OtherStackNavigation} />
      
      <AllAppNavigation.Screen name="drawer" children={DrawerNavigation} />
    
    </AllAppNavigation.Navigator>
  </NavigationContainer>
);

export default RootNavigator;