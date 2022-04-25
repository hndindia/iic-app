import React, {useEffect, useState} from "react";
import {View, StyleSheet, FlatList, Text} from "react-native";
import {useQuery} from "react-query";
import AlumniCard from "../components/AlumniCard";
import AppLoader from "../components/AppLoader";
import Error from "../components/Error";
import Heading from "../components/Heading";
import {getCompany} from "../services/userService";

const Alumni = () => {
  const {isLoading, isError, data, error} = useQuery("company", getCompany);

  if (isLoading) return <AppLoader isLoading={isLoading} />;

  if (isError) return <Error />;

  return (
    <View styles={styles.container}>
      <FlatList
        ListHeaderComponent={() => <Heading heading="ALUMNI" />}
        data={data.data}
        keyExtractor={id => id._id}
        renderItem={({item}) => {
          return <AlumniCard company_name={item.name} company_id={item._id} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff"
  }
});

export default Alumni;
