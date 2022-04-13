import axios from "axios";
import React, {useEffect, useState} from "react";
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
} from "react-native";
import Heading from "../components/Heading";
import Loader from "react-native-loading-spinner-overlay";
import {ScrollView} from "react-native-gesture-handler";
import Pdf from "react-native-pdf";
import {Card, LinearProgress} from "react-native-elements";
import WebView from "react-native-webview";

const Notices = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(false);


  const fetchNoticesData = () => {
    setIsLoading(true);
   
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    fetchNoticesData();
    
  }, []);

  const header = () => {
    return <Heading heading="Notices" />;
  };


  return (
    <View style={styles.container}>
      <Loader
        visible={isLoading}
        textContent="Please wait"
        textStyle={styles.loaderTextStyle}
        color="#fff"
        animation="fade"
      />
   
      <Card containerStyle={styles.card}>

        <Card.Image
          style={{
            height: 40,
            width: 40,
            marginTop: 20,
          }}
          source={require("../assets/images/notice.png")}
        />
      </Card>


    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  loaderTextStyle: {
    color: "white",
    marginBottom: 45,
  },
  card: {
    shadowColor: "#000",
    elevation: 11,
    borderRadius: 17,
    // padding: 20,
  },
});

export default Notices;
