import React from "react";
import {Text, StyleSheet} from "react-native";
import { useQuery } from "react-query";
import AppLoader from "../components/AppLoader";
import Error from "../components/Error";
import {getUser} from "../services/authService";

const Profile = () => {

  const {isLoading, isError, data, error} = useQuery("user", getUser);

  if (isLoading) return <AppLoader isLoading={isLoading} />;

  if (isError) return <Error />;

  return (
    <>
      <Text>Hello {data.user.fullName}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  loaderTextStyle: {
    color: "white",
    marginBottom: 45
  }
});

export default Profile;
