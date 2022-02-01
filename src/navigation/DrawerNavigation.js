import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';

import HomeScreen from '../screens/HomeScreen';
import OtherStackNavigation from './HomeStackNavigation';

const Drawer = createDrawerNavigator();

const DrawerNavigation = ({navigation}) => (
  <Drawer.Navigator initialRouteName='Placement' drawerContent={(props) => {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem label="Logout" onPress={async () => {
          try{
            await AsyncStorage.removeItem('token');
            navigation.replace('AuthStack');
          }catch(err){
            console.log("Error - ", err);
          }
        }}/>
      </DrawerContentScrollView>
    );
  }}>
    
    <Drawer.Screen component={OtherStackNavigation} name='Placement' />

  </Drawer.Navigator>
)

export default DrawerNavigation;