import React from "react";
import {StyleSheet} from "react-native";
import Loader from "react-native-loading-spinner-overlay";

const AppLoader = ({isLoading}) => {
  return (
    <Loader
      visible={isLoading}
      textContent="Please wait"
      textStyle={styles.loaderTextStyle}
      color="#fff"
      animation="fade"
    />
  );
};

const styles = StyleSheet.create({
  loaderTextStyle: {
    color: "white",
    marginBottom: 45,
  },
});


export default AppLoader;
