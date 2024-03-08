import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { StyleSheet, View, Text, Image, Alert, TouchableWithoutFeedback, Keyboard, Button, FlatList, ScrollView } from 'react-native';

const DetailsScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Welcome To Shop</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    position: 'relative',
    backgroundColor: 'red',
  },
  navBar: {
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: 45,
    backgroundColor: '#cce7d0',
    zIndex: 100,
  },
  navDiv: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    width: '100%',
    height: 45,
    paddingHorizontal: 18,
  },
  navItem: {
    flexDirection: 'column',
    justifyContent:'center',
    width: 60,
    alignItems: 'center',
    backgroundColor: '#cce7d0',
  },
  navItemActive: {
    backgroundColor: '#cce7d0',
  },
  header: {
    position: 'fixed',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    backgroundColor: '#333',
    width: '100%',
    height: 60,
    backgroundColor: 'skyblue',
    paddingHorizontal: 18,
  },
  headerLogo: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  main: {
    width: '100%',
    justifyContent: 'center',
  },
  mainAds: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 20,
  },
  firstRow: {
    width: '100%',
  },
  firstHeader: {
    backgroundColor: 'skyblue',
    height: 35,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  secondRow: {
    width: '100%',
    marginVertical: 15,
  },
  secondDiv: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    overflowX: 'scroll',
    border: '4px solid red',
    borderColor: 'red',
  },
  secondHeader: {
    justifyContent: 'center',
    position: 'relative',
    boxSizing: 'border-box',
    border: '1px solid',
    borderColor: 'skyblue',
    paddingHorizontal: 7,
    paddingVertical: 6,
    borderRadius: 25,
    borderWidth: 1,
    width: 170,
    marginLeft: 3,
    marginRight: 12,
  },
  mainText: {
  },
  metrics: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  metricsName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  metricsPrice: {
    fontSize: 16,
  },
  rating: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
  },
  ratingStar: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  ratingOff: {
    fontSize: 12,
    color: 'gray',
    textDecorationLine: 'line-through',
  },
  ratingOn: {
    fontSize: 12,
    color: 'gray',
  },
  vendor: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  vendorName: {
    fontSize: 12,
    textDecorationLine: 'underline',
  },
  cart: {
    width: 50,
    height: 50,
    lineHeight: 50,
    color: 'green',
    backgroundColor: '#cce7d0',
    border: '1px solid',
    position: 'absolute',
    cursor: 'pointer',
    bottom: 3,
    borderRadius: 20,
    textAlign: 'center',
    right: 1,
  }
});

export default DetailsScreen;