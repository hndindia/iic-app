import React from "react";
import {Image, StyleSheet, Text, View} from "react-native";

const Error = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require("../assets/images/error-404.png")}
      />
      <Text style={styles.text}>Ahh! You see! You can be wrong!</Text>
      <Text>(Or it could be us....)</Text>

      <Text style={styles.text}>
        ...either way, don't worry our developers will handle this soon.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  img: {
    height: 180,
    width: 180,
    marginTop: 20
  },
  text: {
    color: "#000",
    fontSize: 20,
    textAlign: "center"
  }
});

export default Error;
