import React, {useEffect} from "react";

import {ActivityIndicator, StyleSheet, View} from "react-native";
import {getIsLoggedIn} from "../services/authService";

const LoadingScreen = ({navigation}) => {
  const detectUser = async () => {
    try {
      const data = await getIsLoggedIn();

      console.log("DAYA - ", data);

      if (data.success) navigation.replace("BottomTab");
      else navigation.replace("LogIn");
    } catch (err) {
      console.log("Loading Screen ERROR - ", err);

      navigation.replace("LogIn");
    }
  };

  useEffect(() => {
    detectUser();
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
