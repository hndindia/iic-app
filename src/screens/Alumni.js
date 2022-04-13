import React, {useEffect, useState} from "react";
import {
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
  FlatList,
  Linking
} from "react-native";
import {useDispatch, useSelector} from "react-redux";
import {getAlumni, getCompany} from "../store/User/userActions";
import Loader from "react-native-loading-spinner-overlay";
import AlumniCard from "../components/AlumniCard";
import Heading from "../components/Heading";

const Alumni = ({navigation}) => {
  const {alumni, company} = useSelector(state => state.userReducers);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    dispatch(getCompany());
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  return (
    <View styles={styles.container}>
      {isLoading ? (
        <Loader
          visible={isLoading}
          textContent="Please wait"
          textStyle={styles.loaderTextStyle}
          color="#fff"
          animation="fade"
        />
      ) : (
        <FlatList
          ListHeaderComponent={() => <Heading heading="ALUMNI" />}
          data={company}
          keyExtractor={id => id._id}
          renderItem={({item}) => {
            return (

              <AlumniCard company_name={item.name} company_id={item._id} />
            );
          }}
        />
      )}
    </View>
  );
};
{
  /* company.map((d,i) => {
  return <AlumniCard key={i} company_name={d.name} company_id={d._id} />;
}) */
}
{
  /* <FlatList
  data={alumni}
  keyExtractor={id => id._id}
  renderItem={({item}) => {
    return <AlumniCard alumni={item} />;
  }}
/> */
}

/*

   alumni.map((d,i) => {
          console.log("D - ", d);
          return <AlumniCard alumni={d} index={i} />;
        }) 

*/

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff"
  },
  loaderTextStyle: {
    color: "white",
    marginBottom: 45
  }
});

export default Alumni;
