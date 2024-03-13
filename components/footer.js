import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';

const Footer = ({ navigation }) => {
  return (
    <>
        <View style={styles.navDiv}>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
            <View style={styles.navItem}>
              <FontAwesome name="home" size={24} color="skyblue" />
              <Text style={{color: 'skyblue'}}>Home</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Shop')}>
            <View style={styles.navItem}>
              <FontAwesome5 name="shopify" size={24} color="skyblue" />
              <Text style={{color: 'skyblue'}}>Shop</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Video')}>
            <View style={styles.navItem}>
              <Entypo name="folder-video" size={24} color="skyblue" />
              <Text style={{color: 'skyblue'}}>Movies</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => navigation.navigate('Profile')}>
            <View style={styles.navItem}>
              <MaterialIcons name="admin-panel-settings" size={24} color="skyblue" />
              <Text style={{color: 'skyblue'}}>Profile</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  navDiv: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingHorizontal: 18,
  },
  navItem: {
    flexDirection: 'column',
    justifyContent:'center',
    width: 60,
    alignItems: 'center',
    backgroundColor: '#cce7d0',
  },
});

export default Footer;
