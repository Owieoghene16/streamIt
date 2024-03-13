import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import Footer from '../components/footer';
import { StyleSheet, View, Text, Image, StatusBar, Pressable, SafeAreaView, TextInput, FlatList, ScrollView, TouchableOpacity } from 'react-native';

const VideoScreen = ({ navigation }) => {
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
            <MaterialCommunityIcons name="cart-outline" size={35} color="white" style={styles.cartHeader} />
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
          <View style={styles.mainAds}>
            <View style={styles.shopHead}>
              <Text style={styles.shopHeadText}>Movies</Text>
            </View>
          </View>
          <View style={styles.firstRow}>
            <View style={styles.firstHeader}>
              <Text style={styles.mainText}>Trending</Text>
              <Entypo name="arrow-down" size={24} color="white" />
            </View>
          </View>
          <View style={styles.thirdRow}>
            <View style={styles.thirdDiv}>
              <FlatList 
                horizontal
                showsHorizontalScrollIndicator={true}
                data={movies}
                renderItem={({item}) => (
                  <TouchableOpacity onPress={() => navigation.navigate('VideoDetails')}>
                  <View style={styles.videoCont}>
                    <Image
                      source={{
                        uri: item?.imageUrl,
                      }}
                      style={{width: '100%', height: "100%", borderRadius: 20}}
                    />
                    <View style={styles.videoHead}>
                      <View style={styles.videoFirst}>
                        <View style={styles.videoHeadLeft}>
                          <FontAwesome name="play" size={24} color="black" style={styles.videoIconTwo} />
                          <AntDesign name="like2" size={24} color="skyblue" style={styles.videoIcon} />
                        </View>
                        <View style={styles.videoHeadRight}>
                          <Entypo name="chevron-thin-down" size={24} color="skyblue" style={styles.videoIcon} />
                        </View>
                      </View>
                      <View style={styles.videoNameHead}>
                        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.videoName}>Video Name</Text>
                      </View>
                      <View style={styles.info}>
                        <Pressable style={styles.infoButton}>
                          <Text style={styles.infoButtonText}>18+</Text>
                        </Pressable>
                        <Text style={styles.infoName}>4 season</Text>
                        <Pressable style={styles.infoButton}>
                          <Text style={styles.infoButtonText}>HD</Text>
                        </Pressable>
                      </View>
                      <View style={styles.type}>
                        <Text style={styles.typeName}>Scifi</Text>
                        <Text style={styles.typeName}>Action</Text>
                        <Text style={styles.typeName}>Adventure</Text>
                      </View>
                    </View>
                  </View>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
          <View style={styles.firstRow}>
            <View style={styles.firstHeader}>
              <Text style={styles.mainText}>Top Videos</Text>
              <Entypo name="arrow-down" size={24} color="white" />
            </View>
          </View>
          <View style={styles.thirdRow}>
            <View style={styles.thirdDiv}>
              <FlatList 
                horizontal
                showsHorizontalScrollIndicator={true}
                data={movies}
                renderItem={({item}) => (
                  <TouchableOpacity onPress={() => navigation.navigate('VideoDetails')}>
                  <View style={styles.videoCont}>
                    <Image
                      source={{
                        uri: item?.imageUrl,
                      }}
                      style={{width: '100%', height: "100%", borderRadius: 20}}
                    />
                    <View style={styles.videoHead}>
                      <View style={styles.videoFirst}>
                        <View style={styles.videoHeadLeft}>
                          <FontAwesome name="play" size={24} color="black" style={styles.videoIconTwo} />
                          <AntDesign name="like2" size={24} color="skyblue" style={styles.videoIcon} />
                        </View>
                        <View style={styles.videoHeadRight}>
                          <Entypo name="chevron-thin-down" size={24} color="skyblue" style={styles.videoIcon} />
                        </View>
                      </View>
                      <View style={styles.videoNameHead}>
                        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.videoName}>Video Name</Text>
                      </View>
                      <View style={styles.info}>
                        <Pressable style={styles.infoButton}>
                          <Text style={styles.infoButtonText}>18+</Text>
                        </Pressable>
                        <Text style={styles.infoName}>4 season</Text>
                        <Pressable style={styles.infoButton}>
                          <Text style={styles.infoButtonText}>HD</Text>
                        </Pressable>
                      </View>
                      <View style={styles.type}>
                        <Text style={styles.typeName}>Scifi</Text>
                        <Text style={styles.typeName}>Action</Text>
                        <Text style={styles.typeName}>Adventure</Text>
                      </View>
                    </View>
                  </View>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
          <View style={styles.firstRow}>
            <View style={styles.firstHeader}>
              <Text style={styles.mainText}>Sitcom</Text>
              <Entypo name="arrow-down" size={24} color="white" />
            </View>
          </View>
          <View style={styles.thirdRow}>
            <View style={styles.thirdDiv}>
              <FlatList 
                horizontal
                showsHorizontalScrollIndicator={true}
                data={movies}
                renderItem={({item}) => (
                  <TouchableOpacity onPress={() => navigation.navigate('VideoDetails')}>
                  <View style={styles.videoCont}>
                    <Image
                      source={{
                        uri: item?.imageUrl,
                      }}
                      style={{width: '100%', height: "100%", borderRadius: 20}}
                    />
                    <View style={styles.videoHead}>
                      <View style={styles.videoFirst}>
                        <View style={styles.videoHeadLeft}>
                          <FontAwesome name="play" size={24} color="black" style={styles.videoIconTwo} />
                          <AntDesign name="like2" size={24} color="skyblue" style={styles.videoIcon} />
                        </View>
                        <View style={styles.videoHeadRight}>
                          <Entypo name="chevron-thin-down" size={24} color="skyblue" style={styles.videoIcon} />
                        </View>
                      </View>
                      <View style={styles.videoNameHead}>
                        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.videoName}>Video Name</Text>
                      </View>
                      <View style={styles.info}>
                        <Pressable style={styles.infoButton}>
                          <Text style={styles.infoButtonText}>18+</Text>
                        </Pressable>
                        <Text style={styles.infoName}>4 season</Text>
                        <Pressable style={styles.infoButton}>
                          <Text style={styles.infoButtonText}>HD</Text>
                        </Pressable>
                      </View>
                      <View style={styles.type}>
                        <Text style={styles.typeName}>Scifi</Text>
                        <Text style={styles.typeName}>Action</Text>
                        <Text style={styles.typeName}>Adventure</Text>
                      </View>
                    </View>
                  </View>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
          <View style={styles.firstRow}>
            <View style={styles.firstHeader}>
              <Text style={styles.mainText}>Kids</Text>
              <Entypo name="arrow-down" size={24} color="white" />
            </View>
          </View>
          <View style={styles.thirdRow}>
            <View style={styles.thirdDiv}>
              <FlatList 
                horizontal
                showsHorizontalScrollIndicator={true}
                data={movies}
                renderItem={({item}) => (
                  <TouchableOpacity onPress={() => navigation.navigate('VideoDetails')}>
                  <View style={styles.videoCont}>
                    <Image
                      source={{
                        uri: item?.imageUrl,
                      }}
                      style={{width: '100%', height: "100%", borderRadius: 20}}
                    />
                    <View style={styles.videoHead}>
                      <View style={styles.videoFirst}>
                        <View style={styles.videoHeadLeft}>
                          <FontAwesome name="play" size={24} color="black" style={styles.videoIconTwo} />
                          <AntDesign name="like2" size={24} color="skyblue" style={styles.videoIcon} />
                        </View>
                        <View style={styles.videoHeadRight}>
                          <Entypo name="chevron-thin-down" size={24} color="skyblue" style={styles.videoIcon} />
                        </View>
                      </View>
                      <View style={styles.videoNameHead}>
                        <Text numberOfLines={1} ellipsizeMode='tail' style={styles.videoName}>Video Name</Text>
                      </View>
                      <View style={styles.info}>
                        <Pressable style={styles.infoButton}>
                          <Text style={styles.infoButtonText}>18+</Text>
                        </Pressable>
                        <Text style={styles.infoName}>4 season</Text>
                        <Pressable style={styles.infoButton}>
                          <Text style={styles.infoButtonText}>HD</Text>
                        </Pressable>
                      </View>
                      <View style={styles.type}>
                        <Text style={styles.typeName}>Scifi</Text>
                        <Text style={styles.typeName}>Action</Text>
                        <Text style={styles.typeName}>Adventure</Text>
                      </View>
                    </View>
                  </View>
                  </TouchableOpacity>
                )}
              />
            </View>
          </View>
          <View style={styles.firstRow}>
            <View style={styles.firstHeader}>
              <Text style={styles.mainText}>Recents</Text>
              <Entypo name="arrow-long-right" size={24} color="white" />
            </View>
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
  cartHeader: {
    backgroundColor: 'transparent',
  },
  headerInput: {
    position: 'relative',
    width: '85%',
  },
  notificationBell: {
    position: 'absolute', /* Overlaps the bell icon */
    top: -5, /* Adjust position from the top */
    right: -5, /* Adjust position from the right */
    borderRadius: 10,
    overflow: 'hidden',
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
    marginBottom: 20,
  },
  shopHead: {
    width: '100%',
    height: 40,
    backgroundColor: '#cce7d0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shopHeadText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
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
  thirdRow: {
    width: '100%',
    marginVertical: 15,
  },
  thirdDiv: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    overflowX:'scroll',
  },
  videoCont: {
    position: 'relative',
    boxSizing: 'border-box',
    border: '1px solid',
    borderColor: 'skyblue',
    paddingHorizontal: 7,
    paddingVertical: 6,
    borderRadius: 25,
    borderWidth: 1,
    width: 310,
    height: 310,
    marginLeft: 3,
    marginRight: 12,
  },
  videoHead: {
    position: 'absolute',
    paddingTop: '40%',
    width: 310,
    height: 300,
    zIndex: 10,
    paddingHorizontal: 15,
    paddingVertical: 6,
  },
  videoFirst: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    width: '100%',
    zIndex: 10,
    justifyContent:'space-between',
    alignItems: 'center',
    width: '100%',
  },
  videoHeadLeft: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    alignItems: 'center',
    width: '45%',
    paddingHorizontal: 10,
  },
  videoHeadRight: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent:'flex-end',
    alignItems: 'center',
    alignItems: 'center',
    width: '40%',
  },
  videoIcon: {
    width: 50,
    height: 50,
    lineHeight: 50,
    backgroundColor: '#333',
    borderRadius: 20,
    overflow: 'hidden',
    textAlign: 'center',
  },
  videoIconTwo: {
    width: 50,
    height: 50,
    lineHeight: 50,
    backgroundColor: '#fff',
    overflow: 'hidden',
    borderRadius: 20,
    textAlign: 'center',
  },
  videoNameHead: {
    width: '100%',
    paddingVertical: 8,
    overflow: 'hidden',
  },
  videoName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  infoButton: {
    fontSize: 12,
    backgroundColor: '#333',
    width: 40,
    height: 20,
    lineHeight: 20,
    textAlign: 'center',
    justifyContent: 'center',
  },
  infoButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  infoName: {
    fontSize: 18,
    color: 'grey',
  },
  info: {
    width: '60%',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
  },
  type: {
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center',
    paddingVertical: 5,
  },
  typeName: {
    borderLeftColor: 'red',
    fontSize: 16,
    color: '#fff',
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
    backgroundColor: '#cce7d0',
    position: 'absolute',
    bottom: 3,
    borderRadius: 20,
    textAlign: 'center',
    right: 1,
  }
});

export default VideoScreen;
