import axios from "axios";
import {API} from "../api/api";

export const getAlumni = async cId => {
  try {
    const {data} = await axios.get(
      `${API.USER.GET_ALUMNI}?company_id=${cId}`
    );

    return data;
  
  } catch (error) {
    console.log("ERR - ", error);
    return {error};
  }
};

export const getCompany = async () => {
  try {
    const {data} = await axios.get(API.USER.GET_COMPANY);
    return data;
  } catch (error) {
    console.log("ERR - ", error);
    return {error};
  }
};