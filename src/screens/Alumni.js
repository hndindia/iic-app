import React, {useEffect, useState} from "react";
import {
  View,
  Alert,
  StyleSheet,
  FlatList,
} from "react-native";
import Loader from "react-native-loading-spinner-overlay";
import AlumniCard from "../components/AlumniCard";
import Heading from "../components/Heading";
import { getCompany } from "../services/userService";

const Alumni = ({navigation}) => {

  const [isLoading, setIsLoading] = useState(true);

  const [company, setCompany] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    
    const getCompanyFromDB = async () => {
      try {
        const res = await getCompany();

        console.log("R ", res);
        
        setCompany(res.data);
        
      } catch (error) {
        Alert.alert("Something went wrong please try again later.");
      }
    };

    getCompanyFromDB();

    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <View styles={styles.container}>
      {isLoading ? (
        <Loader
          visible={isLoading}
          textContent="Please wait"
          textStyle={styles.loaderTextStyle}
          color="#fff"
          animation="fade"
        />
      ) : (
        <FlatList
          ListHeaderComponent={() => <Heading heading="ALUMNI" />}
          data={company}
          keyExtractor={id => id._id}
          renderItem={({item}) => {
            return (
              <AlumniCard company_name={item.name} company_id={item._id} />
            );
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff"
  },
  loaderTextStyle: {
    color: "white",
    marginBottom: 45
  }
});

export default Alumni;
