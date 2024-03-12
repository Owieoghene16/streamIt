import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Footer from '../components/footer';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, View, Text, Image, StatusBar, TouchableWithoutFeedback, SafeAreaView, Pressable, FlatList, ScrollView, TextInput, Button } from 'react-native';

const VideoDetails = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.header}>
        <View style={styles.headerFon}>
          <View style={styles.headerInput}>
            <TextInput 
              style={styles.input} 
              placeholder="Search..."
            />
            <Pressable style={styles.searchButton}>
              <Octicons name="search" size={24} color="white" />
            </Pressable>
          </View>
          <Pressable>
            <MaterialIcons name="watch-later" size={35} color="white" style={styles.cartHeader} />
            <Text style={styles.notificationBell}>1</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.container}>
        <StatusBar
          animated={true}
          backgroundColor="skyblue"
          barStyle='default'
          showHideTransition='slide'
          hidden={false} 
        />
        <ScrollView> 
        </ScrollView>
      </View>
      {/* Bottom Navbar */}
      <View style={styles.navBar}>
        <Footer navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.920, 
    position: 'relative',
  },
  navBar: {
    flex: 0.080,
    position: 'fixed',
    bottom: 0,
    width: '100%',
    height: '100%',
    height: 45,
    backgroundColor: '#cce7d0',
    zIndex: 100,
  },
  header: {
    position: 'fixed',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    width: '100%',
    height: 70,
    backgroundColor: 'skyblue',
    paddingHorizontal: 18,
  },
  headerFon: {
    position: 'relative',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerInput: {
    position: 'relative',
    width: '85%',
  },
  searchButton: {
    position: 'absolute',
    right: 7,
    top: 5,
    width: 50,
    height: 40,
    lineHeight: 20,
    borderRadius: 20,
    textAlign: 'center',
    backgroundColor: 'skyblue',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartHeader: {
    backgroundColor: 'transparent',
    cursor: 'pointer',
  },
  headerLogo: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderColor: '#cce7d0',
    color: '#666',
    fontSize: 20,
    borderRadius: 20,
    paddingHorizontal: 12,
  },
  main: {
    width: '100%',
  },
  notificationBell: {
    position: 'absolute', /* Overlaps the bell icon */
    top: -5, /* Adjust position from the top */
    right: -5, /* Adjust position from the right */
    borderRadius: 20,
    width: 20,
    height: 20,
    lineHeight: 20,
    zIndex: 10,
    backgroundColor: '#cce7d0', /* Adjust background color */
    color: 'white', /* Adjust text color */
    fontSize: 12, /* Adjust font size for number */
    textAlign: 'center', /* Center the number inside the badge */
  }
});

export default VideoDetails;
