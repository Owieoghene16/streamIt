import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Footer from '../components/footer';
import { StyleSheet, View, Text, Image, StatusBar, Pressable, SafeAreaView, Button, FlatList, ScrollView } from 'react-native';

const HomeScreen = ({ navigation }) => {
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
            <Feather name="menu" size={32} color="white" />
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
            <View style={styles.mainAds}>
              <Image
                source={{
                  uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
                }}
                style={{width: 250, height: 200}}
              />
            </View>
          </View>
          <View style={styles.firstRow}>
            <View style={styles.firstHeader}>
              <Text style={styles.mainText}>Best Deals</Text>
              <Entypo name="arrow-long-right" size={24} color="white" />
            </View>
          </View>
          <View style={styles.secondRow}>
            <View style={styles.secondDiv}>
              <FlatList 
                horizontal
                showsHorizontalScrollIndicator={true}
                data={data}
                renderItem={(item) => (
                  <View style={styles.secondHeader}>
                    <Image
                      source={{
                        uri: 'https://argon-dashboard-nodejs.creative-tim.com/public/img/theme/team-4-800x800.jpg',
                      }}
                      style={{width: '100%', height: 170, borderRadius: 20, textAlign: 'center',}}
                    />
                    <View style={styles.metrics}>
                      <Text style={styles.metricsName}>Food Name</Text>
                    </View>
                    <View style={styles.rating}>
                      <Text style={styles.metricsPrice}>20,000</Text>
                      <Text style={styles.ratingOff}>15%</Text>
                    </View>
                    <View style={{paddingVertical: 20, flexDirection:'row', alignItems: 'center'}}>
                      <Text style={{fontSize: 12, }}>Owie's Place</Text>
                      <MaterialIcons name="verified" size={20} color="skyblue" />
                    </View>
                    <View>
                      <Entypo name="shopping-cart" size={24} color="green" style={styles.cart} />
                    </View>
                  </View>
                )}
              />
            </View>
          </View>
          <View style={styles.firstRow}>
            <View style={styles.firstHeader}>
              <Text style={styles.mainText}>Top Videos</Text>
              <Entypo name="arrow-long-right" size={24} color="white" />
            </View>
          </View>
          <View style={styles.thirdRow}>
            <View style={styles.thirdDiv}>
              <FlatList 
                horizontal
                showsHorizontalScrollIndicator={true}
                data={movies}
                renderItem={({item}) => (
                  <View style={styles.videoCont}>
                    <Image
                      source={{
                        uri: item?.imageUrl,
                      }}
                      style={{width: '100%', height: "100%", borderRadius: 20, textAlign: 'center',}}
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
                        <Text style={styles.videoName}>Video Name</Text>
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
                )}
              />
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
    height: 300,
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
    border: '1px solid',
    cursor: 'pointer',
    borderRadius: 20,
    textAlign: 'center',
  },
  videoIconTwo: {
    width: 50,
    height: 50,
    lineHeight: 50,
    backgroundColor: '#fff',
    border: '1px solid',
    cursor: 'pointer',
    borderRadius: 20,
    textAlign: 'center',
  },
  videoNameHead: {
    width: '100%',
    paddingVertical: 8,
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
    border: '1px solid',
    position: 'absolute',
    cursor: 'pointer',
    bottom: 3,
    borderRadius: 20,
    textAlign: 'center',
    right: 1,
  }
});


export default HomeScreen;
