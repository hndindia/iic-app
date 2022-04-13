import axios from "axios";
import {API_URL} from "@env";
import {API} from "../../api/api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const LOGIN = "LOGIN";
export const GET_USER = "GET_USER";

const config = {
  headers: {
    "Content-Type": "application/json"
  }
};

export const logIn = (email, password) => {
  return async dispatch => {
    try {
      console.log("API - ", API.AUTH.LOGIN);

      const {data} = await axios.post(
        API.AUTH.LOGIN,
        {email, password},
        config
      );
      console.log("D  -- ", data);
      await AsyncStorage.setItem("token", data.token);
      return dispatch({
        type: LOGIN,
        payload: data
      });
    } catch (error) {
      console.log("ERR - ", error.message);
    }
  };
};

export const getUser = () => {
  return async dispatch => {
    try {
      console.log("A");
      const token = await AsyncStorage.getItem("token");
      const {data} = await axios.post(API.AUTH.GET_USER, {token}, config);

      dispatch({
        type: GET_USER,
        payload: data
      });
    } catch (error) {
      console.log("ERR - ", error);
    }
  };
};
