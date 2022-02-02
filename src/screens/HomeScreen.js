import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  ScrollView,
} from 'react-native';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {Card, LinearProgress} from 'react-native-elements';
import Heading from '../components/Heading';

const HomeScreen = ({navigation}) => {
  
  const leftContents = () => {
    return (
      <View style={styles.cardLeft}>
        <Card containerStyle={styles.card}>
          <TouchableOpacity style={{alignItems: 'center'}}>
            <Card.Image
              style={{
                height: 60,
                width: 60,
                marginTop: 20,
              }}
              source={require('../assets/images/notice.png')}
            />
            <Card.Title style={{marginTop: 25, fontSize:18}}>Notices</Card.Title>
            <Text style={{textAlign: 'center', marginBottom:10}}>Recents Updates</Text>
          </TouchableOpacity>
        </Card>

        <Card containerStyle={styles.card}>
          <TouchableOpacity style={{alignItems: 'center'}}>
            <Card.Image
              style={{
                height: 60,
                width: 60,
                marginTop: 20,

              }}
              source={require('../assets/images/quizzes_icon.png')}
            />
            <Card.Title style={{marginTop: 18, fontSize:18}}>Quizzes</Card.Title>
            <View style={{marginBottom:20}}>
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
          <TouchableOpacity style={{alignItems: 'center'}}>
            <Card.Image
              style={{
                height: 60,
                width: 60,
                marginTop: 20,
              
              }}
              source={require('../assets/images/other_opportunites_icon.png')}
            />
            <Card.Title style={{marginTop: 20,fontSize:18}}>
              Other{'\n'}Opportunities
            </Card.Title>
          </TouchableOpacity>
        </Card>
        <Card containerStyle={styles.card}>
          <TouchableOpacity style={{alignItems: 'center'}}>
            <Card.Title style={{margin: 18, fontSize: 18}}>Profile</Card.Title>

            <Text style={{textAlign: 'center', fontWeight:'bold'}}>75%</Text>

            <LinearProgress
              variant="determinate"
              value={0.6}
              style={{marginVertical:15}}
              color='#73C8ED'
            /> 
          </TouchableOpacity>
        </Card>
        <Card containerStyle={styles.card}>
          <TouchableOpacity style={{alignItems: 'center'}}>
            <Card.Image
              style={{
                height: 50,
                width: 50,

              }}
              source={require('../assets/images/notice.png')}
            />
            <Card.Title style={{marginTop: 18, fontSize:18}}>Events</Card.Title>
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
        <Heading heading="Welcome Back!" subHeading="JOHN DOE" />

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
    backgroundColor: '#ffffff',
    alignItems: 'center',
  },
  loaderTextStyle: {
    color: 'white',
    marginBottom: 45,
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 0,
    padding: 10,
    marginBottom: 30,
  },
  cardLeft: {
    marginBottom: 30,
  },
  cardRight: {},

  card: {
    borderRadius: 20,
    shadowColor: '#000',
    elevation: 11,
    borderRadius: 17,
    padding: 20,
  },
});

export default HomeScreen;
