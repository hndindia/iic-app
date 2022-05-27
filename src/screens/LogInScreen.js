import React, {useState, useEffect} from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  Linking
} from "react-native";
import Loader from "react-native-loading-spinner-overlay";
import ssipmt_logo from "../assets/images/ssipmt_logo.png";
import {Input, Icon, Button} from "react-native-elements";
import {logIn} from "../services/authService";
import {useMutation} from "react-query";
import { checkUrl } from "../services/utilsService";

const LogInScreen = ({navigation}) => {
  //test@ssipmt.com
  //123456
  const [email, setEmail] = useState("student@ssipmt.com");
  const [password, setPassword] = useState("123456");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const {isLoading, mutate} = useMutation(data =>
    logIn(data.email, data.password)
  );

  useEffect(() => {
    //NOTE -> this return will run when this component is unmounted. This is just to avoid the 'React memory leak warning'

    return () => {
      setEmail("");
      setPassword("");
    };
  }, []);

  const handleLogIn = () => {
    if (email === "" || password === "") {
      Alert.alert("Please fill both the information correctly.");
      return;
    }

    mutate(
      {email, password},
      {
        onSuccess: result => {
          navigation.replace("BottomTab");
        },
        onError: error => {
          Alert.alert("Something went wrong please try again later.");
        }
      }
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
        secureTextEntry={!isPasswordVisible}
        value={password}
        onChangeText={value => setPassword(value)}
        rightIcon={
          <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
            <Icon
              name={isPasswordVisible ? "eye" : "eye-off"}
              type="material-community"
              color="#0D054B"
              size={27}
              marginRight={8}
            />
          </TouchableOpacity>
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
