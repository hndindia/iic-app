import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Alert,
  StyleSheet,
  FlatList,
  Linking,
} from 'react-native';
import {Input, Icon, Button} from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Settings = ({navigation}) => {

  const handleLogOut = async () =>{
    try{
      await AsyncStorage.removeItem('token');
      navigation.replace('AuthStack');
    }catch(err){
      console.log("Error - ", err);
    }
  }

  return (
    <View>
    
      {/* <Text>Settings</Text> */}

     
      <Button
        title="Log Out"
        buttonStyle={{
          backgroundColor: '#5B37B7',
          borderRadius: 7,
        }}
        titleStyle={{fontWeight: 'bold'}}
        containerStyle={{
          marginHorizontal: 20,
          marginTop:20
        }}
        onPress={() => handleLogOut()}
      />
   
    </View>
  );
};

const styles = StyleSheet.create({
  loaderTextStyle: {
    color: 'white',
    marginBottom: 45,
  },
});

export default Settings;
