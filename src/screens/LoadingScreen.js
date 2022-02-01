import React, {useEffect} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {ActivityIndicator, Alert, StyleSheet, View} from 'react-native';

const LoadingScreen = ({navigation}) => {

  const detectUser = async () => {
    try{
      const token = await AsyncStorage.getItem('token');
      
      if(token){
        navigation.replace('BottomTab');
      }
      else {
        navigation.replace('LogIn');
      }

    }catch(err){
      console.log("ERROR - ", err);
      // Alert.alert("Something went wrong");
    }
  };

  useEffect(() => {
      detectUser();
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="blue" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoadingScreen;
