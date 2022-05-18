import React from "react";
import {StyleSheet, Text, View} from "react-native";

const Heading = ({heading, subHeading, style}) => {
  return (
    <View style={{backgroundColor: "#fff"}}>
      <Text style={[styles.heading, style]}>{heading}</Text>
      {subHeading === undefined ? null : (
        <Text style={styles.subHeading}>{subHeading}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    marginTop: 10,
    marginLeft: 20,
    color: "#0D054B",
    fontSize: 23,
    fontWeight: "bold"
  },
  subHeading: {
    color: "#0D054B",
    fontSize: 18,
    marginLeft: 20
  }
});

export default Heading;
