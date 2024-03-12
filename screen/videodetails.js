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
  const [genres, setGenres] = useState([
    { key: 1, name: 'Action' },
    { key: 2, name: 'Adventure' },
    { key: 3, name: 'Animation' },
    { key: 4, name: 'Comedy' },
    { key: 5, name: 'Crime' },
    { key: 6, name: 'Documentary' },
    { key: 7, name: 'Drama' },
    { key: 8, name: 'Family' },
    { key: 9, name: 'Fantasy' },
    { key: 10, name: 'Film-Noir' },
    { key: 11, name: 'History' },
    { key: 12, name: 'Horror' },
    { key: 13, name: 'Music' },
    { key: 14, name: 'Musical' },
  ]);
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
          <View style={styles.main}>
            <View style={styles.videoShow}>
              <View style={styles.secondHeader}>
                <Image
                  source={{
                    uri: 'https://image.tmdb.org/t/p/w1280/meyhnvssZOPPjud4F1CjOb4snET.jpg',
                  }}
                  style={{width: '100%', height: '100%', borderRadius: 20}}
                />
                <View style={styles.imageText}>
                  <View style={styles.imageTextHeader}>
                    <FontAwesome name="play" size={35} color="white" style={styles.playButton} />
                    <Text style={styles.imageTextName}>Watch Trailer</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.productContent}>
              <View style={styles.productNameHeader}>
                <Text style={styles.videoName}>Video Name</Text>
              </View>
              <View style={styles.releaseLike}>
                <View style={styles.releaseHead}>
                  <View style={styles.realeaseName}>
                    <Text style={styles.bulletList}></Text>
                    <Text style={styles.ratingName}>2024-06-11</Text>
                  </View>
                  <View style={styles.realeaseName}>
                    <Text style={styles.bulletList}></Text>
                    <Text style={styles.ratingName}>93m</Text>
                  </View>
                </View>
                <View style={styles.Likes}>
                  <AntDesign name="like2" size={24} color="skyblue" style={styles.videoIcon} />
                  <Text style={{fontSize: 10, fontWeight: 'bold', color: 'grey', textAlign: 'center'}}>12k</Text>
                </View>
              </View>
              <View style={styles.genres}>
                <FlatList 
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={genres}
                  renderItem={({item}) => (
                    <Text style={styles.genresType}>{item.name}</Text>
                  )}
                />
              </View>
              <View style={styles.videoDescription}>
                <Text style={styles.descriptionSpan}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  sed do eiusmod tempor incididunt ut labore et dolore magna 
                  aliqua Ut enim ad minim veniam, quis nostrud exercitation 
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  sed do eiusmod tempor incididunt ut labore et dolore magna 
                  Duis aute irure dolor in reprehenderit in voluptate velit 
                  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                  sed do eiusmod tempor incididunt ut labore et dolore magna 
                  occaecat cupidatat non proident, sunt in culpa qui officia 
                  deserunt mollit anim id est laborum.
                </Text>
              </View>
              <View style={styles.cast}>
                <Text style={styles.director}>Director:</Text>
                <Text style={styles.actors}>Kindness Okpugie</Text>
              </View>
              <View style={styles.cast}>
                <Text style={styles.director}>Actors:</Text>
                <Text style={styles.actors}>Tom cruise, Jennifer lopez, Miles Teller.</Text>
              </View>
              <View style={styles.cast}>
                <Text style={styles.director}>Writers:</Text>
                <Text style={styles.actors}>Joseph Kranacki, Peter craig.</Text>
              </View>
              <View style={{width: '100%', marginBottom: 50, marginTop: 10,}}>
                <Text style={styles.playNow}>Play Now</Text>
              </View>
            </View>
          </View>
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
  notificationBell: {
    position: 'absolute', 
    top: -5,
    right: -5, 
    borderRadius: 20,
    width: 20,
    height: 20,
    lineHeight: 20,
    zIndex: 10,
    backgroundColor: '#cce7d0',
    color: 'white',
    fontSize: 12, 
    textAlign: 'center',
  },
  main: {
    width: '100%',
  },
  videoShow: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 30,
    width: '100%',
    height: 350,
    padding: 10,
  },
  secondHeader: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  productContent: {
    width: '100%',
    paddingHorizontal: 10,
  },
  productNameHeader: {
    width: '100%',
  },
  imageText: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    zIndex: 5,
    paddingHorizontal: 15,
    paddingVertical: 6,
  },
  imageTextHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  playButton: {
    width: 60,
    height: 60,
    lineHeight: 60,
    borderRadius: 50,
    backgroundColor: 'skyblue',
    textAlign: 'center',
  },
  Likes: {
    marginRight: 12,
    textAlign: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  imageTextName: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  videoName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  releaseLike: {
    width: '100%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  releaseHead: {
    width: '50%',
    flexDirection: 'row',
  },
  realeaseName: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    fontWeight: 'bold',
    alignItems: 'center',
    marginRight: 10,
    width: 100,
  },
  bulletList: {
    width: 5,
    height: 5,
    borderRadius: 5,
    alignContent: 'center',
    backgroundColor: '#111',
    marginRight: 10,
  },
  ratingName: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  genres: {
    marginVertical: 8,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  genresType: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 15,
    backgroundColor: 'skyblue',
    borderRadius: 10,
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  },
  videoDescription: {
    width: '100%',
    marginVertical: 8,
  },
  descriptionSpan: {
    width: '100%',
    fontSize: 16,
  },
  cast: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  director: {
    marginRight: 5,
    fontSize: 18,
    fontWeight: 'bold',
  },
  actors: {
    fontSize: 18,
    display: 'flex',
    flexWrap: 'wrap',
    color: 'skyblue',
  },
  playNow: {
    width: '100%',
    height: 50,
    lineHeight: 50,
    backgroundColor: 'skyblue',
    borderRadius: 50,
    display: 'flex',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111',
  }
});

export default VideoDetails;
