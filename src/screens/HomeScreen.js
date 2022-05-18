import React, {useEffect, useState} from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert
} from "react-native";
import {Card, LinearProgress} from "react-native-elements";
import {useQuery} from "react-query";
import AppLoader from "../components/AppLoader";
import Error from "../components/Error";
import Heading from "../components/Heading";
import {getUser} from "../services/authService";

const HomeScreen = ({navigation}) => {
  const {isLoading, isError, data: userData, error} = useQuery("user", getUser);

  if (isLoading) return <AppLoader isLoading={isLoading} />;

  if (isError) return <Error />;

  const leftContents = () => {
    return (
      <View style={styles.cardLeft}>
        <Card containerStyle={styles.card}>
          <TouchableOpacity
            style={{alignItems: "center"}}
            onPress={() =>
              navigation.navigate("HomeStack", {
                screen: "Notices",
                params: {userData}
              })
            }>
            <Card.Image
              style={{
                height: 60,
                width: 60,
                marginTop: 20
              }}
              source={require("../assets/images/notice.png")}
            />
            <Card.Title style={{marginTop: 25, fontSize: 18}}>
              Notices
            </Card.Title>
            <Text style={{textAlign: "center", marginBottom: 10}}>
              Recents Updates
            </Text>
          </TouchableOpacity>
        </Card>

        <Card containerStyle={styles.card}>
          <TouchableOpacity style={{alignItems: "center"}}>
            <Card.Image
              style={{
                height: 60,
                width: 60,
                marginTop: 20
              }}
              source={require("../assets/images/quizzes_icon.png")}
            />
            <Card.Title style={{marginTop: 18, fontSize: 18}}>
              Quizzes
            </Card.Title>
            <View style={{marginBottom: 6}}>
              <Text>MCA</Text>
              <Text>NP</Text>
              <Text>PPC</Text>
              <Text>CC</Text>
              <Text>CNS</Text>
            </View>
          </TouchableOpacity>
        </Card>
      </View>
    );
  };

  const rightContents = () => {
    return (
      <View style={styles.cardRight}>
        <Card containerStyle={styles.card}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("HomeStack", {screen: "Profile"})
            }
            style={{alignItems: "center"}}>
            <Card.Title style={{margin: 18, fontSize: 18}}>
              Study{"\n"}material
            </Card.Title>

            <Text style={{textAlign: "center", fontWeight: "bold"}}>
              {userData.user.semester.value} Sem
            </Text>
          </TouchableOpacity>
        </Card>

        <Card containerStyle={styles.card}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("HomeStack", {screen: "OtherOpp"})
            }
            style={{alignItems: "center"}}>
            <Card.Image
              style={{
                height: 60,
                width: 60,
                marginTop: 0
              }}
              source={require("../assets/images/other_opportunites_icon.png")}
            />
            <Card.Title style={{marginTop: 20, fontSize: 18}}>
              Other{"\n"}Opportunities
            </Card.Title>
          </TouchableOpacity>
        </Card>

        <Card containerStyle={styles.card}>
          <TouchableOpacity style={{alignItems: "center"}}>
            <Card.Image
              style={{
                height: 50,
                width: 50
              }}
              source={require("../assets/images/notice.png")}
            />
            <Card.Title style={{marginTop: 18, fontSize: 18}}>
              Events
            </Card.Title>
          </TouchableOpacity>
        </Card>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}>
        <Heading heading="Welcome Back!" subHeading={userData.user.fullName} />

        <View style={styles.cardContainer}>
          {leftContents()}

          {rightContents()}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center"
  },
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    marginTop: 0,
    padding: 10,
    marginBottom: 30
  },
  cardLeft: {
    marginBottom: 30
  },
  cardRight: {},

  card: {
    shadowColor: "#000",
    elevation: 11,
    borderRadius: 17,
    padding: 20
  }
});

export default HomeScreen;
