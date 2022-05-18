import React from "react";
import {Image, TouchableOpacity} from "react-native";

import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

import HomeScreen from "../screens/HomeScreen";
import Placements from "../screens/Placements";
import Alumni from "../screens/Alumni";
import Settings from "../screens/Settings";
import Profile from "../screens/Profile";

const Tab = createBottomTabNavigator();

const BottomTabNavigation = ({navigation}) => {
  const tabBarIcons = (focused, color, size, route) => {
    let iconName;

    if (route.name === "Home")
      iconName = focused ? "ios-home" : "ios-home-outline";
    // else if (route.name === "Placements")
    //   iconName = focused ? "ios-podium" : "ios-podium-outline";
    else if (route.name === "Alumni")
      iconName = focused ? "ios-bookmarks" : "ios-bookmarks-outline";
    // else if (route.name === "Settings")
    //   iconName = focused ? "ios-settings" : "ios-settings-outline";
    else if (route.name === "Profile")
      iconName = focused
        ? "ios-person-circle-sharp"
        : "ios-person-circle-outline";

    return <Ionicons name={iconName} size={size} color={color} />;
  };

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) =>
          tabBarIcons(focused, color, size, route),

        tabBarActiveTintColor: "#5B37B7",
        tabBarInactiveTintColor: "gray",
        headerTitle: "",
        headerLeft: () => (
          <Image
            style={{width: 45, height: 40, margin: 20}}
            source={require("../assets/images/ssipmt_logo.png")}
          />
        ),
        headerRight: () => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("HomeStack", {screen: "Profile"})
            }>
            <Ionicons
              name="md-notifications-circle"
              size={30}
              style={{
                right: 16
              }}
            />
            {/* <Image
              style={{
                width: 110,
                height: 120,
                marginTop: 10,
                left: 15,
                padding: 26,
                flex: 1
              }}
              source={require("../assets/images/profile_icon.png")}
            /> */}
          </TouchableOpacity>
        )
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      {/* <Tab.Screen name="Placements" component={Placements} /> */}
      <Tab.Screen name="Alumni" component={Alumni} />
      {/* <Tab.Screen name="Settings" component={Settings} /> */}
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
