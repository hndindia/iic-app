import axios from "axios";
import {API} from "../../api/api";

export const GET_ALUMNI = "GET_ALUMNI";
export const GET_COMPANY = "GET_COMPANY";

export const getCompany = () => {
  return async dispatch => {
    try {
      const {data} = await axios.get(API.USER.GET_COMPANY);
      dispatch({
        type: GET_COMPANY,
        payload: data
      });
    } catch (error) {
      console.log("ERR - ", error);
    }
  };
};

export const getAlumni = cId => {
  return async dispatch => {
    try {
      const {data} = await axios.get(
        `${API.USER.GET_ALUMNI}?company_id=${cId}`
      );
      dispatch({
        type: GET_ALUMNI,
        payload: data
      });
    } catch (error) {
      console.log("ERR - ", error);
    }
  };
};
