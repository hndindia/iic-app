import React, {createContext, useEffect, useState} from "react";
import {useQuery} from "react-query";

const AuthContext = createContext();

import AppLoader from "../components/AppLoader";
import Error from "../components/Error";
import {getUser, getIsLoggedIn} from "../services/authService";

export const AuthContextProvider = ({children}) => {
  // const {isLoading, isError, data} = useQuery("isloggedin", getIsLoggedIn);

  // if (isLoading) return <AppLoader isLoading={isLoading} />;

  // let userData;
  // if (isSuccess) {
  //   const {isLoading, data, error} = useQuery("user", getUser);
  //   if (isLoading) return <AppLoader isLoading={isLoading} />;
  //   console.log("d", userData);
  //   userData = data;
  // }

  // // console.log("DATAAA - ", userData);

  // // if (isError) return <Error />;

  return <AuthContext.Provider value={{}}>{children}</AuthContext.Provider>;
};

export default AuthContext;
