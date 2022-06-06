import React, {useEffect, useState} from "react";
import {
  View,
  Text,
  Alert,
  StyleSheet,
  FlatList,
  Linking,
  TouchableOpacity
} from "react-native";
import {Card} from "react-native-elements";
import {fonts} from "react-native-elements/dist/config";
import Heading from "../components/Heading";
import {checkUrl} from "../services/utilsService";

const StudyMaterial = ({route}) => {
  const {userData} = route.params;

  console.log("D - ", userData);
  return (
    <View style={styles.conatainer}>
      <Heading heading="Study Material" />

      <Card containerStyle={styles.card}>
        <TouchableOpacity
          onPress={() => checkUrl(userData.user.semester.syllabus_link)}>
          <Text style={{alignSelf: "center", fontSize: 20, color: "#000000"}}>
            {userData.user.semester.value} Sem Syllabus
          </Text>
        </TouchableOpacity>
      </Card>

      {userData.user.semester.subjects.map((sub, i) => {
 
        return (
          <View key={i}>
            <Card containerStyle={styles.card}>
              <TouchableOpacity
                onPress={() => checkUrl(userData.user.semester.syllabus_link)}>
                <Text
                  style={{alignSelf: "center", fontSize: 20, color: "#000000"}}>
                  {sub}
                </Text>
              </TouchableOpacity>
            </Card>
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  card: {
    shadowColor: "#000",
    elevation: 11,
    borderRadius: 17,
    padding: 20
  }
});

export default StudyMaterial;
