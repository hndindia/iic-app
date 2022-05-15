import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import {API} from "../api/api";

export const logIn = async (email, password) => {
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };

  console.log("API - ", API.AUTH.LOGIN);

  const {data} = await axios.post(API.AUTH.LOGIN, {email, password}, config);

  await AsyncStorage.setItem("token", data.token);

  return data;
};

export const getUser = async () => {
  console.log("API Called");
  const token = await AsyncStorage.getItem("token");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  };

  const {data} = await axios.get(API.AUTH.GET_USER, config);

  return data;
};

export const getIsLoggedIn = async () => {
  const token = await AsyncStorage.getItem("token");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  };

  const {data} = await axios.get(API.AUTH.IS_LOGGED_IN, config);

  return data;
};
