import React from "react";
import {ScrollView, StyleSheet} from "react-native";
import {useQuery} from "react-query";
import AppLoader from "../components/AppLoader";
import Error from "../components/Error";
import {getUser} from "../services/authService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Button} from "react-native-elements";
import ProfileHeading from "../components/profile/ProfileHeading";
import ProfileContent from "../components/profile/ProfileContent";

const Profile = ({navigation}) => {
  const {isLoading, isError, data, error} = useQuery("user", getUser);

  if (isLoading) return <AppLoader isLoading={isLoading} />;

  if (isError) return <Error />;

  const handleLogOut = async () => {
    try {
      await AsyncStorage.removeItem("token");
      navigation.replace("AuthStack");
    } catch (err) {
      console.log("Error - ", err);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <ProfileHeading data={data} />

      <ProfileContent data={data} />

      <Button
        title="Log Out"
        buttonStyle={styles.button}
        titleStyle={{fontWeight: "bold"}}
        onPress={() => handleLogOut()}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  button: {
    backgroundColor: "#5B37B7",
    borderRadius: 7,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20
  }
});

export default Profile;