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
} from "react-native";
import Card from "../components/Card";
import Loader from "react-native-loading-spinner-overlay";
import {PLACEMENT} from "../api/api";
import Heading from "../components/Heading";
import {ScrollView} from "react-native-gesture-handler";

const OtherOpportunites = ({navigation}) => {
  const [cardData, setCardData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchCardData = async () => {
    try {
      setIsLoading(true);

      const config = {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };

      const {data} = await axios.post(PLACEMENT, {}, config);
      console.log("DATA OF CARD - ", typeof data);
      setCardData(data.placement);

      setIsLoading(false);
    } catch (err) {
      console.log("Error - ", err);
      Alert.alert("Something went wrong please try again.");
    }
  };

  const header = () => {
    return <Heading heading={"OTHER\nOPPORTUNITIES"} />;
  };

  useEffect(() => {
    fetchCardData();
  }, []);

  return (
    <View style={styles.container}>
      <Loader
        visible={isLoading}
        textContent="Please wait"
        textStyle={styles.loaderTextStyle}
        color="#fff"
        animation="fade"
      />

      <FlatList
        ListHeaderComponent={header}
        data={cardData}
        keyExtractor={id => id._id}
        renderItem={({item}) => {
          let ld = new Date(item.lastDate);//Last Date
          let cd = new Date(item.createdAt);//Created Date

          return (
            <Card
              heading={item.company}
              eligibility={item.eligibility}
              salaryPackage={item.package}
              lastDate={ld.toDateString()}
              postedDate={`${cd.getDate()}/${cd.getMonth() + 1}`}
              onPress={() =>
                navigation.navigate("HomeStack", {
                  screen: "ForMore",
                  params: {item},
                })
              }
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#ffffff",
  },
  loaderTextStyle: {
    color: "white",
    marginBottom: 45,
  },
});

export default OtherOpportunites;
