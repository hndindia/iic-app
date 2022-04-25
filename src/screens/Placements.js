import axios from "axios";
import React, {useEffect, useState} from "react";
import {View, Alert, StyleSheet, FlatList} from "react-native";
import Card from "../components/Card";
import Heading from "../components/Heading";
import {getPlacement} from "../services/userService";
import AppLoader from "../components/AppLoader";
import {useQuery} from "react-query";
import Error from "../components/Error";

const Placements = ({navigation}) => {
  const {isLoading, isError, data} = useQuery("placements", getPlacement);

  if (isLoading) return <AppLoader isLoading={isLoading} />;

  if (isError) return <Error />;

  return (
    <View style={styles.container}>
      <FlatList
        ListHeaderComponent={() => (
          <Heading heading={"PLACEMENT\nOPPORTUNITIES"} />
        )}
        data={data.placement}
        keyExtractor={id => id._id}
        renderItem={({item}) => {
          let ld = new Date(item.lastDate); //Last Date
          let cd = new Date(item.createdAt); //Created Date

          return (
            <Card
              heading={item.company}
              eligibility={item.eligibility}
              salaryPackage={item.package}
              lastDate={ld.toDateString()}
              postedDate={`${cd.getDate()}/${cd.getMonth() + 1}`}
              onPress={() =>
                navigation.navigate("HomeStack", {
                  screen: "ForMore",
                  params: {item}
                })
              }
            />
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  }
});

export default Placements;
