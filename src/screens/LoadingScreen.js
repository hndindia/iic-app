import React, {useEffect, useState} from "react";

import {ActivityIndicator, StyleSheet, View} from "react-native";
import {getIsLoggedIn} from "../services/authService";
import NetInfo from "@react-native-community/netinfo";
import Error from "../components/Error";
import {showToast} from "../services/utilsService";

const LoadingScreen = ({navigation}) => {
  const detectUser = async () => {
    try {
      const data = await getIsLoggedIn();

      if (data.success) navigation.replace("BottomTab");
      else navigation.replace("LogIn");
    } catch (err) {
      console.log("Loading Screen ERROR - ", err);

      navigation.replace("LogIn");
    }
  };

  useEffect(() => {
    NetInfo.fetch().then(state => {
      console.log("Is connected?", state.isConnected);
      state.isConnected
        ? detectUser()
        : showToast("Please connect to a stable internet connection");
    });
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="blue" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default LoadingScreen;
