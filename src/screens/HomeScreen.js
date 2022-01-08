import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {View, Text, Button, Alert, StyleSheet, FlatList, Linking} from 'react-native';
import Card from '../components/Card';
import Loader from 'react-native-loading-spinner-overlay';
import {PLACEMENT} from '../api/api';

const HomeScreen = ({navigation}) => {
  const [cardData, setCardData] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const fetchCardData = async () => {
    try {
      setIsLoading(true);

      const config = {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      };

      const {data} = await axios.post(PLACEMENT, {}, config);
      setCardData(data.placement);

      setIsLoading(false);
    } catch (err) {
      console.log('Error - ', err);
      // Alert.alert("Something went wrong");
    }
  };

  useEffect(() => {
    fetchCardData();
  }, []);


  return (
    <View>
      <Loader
        visible={isLoading}
        textContent="Please wait"
        textStyle={styles.loaderTextStyle}
        color="#fff"
        animation="fade"
      />
  
      <FlatList 
        data={cardData}
        keyExtractor={(id) => id._id}
        renderItem= { ({item}) => {
          let ld = new Date(item.lastDate)
          let cd = new Date(item.createdAt)
	        
          return (
            <Card
              heading={item.company}
              eligibility={item.eligibility}
              salaryPackage={item.package}
              lastDate={ld.toDateString()}
              postedDate={`${cd.getDate()}/${cd.getMonth()+1}`}
              onPress={() => navigation.navigate('For More', {item})}
            />
          );
        }}
      />

      {/* <Card
        heading={"Adobe"}
        eligibility={"Greater than 60%"}
        salaryPackage={"4LPA"}
        lastDate={"13/12/21"}
        postedDate={"10/12/21"}
        onPress={() => checkUrl("https://www.google.com/")}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  loaderTextStyle: {
    color: 'white',
    marginBottom: 45,
  },
});

export default HomeScreen;
