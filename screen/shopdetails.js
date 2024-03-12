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

const ShopDetails = ({navigation}) => {
  const [movies, setMovies] = useState([
    { imageUrl: 'https://image.tmdb.org/t/p/w1280/dqK9Hag1054tghRQSqLSfrkvQnA.jpg', key: 1 },
    { imageUrl: 'https://image.tmdb.org/t/p/w1280/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg', key: 2 },
    { imageUrl: 'https://image.tmdb.org/t/p/w1280/s9YTxwaByYeoSqugYjJJtZjMRAG.jpg', key: 3 },
    { imageUrl: 'https://image.tmdb.org/t/p/w1280/oBIQDKcqNxKckjugtmzpIIOgoc4.jpg', key: 4 },
    { imageUrl: 'https://image.tmdb.org/t/p/w1280/fCwwzOziFYs7YRwP4gbrb9qH1xg.jpg', key: 5 },
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
          <View style={styles.main}>
            <View style={styles.sliderShow}>
              <View style={styles.secondHeader}>
                <Image
                  source={{
                    uri: 'https://argon-dashboard-nodejs.creative-tim.com/public/img/theme/team-4-800x800.jpg',
                  }}
                  style={{width: '100%', height: '100%', borderRadius: 20}}
                />
              </View>
            </View>
            <View style={styles.productContent}>
              <View style={styles.productNameHeader}>
                <Text style={styles.productName}>
                  Loren Ipsum Duis
                </Text>
              </View>
              <View style={styles.rating}>
                <Pressable style={styles.infoButton}>
                  <Text style={styles.infoButtonText}>4200 Sold</Text>
                </Pressable>
                <View style={styles.ratingIcons}>
                  <Entypo name="star" size={15} color="orange" />
                  <Text>4.5</Text>
                  <Text>(400 reviews)</Text>
                </View>
              </View>
              <View style={styles.quantityHeader}>
                <View>
                  <Text style={styles.productName}>$80,099</Text>
                </View>
                <View style={styles.quantity}>
                  <AntDesign name="minuscircle" size={24} color="skyblue" />
                  <Text style={styles.quantityName}>1</Text>
                  <AntDesign name="pluscircle" size={24} color="skyblue" />
                </View>
              </View>
              <View style={{width: '100%', borderWidth: 0.25, borderColor: 'grey', marginVertical: 15}}></View>
              <View style={styles.productNameHeader}>
                <Text style={styles.productName}>Description</Text>
              </View>
              <View style={styles.descriptionView}>
                <Text style={styles.descriptionSpan}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                  sed do eiusmod tempor incididunt ut labore et dolore magna 
                  aliqua Ut enim ad minim veniam, quis nostrud exercitation 
                  ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit 
                  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                  occaecat cupidatat non proident, sunt in culpa qui officia 
                  deserunt mollit anim id est laborum.
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
            <View>
              <MaterialCommunityIcons name="cart-outline" size={32} color="green" style={styles.cartItem} />
            </View>
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
  sliderShow: {
    display: 'flex',
    flexDirection: 'row',
    marginRight: 30,
    width: '100%',
    height: 300,
    padding: 10,
  },
  secondHeader: {
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
  productName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  rating: {
    flexDirection: 'row',
  },
  infoButton: {
    marginVertical: 10,
    fontSize: 12,
    backgroundColor: '#cce7d0',
    width: 80,
    height: 25,
    lineHeight: 20,
    textAlign: 'center',
    justifyContent: 'center',
  },
  infoButtonText: {
    color: '#888',
    textAlign: 'center',
  },
  ratingIcons: {
    flexDirection: 'row',
    width: '40%',
    justifyContent:'space-around',
    alignItems: 'center',
  },
  descriptionView: {
    width: '100%',
    position: 'relative',
    marginTop: 10,
    marginBottom: 40,
  },
  descriptionSpan: {
    fontSize: 15,
  },
  cartItem: {
    display: 'fixed',
    width: 60,
    height: 60,
    lineHeight: 60,
    backgroundColor: '#cce7d0',
    position: 'absolute',
    cursor: 'pointer',
    borderRadius: 20,
    textAlign: 'center',
    bottom: 30,
    right: 30,
    zIndex: 5,
  },
  quantityHeader: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
  },
  quantity: {
    flexDirection: 'row',
    width: '40%',
    justifyContent:'flex-start',
    alignItems: 'center',
  },
  quantityName: {
    fontSize: 20,
    paddingHorizontal: 10,
  }
});

export default ShopDetails;