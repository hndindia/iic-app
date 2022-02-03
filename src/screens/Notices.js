import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
  FlatList,
  Linking,
} from 'react-native';
import Heading from '../components/Heading';
import Loader from 'react-native-loading-spinner-overlay';
import { ScrollView } from 'react-native-gesture-handler';

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
    return <Heading heading="Notices" />
  };

  const fakeData = [
    {
      id:0,
      category:"Placement",
      file:"./../assets/PDF.pdf"
    },
    {
      id:1,
      category:"General",
      file:"./../assets/PDF.pdf"
    },
  ];

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
        data={fakeData}
        keyExtractor={id => id.id}
        renderItem={({item}) => {
          return (
            <>
              <Text>{item.category}</Text>
              <ScrollView horizontal>
                <Text>TESTING </Text>
                <Text>TESTING </Text>
                <Text>TESTING </Text>
                <Text>TESTING </Text>
              </ScrollView>              
            </>
          )
        }}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#ffffff',
  },
  loaderTextStyle: {
    color: 'white',
    marginBottom: 45,
  },
});

export default Notices;
