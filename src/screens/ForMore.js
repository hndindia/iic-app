import React from 'react';
import {Alert, Linking, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

const ForMore = ({route, navigation}) => {
  const {item} = route.params;
  // console.log("🔥🔥🔥🔥🔥🔥ROUTE -> ", route);
  const checkUrl = async url => {
    try {
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    } catch (err) {
      console.log('Error - ', err);
    }
  };

  return (
    <View style={styles.container}>

      <Text style={styles.companyName}>{item.company}</Text>

      <Text>{item.position}</Text>

      <View style={styles.eligibilityContainer}>
        <Text style={styles.eligibilityHeading}>Eligibility - </Text>
        <Text style={styles.eligibilityContent}>{item.eligibility}</Text>
      </View>

      <View style={styles.desContainer}>
        <Text style={styles.eligibilityHeading}>Description - </Text>
        <Text style={styles.eligibilityContent}>{item.instruction}</Text>
      </View>

      <View style={styles.eligibilityContainer}>
        <Text style={styles.eligibilityHeading}>Package - </Text>
        <Text style={styles.eligibilityContent}>{item.package}</Text>
      </View>

      <View style={styles.eligibilityContainer}>
        <Text style={styles.eligibilityHeading}>Posted Date - </Text>
        <Text style={styles.eligibilityContent}>
          {new Date(item.createdAt).toDateString()}
        </Text>
      </View>

      <View style={styles.eligibilityContainer}>
        <Text style={styles.eligibilityHeading}>Last Date - </Text>
        <Text style={styles.eligibilityContent}>
          {new Date(item.lastDate).toDateString()}
        </Text>
      </View>

      <View style={styles.eligibilityContainer}>
        <Text style={styles.eligibilityHeading}>Link - </Text>

        <TouchableOpacity onPress={() => checkUrl(item.link)}>
          <Text style={styles.link}>{item.link}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    alignItems: 'center',
  },
  companyName: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 23,
  },
  eligibilityContainer: {
    // borderColor:'red',
    // borderWidth:2,
    // flex:1,
    flexDirection: 'row',
    alignSelf: 'flex-start',
    marginTop: 10,
    marginLeft: 10,
  },
  eligibilityHeading: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 17,
  },
  eligibilityContent: {
    color: '#000',
    fontSize: 15,
  },
  desContainer: {
    marginTop: 10,
    // marginLeft:10
  },
  link: {
    color: '#0645AD',
    textDecorationLine: 'underline',
    fontSize: 15,
  },
});

export default ForMore;
