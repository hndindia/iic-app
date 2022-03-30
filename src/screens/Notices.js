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

  const fakeData = [
    {
      id: 0,
      category: "Placement",
      files: [
        "./../assets/PDF.pdf",
        "./../assets/PDF.pdf",
        "./../assets/PDF.pdf",
      ],
    },
    {
      id: 1,
      category: "General",
      files: [
        "./../assets/PDF.pdf",
        "./../assets/PDF.pdf",
        "./../assets/PDF.pdf",
      ],
    },
  ];

  const showPdf = (file,key) => {
    return (
      <Card containerStyle={styles.card}>
      <View pointerEvents="none">
        <Pdf
          scale={1.5}
          style={{
            flex: 1,
            paddingBottom: 80,
            // height:"150%",
            // width:"50%",
            borderColor: "red", borderWidth: 5,

            // width: Dimensions.get('window').width,
            // height: Dimensions.get('window').height,
          }}
          onError={error => {
            console.log(error);
          }}
          source={require("../assets/PDF.pdf")}
        />
      </View>
      <Card.Image
        style={{
          height: 40,
          width: 40,
          marginTop: 20,
        }}
        source={require("../assets/images/notice.png")}
      />
    </Card>
    );
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
        <View >
          <Pdf
            scale={3.5}
            style={{
              flex: 1,
              paddingBottom: 150,
             
            }}
            onError={error => {
              console.log(error);
            }}
            source={require("../assets/PDF.pdf")}
          />
        </View>
        <Card.Image
          style={{
            height: 40,
            width: 40,
            marginTop: 20,
          }}
          source={require("../assets/images/notice.png")}
        />
      </Card>

      <FlatList
        ListHeaderComponent={header}
        data={fakeData}
        keyExtractor={id => id.id}
        renderItem={({item}) => {
          return (
            <>
              <Text>{item.category}</Text>
              {/* <ScrollView horizontal>
          
              </ScrollView> */}
              {showPdf()}
            </>
          );
        }}
      />
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
