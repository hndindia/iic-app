export const API_URL = "http://10.0.2.2:3001/api/v1";
// import {API_URL} from "@env";
console.log("APi - ", API_URL);

export const API = {
  AUTH: {
    REGISTER: `${API_URL}/student/auth/register`,
    LOGIN: `${API_URL}/student/auth/login`,
    GET_USER:`${API_URL}/student/auth/user`
  },
  USER:{
    GET_PLACEMENT:`${API_URL}/placememt/getAllPlacement`,
    GET_ALUMNI:`${API_URL}/alumni`,
    GET_COMPANY:`${API_URL}/alumni/company`
  },
};
