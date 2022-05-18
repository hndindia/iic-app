import React from "react";
import {Text, View, StyleSheet} from "react-native";
import {Avatar} from "react-native-elements";

const ProfileHeading = data => {
  // console.log("D", data);
  const {user} = data.data;
  return (
    <View style={styles.headingAvatar}>
      <Avatar
        size="large"
        overlayContainerStyle={{
          backgroundColor: "#fff",
          shadowColor: "#000",
          elevation: 11
          // borderRadius: 12
        }}
        // source={require("../assets/images/profile_icon.png")}

        title={
          user.fullName.split(" ").shift().charAt(0) +
          user.fullName.split(" ").pop().charAt(0)
        }
        titleStyle={{color: "#0D054B"}}
        rounded
        activeOpacity={0.7}
      />

      <Text style={styles.headingText}>{user.fullName}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headingAvatar: {
    alignItems: "center",
    marginTop: 10
  },
  headingText: {
    marginTop: 15,
    fontWeight: "bold",
    fontSize: 26,
    textTransform: "uppercase",
    color: "#0D054B"
  }
});

export default ProfileHeading;
