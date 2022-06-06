import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import ForMore from "../screens/ForMore";
import Profile from "../screens/Profile";
import Notices from "../screens/Notices";
import OtherOpportunites from "../screens/OtherOpportunites";
import Placements from "../screens/Placements";
import StudyMaterial from "../screens/StudyMaterial";

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

    <StackNavigator.Screen
      component={Notices}
      name="Notices"
      options={{headerShown: false}}
    />
   
    <StackNavigator.Screen
      component={OtherOpportunites}
      name="OtherOpp"
      options={{headerShown: false}}
    />
    
    <StackNavigator.Screen
      component={Placements}
      name="Placements"
      options={{headerShown: false}}
    />
    
    <StackNavigator.Screen
      component={StudyMaterial}
      name="StudyMaterial"
      options={{headerShown: false}}
    />

  </StackNavigator.Navigator>
);

export default HomeStackNavigation;
