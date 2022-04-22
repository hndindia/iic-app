import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import {API} from "../api/api";

export const logIn = async (email, password) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    console.log("API - ", API.AUTH.LOGIN);

    const {data} = await axios.post(API.AUTH.LOGIN, {email, password}, config);

    await AsyncStorage.setItem("token", data.token);

    return data;
  } catch (error) {
    console.log("ERR!! - ", error.message);
    return {error};
  }
};

export const getUser = async () => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  try {
    const token = await AsyncStorage.getItem("token");
    const {data} = await axios.post(API.AUTH.GET_USER, {token}, config);
    console.log("U - ", data);

    return data;
  } catch (error) {
    console.log("ERR - ", error);
    return {error};
  }
};
