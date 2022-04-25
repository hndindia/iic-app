import React, {useEffect, useState} from "react";
import {
  Alert,
  Linking,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList
} from "react-native";
import {Avatar} from "react-native-elements";
import LinkedIn from "react-native-vector-icons/AntDesign";
import Icon from "react-native-vector-icons/Entypo";
import {useQuery} from "react-query";
import {getAlumni} from "../services/userService";
import AppLoader from "./AppLoader";
import Error from "./Error";

const AlumniCard = ({company_name, company_id, style}) => {
  const {isLoading, isError, data, error} = useQuery(
    ["alumni", company_id],
    () => getAlumni(company_id)
  );

  if (isLoading) return <AppLoader isLoading={isLoading} />;

  // if (isError) return <Error />;

  const checkUrl = async url => {
    try {
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    } catch (err) {
      console.log("Error - ", err);
    }
  };

  const displayCards = () => {
    return (
      <FlatList
        data={data.data}
        keyExtractor={id => id._id}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <View style={[styles.cardDontainer, style]}>
              <Avatar
                size="small"
                overlayContainerStyle={{backgroundColor: "grey"}}
                title={
                  item.fullName.split(" ").shift().charAt(0) +
                  item.fullName.split(" ").pop().charAt(0)
                }
                rounded
                activeOpacity={0.7}
              />
              <View style={styles.innerContainer}>
                <Text style={{fontWeight: "bold", color: "black"}}>
                  {item.fullName}
                </Text>

                <View style={styles.iconFlex}>
                  <TouchableOpacity onPress={() => checkUrl(item.linkedin)}>
                    <LinkedIn
                      name="linkedin-square"
                      size={30}
                      color="#534DEE"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => Linking.openURL(`tel:${item.number}`)}>
                    <Icon name="phone" size={30} color="#4DEE59" />
                  </TouchableOpacity>
                </View>

                <Text>{item.yearOfPassing}</Text>
                <Text>Joined - {new Date(item.joined).getFullYear()}</Text>
                <Text>Experience - {item.experience}</Text>
              </View>
            </View>
          );
        }}
      />
    );
  };

  return (
    <View style={{backgroundColor: "#FFFFFF"}}>
      {data.data.length === 0 ? null : (
        <>
          <Text style={styles.companyName}>{company_name}</Text>
          {displayCards()}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  cardDontainer: {
    // margin: 20,
    marginVertical: 15,
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    elevation: 11,
    borderRadius: 20,
    alignItems: "center"
    // width: "40%"
  },
  iconFlex: {
    flexDirection: "row",
    marginVertical: 8
  },
  innerContainer: {
    textAlign: "left",
    marginRight: 10
  },
  companyName: {
    fontWeight: "bold",
    fontSize: 20,
    marginLeft: 10,
    color: "black"
  }
});

export default AlumniCard;
