import React, {useState} from 'react';
import {View, Button, StyleSheet, TouchableOpacity, Text} from 'react-native';

const AppButton = ({onPress, title, style}) => (
  <TouchableOpacity 
    onPress={onPress} 
    style={[styles.appButtonContainer, style]}
  >
   
    <Text style={styles.appButtonText}>{title}</Text>
  
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: '#5B37B7',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});

export default AppButton;
