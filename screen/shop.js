import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Footer from '../components/footer';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, View, Text, Image, StatusBar, TouchableWithoutFeedback, SafeAreaView, Pressable, FlatList, ScrollView, TextInput } from 'react-native';

const ShopScreen = ({navigation}) => {
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
          <View style={styles.mainAds}>
            <View style={styles.shopHead}>
              <Text style={styles.shopHeadText}>Shop</Text>
            </View>
          </View>
          <View style={styles.mainProduct}>
            <View style={styles.product}>
              {
                movies.map((item, index) => (
                  <View style={styles.secondHeader} key={item.id}>
                    <Image
                      source={{
                        uri: 'https://argon-dashboard-nodejs.creative-tim.com/public/img/theme/team-4-800x800.jpg',
                      }}
                      style={{width: '100%', height: 170, borderRadius: 20}}
                    />
                    <View style={styles.metrics}>
                      <Text numberOfLines={1} ellipsizeMode='tail' style={styles.metricsName}>Food Name</Text>
                    </View>
                    <View style={styles.rating}>
                      <Text style={styles.metricsPrice}>20,000</Text>
                      <Text style={styles.ratingOff}>15%</Text>
                    </View>
                    <View style={{paddingVertical: 20, flexDirection:'row', alignItems: 'center'}}>
                      <Text style={{fontSize: 12}}>Owie's Place</Text>
                      <MaterialIcons name="verified" size={20} color="skyblue" />
                    </View>
                    <View>
                      <MaterialCommunityIcons name="cart-outline" size={24} color="green" style={styles.cart} />
                    </View>
                  </View>
                ))
              }
            </View>
          </View>
          <View style={styles.nextPage}>
            <View style={styles.nextPageButton}>
              <Ionicons name="chevron-back-sharp" size={24} style={styles.next} color="white" />
              <Text style={styles.next}>1</Text>
              <Text style={styles.next}>2</Text>
              <Text style={styles.next}>3</Text>
              <Text style={styles.next}>4</Text>
              <Ionicons name="chevron-forward" size={24} style={styles.next} color="white" />
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
  headerLogo: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  input: {
    width: '100%',
    height: 50,
    fontFamily: 'Verdana',
    outline: 'none',
    backgroundColor: '#fff',
    borderColor: '#cce7d0',
    color: '#666',
    fontSize: 20,
    borderRadius: 20,
    paddingHorizontal: 12,
  },
  main: {
    marginVertical: 10,
    width: '100%',
  },
  mainAds: {
    width: '100%',
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
    fontFamily: 'monospace',
  },
  mainProduct: {
    width: '100%',
  },
  product: {
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
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
    marginHorizontal: 5,
    marginBottom: 15,
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
  cart: {
    width: 50,
    height: 50,
    lineHeight: 50,
    backgroundColor: '#cce7d0',
    border: '1px solid',
    position: 'absolute',
    bottom: 3,
    borderRadius: 20,
    textAlign: 'center',
    right: 1,
  },
  nextPage: {
    marginVertical: 50,
    width: '100%',
  },
  nextPageButton: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  next: {
    fontSize: 20,
    height: 40,
    width: 40,
    lineHeight: 40,
    textAlign: 'center',
    backgroundColor: 'skyblue',
    border: '1px solid',
    fontWeight: 'bold',
    color: '#fff',
    marginRight: 5,
  }
});

export default ShopScreen;