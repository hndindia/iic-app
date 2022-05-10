import React, {createContext} from "react";
import {useQuery} from "react-query";

const AuthContext = createContext();

import AppLoader from "../components/AppLoader";
import Error from "../components/Error";
import {getUser} from "../services/authService";

export const AuthContextProvider = ({children}) => {
  const {isLoading, isError, data: userData, error} = useQuery("user", getUser);

  if (isLoading) return <AppLoader isLoading={isLoading} />;

  // console.log("DATAAA - ", userData);

  // if (isError) return <Error />;

  return (
    <AuthContext.Provider value={{userData, isError, isLoading}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
