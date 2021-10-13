import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Loader from 'react-native-loading-spinner-overlay';
import AppButton from '../components/AppButton';

const LogInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogIn = () => {
    setIsLoading(true);

    console.log('LOGGED IN Yeahhhhhhhhhh');

    setTimeout(() => {
      setIsLoading(false);
      navigation.replace("drawer");
    }, 3000);
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
