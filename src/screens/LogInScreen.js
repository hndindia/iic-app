import React, {useState} from 'react';
import axios from 'axios';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Loader from 'react-native-loading-spinner-overlay';
import {API, LOGIN, REGISTER} from '../api/api';
import AppButton from '../components/AppButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LogInScreen = ({navigation}) => {
  const [email, setEmail] = useState('test@ssipmt.com');
  const [password, setPassword] = useState('123456');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogIn = async () => {
    if (email === '' || password === '') {
      Alert.alert('Please fill both the information correctly.');
      return;
    }

    try {
      setIsLoading(true);

      const config = {
        headers: {
        
          'Content-Type': 'application/json'
        },
      };

      const {data} = await axios.post(LOGIN, {email, password}, config);
      
      console.log("TOKEN - ", data.token);
      await AsyncStorage.setItem('token', data.token);

      navigation.replace('drawer');
    
      setIsLoading(false);
    
    } catch (err) {
      setIsLoading(false);
      console.log('Error', err.error);
      // Alert.alert('Something went wrong please try again later');
    }
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

      <TextInput
        style={styles.textInput}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={inputText => setEmail(inputText)}
      />

      <TextInput
        style={styles.textInput}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={inputText => setPassword(inputText)}
      />

      <TouchableOpacity>
        <Text style={styles.forgetPassStyle}>Forget Your Password?</Text>
      </TouchableOpacity>

      <AppButton
        title="Log In"
        onPress={() => handleLogIn()}
        style={{
          marginHorizontal: 55,
          // backgroundColor:'#1A5276',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    padding: 16,
  },
  textInput: {
    marginTop: 24,
    padding: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
    borderRadius: 12,
  },

  forgetPassStyle: {
    alignSelf: 'flex-end',
    marginVertical: 10,
    marginRight: 8,
    color: '#0645AD',
  },
  loaderTextStyle: {
    color: 'white',
    marginBottom: 45,
  },
});

export default LogInScreen;
