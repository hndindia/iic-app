import React, {useState} from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const Card = ({
  onPress,
  heading,
  eligibility,
  salaryPackage,
  style,
  postedDate,
  lastDate,
  navigation
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.heading}>
        <Text style={styles.headingText}>{heading}</Text>

        <Text style={styles.postedDateText}>{postedDate}</Text>
      </View>

      <View style={styles.middleContainer}>
        <Text style={styles.textStyle}>Eligibility: {eligibility}</Text>

        <Text style={styles.textStyle}>Package: {salaryPackage}</Text>

        <Text style={styles.textStyle}>Last date: {lastDate}</Text>
      </View>

      <TouchableOpacity style={styles.linkContainer} onPress={onPress}>
        <Text style={styles.linkText}>For More</Text>
        <Icon name="doubleright" size={20} color="#0645AD" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // margin: 20,
    marginVertical: 15,
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    elevation: 11,
    borderRadius: 12,
    alignItems: "center"
  },

  heading: {
    // flex:1,

    flexDirection: "row",
    // justifyContent: 'center',
    alignSelf: "center",
    left: 20
  },

  headingText: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 20
  },
  postedDateText: {
    left: 90,
    alignSelf: "center"
  },

  middleContainer: {
    padding: 5,
    alignItems: "center"
  },

  textStyle: {
    color: "#000",
    alignSelf: "flex-start",
    fontSize: 16,
    marginTop: 6,
    marginRight: 13
  },

  linkContainer: {
    flexDirection: "row",
    alignSelf: "flex-end"
  },

  linkText: {
    fontSize: 16,
    bottom: 2,
    color: "#0645AD"
  }
});

export default Card;
