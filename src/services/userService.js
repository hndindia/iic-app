import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import {API} from "../api/api";

export const getAlumni = async cId => {
  const token = await AsyncStorage.getItem("token");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  };

  console.log("CID - ", cId);

  const {data} = await axios.get(
    `${API.USER.GET_ALUMNI}?company_id=${cId}`,
    config
  );

  return data;
};

export const getCompany = async () => {
  const token = await AsyncStorage.getItem("token");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  };

  const {data} = await axios.get(API.USER.GET_COMPANY, config);
  return data;
};

export const getPlacement = async () => {
  const token = await AsyncStorage.getItem("token");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  };

  const {data} = await axios.get(API.USER.GET_PLACEMENT, config);
  console.log("DATA OF CARD - ", typeof data);

  return data;
};

export const getNotices = async bId => {
  const token = await AsyncStorage.getItem("token");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  };

  const {data} = await axios.get(
    `${API.USER.GET_NOTICE}/?branch_id=${bId}`,
    config
  );

  return data;
};

export const updateUser = async userData => {
  const token = await AsyncStorage.getItem("token");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  };

  const {data} = await axios.patch(`${API.USER.POST_USER}`, {userData}, config);

  return data;
};

export const deleteUser = async userData => {
  //userData - "skill_index=3" or "work_index=3"
  
  const token = await AsyncStorage.getItem("token");
  const config = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  };
  const {data} = await axios.delete(
    `${API.USER.DELETE_USER}/?${userData}`,
    config
  );

  return data;
};
