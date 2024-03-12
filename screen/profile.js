import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Footer from '../components/footer';
import { StyleSheet, View, Text, Image, StatusBar, Pressable, SafeAreaView, Button, FlatList, ScrollView, TouchableOpacity } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  const [data, setData] = useState([
    { text: 'Wake up early', key: 1 },
    { text: 'Come to the office', key: 2 },
    { text: 'Drive back home', key: 3 },
    { text: 'Eat well', key: 4 },
    { text: 'Code well', key: 5 },
  ]);
  const [movies, setMovies] = useState([
    { imageUrl: 'https://image.tmdb.org/t/p/w1280/dqK9Hag1054tghRQSqLSfrkvQnA.jpg', key: 1 },
    { imageUrl: 'https://image.tmdb.org/t/p/w1280/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg', key: 2 },
    { imageUrl: 'https://image.tmdb.org/t/p/w1280/s9YTxwaByYeoSqugYjJJtZjMRAG.jpg', key: 3 },
    { imageUrl: 'https://image.tmdb.org/t/p/w1280/oBIQDKcqNxKckjugtmzpIIOgoc4.jpg', key: 4 },
    { imageUrl: 'https://image.tmdb.org/t/p/w500/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg', key: 5 },
    { imageUrl: 'https://image.tmdb.org/t/p/w1280/feSiISwgEpVzR1v3zv2n2AU4ANJ.jpg', key: 6 },
    { imageUrl: 'https://image.tmdb.org/t/p/w1280/3Kzc6V4MWs3RXCmE5DhAYnfWL8F.jpg', key: 7 },
    { imageUrl: 'https://image.tmdb.org/t/p/w1280/ehumsuIBbgAe1hg343oszCLrAfI.jpg', key: 8 },
  ]);
  
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
      <View style={styles.header}>
        <View>
          <Text style={styles.headerLogo}>Owie's PLace</Text>
        </View>
        <View>
          <Pressable>
              <Image
                source={{
                  uri: 'https://argon-dashboard-nodejs.creative-tim.com/public/img/theme/team-4-800x800.jpg',
                }}
                style={{width: 45, height: 45, borderRadius: 25}}
              />
          </Pressable>
          <Text style={styles.notificationBell}>1</Text>
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
          <View style={styles.main}>
          </View>
        </ScrollView>
      </View>
      {/* Bottom Navbar */}
      <View style={styles.navBar}>
        <Footer navigation={navigation} />
      </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.920, 
    position: 'relative',
  },
  navBar: {
    flex: 0.080,
    bottom: 0,
    width: '100%',
    height: '100%',
    height: 45,
    backgroundColor: '#cce7d0',
    zIndex: 100,
  },
  header: {
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
  mainText: {
    color: 'white',
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
  },
  secondHeader: {
    justifyContent: 'center',
    position: 'relative',
    boxSizing: 'border-box',
    borderColor: 'skyblue',
    paddingHorizontal: 7,
    paddingVertical: 6,
    borderRadius: 25,
    borderWidth: 1,
    width: 170,
    marginLeft: 3,
    marginRight: 12,
  },
});


export default ProfileScreen;
