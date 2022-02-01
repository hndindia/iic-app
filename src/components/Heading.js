import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Heading = ({heading, subHeading}) => {
  return (
    <>
      <Text style={styles.heading}>{heading}</Text>

      <Text style={styles.subHeading}>{subHeading}</Text>
    </>
  );
};

const styles = StyleSheet.create({
  heading: {
    marginTop: 10,
    marginLeft: 20,
    color: '#0D054B',
    fontSize: 23,
    fontWeight:'bold'
  },
  subHeading: {
    color: '#0D054B',
    fontSize: 18,
    marginLeft: 20,
  },
});

export default Heading;
