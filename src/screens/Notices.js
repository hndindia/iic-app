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
  Dimensions
} from "react-native";
import Heading from "../components/Heading";
import Pdf from "react-native-pdf";
import {Card, LinearProgress} from "react-native-elements";
import WebView from "react-native-webview";
import {getNotices} from "../services/userService";
import AppLoader from "../components/AppLoader";
import Error from "../components/Error";
import {useQuery} from "react-query";
import AuthContext from "../context/AuthContext";

const Notices = ({navigation}) => {
  const {userData} = useContext(AuthContext);

  const {isLoading, isError, data, error} = useQuery("notice", () =>
    getNotices(userData.user.branch._id)
  );

  if (isLoading) return <AppLoader isLoading={isLoading} />;

  if (isError) return <Error />;

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={() => <Heading heading="Notices" />}
        data={data.data}
        keyExtractor={id => id._id}
        renderItem={({item}) => {
          console.log("DATA 1 ", item);
          return (
            <Card containerStyle={styles.card}>
              <Card.Image
                source={{
                  uri: item.thumbnail_link
                }}
              />
              <Text>{item.file_name}</Text>
            </Card>
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
    shadowColor: "#000",
    elevation: 11,
    borderRadius: 17,
    padding: 20,
    marginBottom: 20
  }
});

export default Notices;
