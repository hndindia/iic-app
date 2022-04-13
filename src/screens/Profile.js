import React, {useEffect, useState} from "react";
import {Text, StyleSheet} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import Loader from "react-native-loading-spinner-overlay";
import {getUser} from "../store/Auth/authActions";

const Profile = () => {
  const {user} = useSelector(state => state.authReducers);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    dispatch(getUser());
    setIsLoading(false);
  }, []);

  console.log("U - ", user);

  return (
    <>
      {isLoading ? (
        <Loader
          visible={isLoading}
          textContent="Please wait"
          textStyle={styles.loaderTextStyle}
          color="#fff"
          animation="fade"
        />
      ) : (
        <Text>Hello {user.fullName}</Text>
      )}
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
