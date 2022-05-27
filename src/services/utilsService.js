import { Alert, Linking } from "react-native";

export const checkUrl = async url => {
  try {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  } catch (err) {
    console.log("Error - ", err);
  }
};