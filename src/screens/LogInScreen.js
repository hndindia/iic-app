import React, {useState, useEffect} from "react";
import axios from "axios";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  Linking
} from "react-native";
import Loader from "react-native-loading-spinner-overlay";
import {API, LOGIN, REGISTER} from "../api/api";
import AppButton from "../components/AppButton";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ssipmt_logo from "../assets/images/ssipmt_logo.png";
import {Input, Icon, Button} from "react-native-elements";
import {useSelector, useDispatch} from "react-redux";
import {logIn} from "../store/Auth/authActions";

const LogInScreen = ({navigation}) => {
  const dispatch = useDispatch();

  //test@ssipmt.com
  //123456
  const [email, setEmail] = useState("test@ssipmt.com");
  const [password, setPassword] = useState("123456");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    //NOTE -> this return will run when this component is unmounted. This is just to avoid the 'React memory leak warning'
    // dispatch(logIn(email, password));

    // return () => {
    //   setEmail("");
    //   setPassword("");
    //   setIsLoading(false);
    // };
  }, []);

  const handleLogIn = async () => {
    if (email === "" || password === "") {
      Alert.alert("Please fill both the information correctly.");
      return;
    }
    setIsLoading(true);

    dispatch(logIn(email, password));

    navigation.replace("BottomTab");

    setIsLoading(false);

  };

  const checkUrl = async url => {
    try {
      const supported = await Linking.canOpenURL(url);

      if (supported) await Linking.openURL(url);
      else Alert.alert(`Don't know how to open this URL: ${url}`);
    } catch (err) {
      console.log("Error - ", err);
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

      <Image style={styles.logo} source={ssipmt_logo} />

      <Text style={styles.heading}>Sign In</Text>

      <Input
        placeholder="Email"
        value={email}
        onChangeText={value => setEmail(value)}
        rightIcon={
          <Icon
            name="mail"
            type="foundation"
            color="#0D054B"
            size={27}
            marginRight={10}
          />
        }
        inputContainerStyle={styles.textInput}
      />

      <Input
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={value => setPassword(value)}
        rightIcon={
          <Icon
            name="eye-off"
            type="material-community"
            color="#0D054B"
            size={27}
            marginRight={8}
          />
        }
        inputContainerStyle={styles.textInput}
      />

      {/* <TouchableOpacity>
        <Text style={styles.forgetPassStyle}>Forget Your Password?</Text>
      </TouchableOpacity> */}

      <Button
        title="Sign In"
        buttonStyle={{
          backgroundColor: "#5B37B7",
          borderRadius: 7
        }}
        titleStyle={{fontWeight: "bold"}}
        containerStyle={{
          marginHorizontal: 20
        }}
        onPress={() => handleLogIn()}
      />

      <View style={styles.textStyleContainer}>
        <View style={styles.textStyle}>
          <Text style={{textAlign: "center"}}>
            By signing in you agree to our
          </Text>

          <TouchableOpacity
            style={{flexDirection: "row"}}
            onPress={() => checkUrl("https://www.google.com/")}>
            <Text style={styles.link}>Terms & conditions </Text>

            <Text>and </Text>

            <Text style={styles.link}>Privacy policy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ffffff",
    padding: 16
  },
  logo: {
    width: 227,
    height: 200,
    alignSelf: "center",
    marginVertical: 30
  },
  heading: {
    marginBottom: 30,
    fontWeight: "bold",
    color: "#0D054B",
    fontSize: 23,
    marginLeft: 8
  },

  textInput: {
    borderColor: "#5B37B7",
    borderWidth: 2,
    borderRadius: 10,
    borderBottomWidth: 2
  },

  forgetPassStyle: {
    alignSelf: "flex-end",
    marginVertical: 10,
    marginRight: 8,
    color: "#0645AD"
  },
  loaderTextStyle: {
    color: "white",
    marginBottom: 45
  },

  textStyleContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 7
  },
  textStyle: {
    alignSelf: "center"
  },
  link: {
    textDecorationLine: "underline"
  }
});

export default LogInScreen;
