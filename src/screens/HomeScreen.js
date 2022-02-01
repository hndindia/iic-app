import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {
  Image,
  ProgressBarAndroid,
  ProgressBarAndroidBase,
  ScrollView,
} from 'react-native';
import {
  View,
  Text,
  Button,
  Alert,
  StyleSheet,
  FlatList,
  Linking,
  TouchableOpacity,
} from 'react-native';
import {Card} from 'react-native-elements';
import Heading from '../components/Heading';

const HomeScreen = ({navigation}) => {
  const leftContents = () => {
    return (
      <View style={styles.cardLeft}>
        <Card
          containerStyle={{
            borderRadius: 20,
            shadowColor: '#000',
            elevation: 11,
            borderRadius: 17,
          }}>
          <TouchableOpacity style={{alignItems: 'center'}}>
            <Card.Image
              style={{
                height: 60,
                width: 60,
                marginTop: 20,
              }}
              source={require('../assets/images/notice.png')}
            />
            <Card.Title style={{marginTop: 25}}>NOTICES</Card.Title>
            <Text style={{textAlign: 'center'}}>Recents Updates</Text>
          </TouchableOpacity>
        </Card>

        <Card
          containerStyle={{
            borderRadius: 20,
            shadowColor: '#000',
            elevation: 11,
            borderRadius: 17,
          }}>
          <TouchableOpacity style={{alignItems: 'center'}}>
            <Card.Image
              style={{
                height: 50,
                width: 50,
              }}
              source={require('../assets/images/quizzes_icon.png')}
            />
            <Card.Title style={{}}>Quizzes</Card.Title>
            <View style={{alignItems: 'flex-start'}}>
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
        <Card
          containerStyle={{
            borderRadius: 20,
            shadowColor: '#000',
            elevation: 11,
            borderRadius: 17,
          }}>
          <TouchableOpacity style={{alignItems: 'center'}}>
            <Card.Image
              style={{
                height: 50,
                width: 50,
              }}
              source={require('../assets/images/notice.png')}
            />
            <Card.Title style={{marginTop: 20}}>Other{'\n'} Opportunities</Card.Title>
          </TouchableOpacity>
        </Card>
        <Card
          containerStyle={{
            borderRadius: 20,
            shadowColor: '#000',
            elevation: 11,
            borderRadius: 17,
          }}>
          <TouchableOpacity style={{alignItems: 'center'}}>

            <Card.Title style={{margin: 18, fontSize: 18}}>Profile</Card.Title>

            <Text style={{textAlign: 'center'}}>75%</Text>

            <ProgressBarAndroid
              styleAttr="Horizontal"
              indeterminate={false}
              progress={0.7}
              style={{marginBottom: 20}}
            />
          </TouchableOpacity>
        </Card>
        <Card
          containerStyle={{
            borderRadius: 20,
            shadowColor: '#000',
            elevation: 11,
            borderRadius: 17,
          }}>
          <TouchableOpacity style={{alignItems: 'center'}}>
            <Card.Image
              style={{
                height: 50,
                width: 50,
              }}
              source={require('../assets/images/notice.png')}
            />
            <Card.Title style={{marginTop:20}}>Events</Card.Title>
          </TouchableOpacity>
        </Card>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
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
  },
  cardLeft: {
    marginBottom: 30,
  },
  cardRight: {},
});

export default HomeScreen;
