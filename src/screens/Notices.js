import axios from "axios";
import React, {useContext} from "react";
import {
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
  FlatList,
  Linking,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import Heading from "../components/Heading";
import {Card, LinearProgress} from "react-native-elements";
import WebView from "react-native-webview";
import {getNotices} from "../services/userService";
import AppLoader from "../components/AppLoader";
import Error from "../components/Error";
import {useQuery} from "react-query";
import AuthContext from "../context/AuthContext";

const Notices = ({route}) => {
  const {userData} = route.params;

  const {isLoading, isError, data, error} = useQuery("notice", () =>
    getNotices(userData.user.branch._id)
  );

  if (isLoading) return <AppLoader isLoading={isLoading} />;

  if (isError) return <Error />;

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

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={() => (
          <Heading heading="Notices" style={{fontSize: 29, marginTop: 25}} />
        )}
        data={data.data}
        keyExtractor={id => id._id}
        renderItem={({item}) => {
          console.log("DATA 1 ", item);
          let created_date = new Date(item.createdAt);
          return (
            <View style={styles.card}>
              <TouchableOpacity
                style={{flex: 1}}
                onPress={() => checkUrl(item.view_link)}>
                <Image
                  style={styles.image}
                  source={{
                    uri: item.thumbnail_link
                  }}
                />

                <View style={styles.textContainer}>
                  <Image
                    style={{width: 40, height: 40, alignSelf: "center"}}
                    source={require("../assets/images/notice.png")}
                  />
                  <Text style={styles.text}>{item.file_name}</Text>
                  <Text style={[styles.text, {left: 30}]}>
                    {created_date.toDateString()}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },
  card: {
    width: "90%",
    height: 200,
    marginBottom: 25,
    borderRadius: 17,
    backgroundColor: "#FFFFFF",
    overflow: "hidden",
    shadowColor: "#000",
    elevation: 8,
    alignSelf: "center"
  },
  image: {
    width: "100%",
    height: "70%",
    backgroundColor: "#000072",
    opacity: 0.7
  },

  textContainer: {
    flex: 1,

    flexDirection: "row",
    padding: 16
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    marginLeft: 10
  }
});

export default Notices;
