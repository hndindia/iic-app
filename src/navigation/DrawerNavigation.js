import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigation = () => (
  <Drawer.Navigator initialRouteName='Home'>
      <Drawer.Screen component={HomeScreen} name='Home' />
  </Drawer.Navigator>
)

export default DrawerNavigation;