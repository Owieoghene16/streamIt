import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Footer from '../components/footer';
import { RadioButton } from 'react-native-paper';
import { StyleSheet, View, Text, Image, StatusBar, Pressable, SafeAreaView, Button, FlatList, ScrollView, TouchableOpacity, Alert } from 'react-native';

const CartScreen = ({ navigation }) => {

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
            <View style={styles.shopHead}>
              <Pressable style={styles.shopHead}  onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="white" style={styles.goBack} />
                <Text style={styles.shopHeadText}>Your Carts</Text>
              </Pressable>
            </View>
            <View style={styles.cartContent}>
              <View style={styles.cartInfo}>
                <View style={styles.cartBox}>
                  <View style={styles.cartItem}>
                    <View style={styles.cartItemPic}>
                      <Image
                        source={{
                          uri: 'https://argon-dashboard-nodejs.creative-tim.com/public/img/theme/team-4-800x800.jpg',
                        }}
                       style={{width: '100%', height: 100, borderTopLeftRadius: 10, borderBottomLeftRadius: 10}}
                      />
                    </View>
                    <View style={styles.cartItemName}>
                      <Text numberOfLines={5} ellipsizeMode='tail' style={styles.cartItemText}>
                        Product Name
                      </Text>
                      <Text>20,000</Text>
                    </View>
                    <View style={styles.cartItemQuantity}>
                      <AntDesign name="minuscircle" size={24} color="skyblue" />
                      <Text style={styles.quantityName}>1</Text>
                      <AntDesign name="pluscircle" size={24} color="skyblue" />
                    </View>
                  </View>
                  <View style={styles.cartItem}>
                    <View style={styles.cartItemPic}>
                      <Image
                        source={{
                          uri: 'https://argon-dashboard-nodejs.creative-tim.com/public/img/theme/team-4-800x800.jpg',
                        }}
                       style={{width: '100%', height: 100, borderTopLeftRadius: 10, borderBottomLeftRadius: 10}}
                      />
                    </View>
                    <View style={styles.cartItemName}>
                      <Text numberOfLines={5} ellipsizeMode='tail' style={styles.cartItemText}>
                        Product Name
                      </Text>
                      <Text>20,000</Text>
                    </View>
                    <View style={styles.cartItemQuantity}>
                      <AntDesign name="minuscircle" size={24} color="skyblue" />
                      <Text style={styles.quantityName}>1</Text>
                      <AntDesign name="pluscircle" size={24} color="skyblue" />
                    </View>
                  </View>
                  <View style={styles.cartItem}>
                    <View style={styles.cartItemPic}>
                      <Image
                        source={{
                          uri: 'https://argon-dashboard-nodejs.creative-tim.com/public/img/theme/team-4-800x800.jpg',
                        }}
                       style={{width: '100%', height: 100, borderTopLeftRadius: 10, borderBottomLeftRadius: 10}}
                      />
                    </View>
                    <View style={styles.cartItemName}>
                      <Text numberOfLines={5} ellipsizeMode='tail' style={styles.cartItemText}>
                        Product Name
                      </Text>
                      <Text>20,000</Text>
                    </View>
                    <View style={styles.cartItemQuantity}>
                      <AntDesign name="minuscircle" size={24} color="skyblue" />
                      <Text style={styles.quantityName}>1</Text>
                      <AntDesign name="pluscircle" size={24} color="skyblue" />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.shippingType}>
                <View style={styles.shipPickup}>
                  <Text style={styles.shipPickupText}>Pickup</Text>
                </View>
                <View style={styles.shipDelivery}>
                  <Text style={styles.shipDeliveryText}>Delivery</Text>
                </View>
              </View>
              <View style={styles.checkout}>
                <View style={styles.checkoutDetail}>
                  <Text style={{fontSize: 14, color: 'grey', fontWeight: 'bold'}}>Delivery To:</Text>
                  <Pressable>
                    <Text style={{fontSize: 18, fontWeight: 'bold', color: 'green', borderBottomWidth: 1, borderBottomColor: 'green'}}>
                      EDIT
                    </Text>
                  </Pressable>
                </View>
                <View style={styles.checkoutAddress}>
                  <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000'}}>
                    149, Sunset Avenue, Los Angeles, Lagos.
                  </Text>
                </View>
              </View>
              <View style={styles.checkout}>
                <View style={styles.checkoutDetail}>
                  <Text style={{fontSize: 14, fontWeight: 'bold', color: 'grey'}}>Delivery Service:</Text>
                  <Pressable>
                    <Text style={{fontSize: 18, fontWeight: 'bold', color: 'green', borderBottomWidth: 1, borderBottomColor: 'green'}}>
                      EDIT
                    </Text>
                  </Pressable>
                </View>
                <View style={styles.checkoutAddress}>
                  <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000'}}>
                    Fedex Express, Friday 28 July.
                  </Text>
                </View>
              </View>
              <View style={{width: '100%', borderWidth: 0.25, borderColor: 'grey', marginVertical: 10}}></View>
              <View style={styles.checkoutPrice}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: 'grey'}}>Price</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: 'grey'}}>
                  ₦25,000
                </Text>
              </View>
              <View style={styles.checkoutPrice}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: 'grey'}}>Shipping Fee</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: 'grey'}}>
                  ₦3,000
                </Text>
              </View>
              <View style={styles.checkoutPrice}>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000'}}>Total</Text>
                <Text style={{fontSize: 16, fontWeight: 'bold', color: '#000'}}>
                  ₦28,000
                </Text>
              </View>
              <View style={styles.checkoutButton}>
                <Pressable style={styles.checkoutButtonPress}>
                  <Text style={{color: 'white', fontSize: 17}}>Pay ₦28,000</Text>
                </Pressable>
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
    position: 'absolute',
    top: -5,
    right: -5,
    borderRadius: 10,
    overflow: 'hidden',
    width: 20,
    height: 20,
    lineHeight: 20,
    zIndex: 10,
    backgroundColor: 'orange',
    color: 'white', 
    fontSize: 12,
    textAlign: 'center',
  },
  main: {
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
  },
  goBack: {
    position: 'absolute',
    top: 10,
    left: 15,
  },
  cartContent: {
    width: '100%',
    paddingHorizontal: 15,
  },
  cartInfo: {
    flexDirection: 'column',
    flexwrap: 'wrap',
    width: '100%',
    marginVertical: 20,
  },
  cartBox: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    flexDirection: 'column',
    borderRadius: 20,
    gap: 20,
  },
  cartItem: {
    width: '100%',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    shadowColor: '#111',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    gap: 2,
    borderWidth: 0.25,
    borderColor: '#999',
    borderRadius: 10,
  },
  cartItemPic: {
    width: '30%',
  },
  cartItemName: {
    width: '60%',
    height: '100%',
    paddingTop: 1,
  },
  cartItemText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cartItemQuantity: {
    width: '8%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  shippingType: {
    width: '100%',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    height: 40,
    borderWidth: 2,
    borderColor: 'skyblue',
    marginBottom: 10,
    borderRadius: 5,
  },
  shipPickup: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  shipPickupText: {
    fontSize: 18,
    color: '#000',
  },
  shipDelivery: {
    width: '50%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white',
    backgroundColor: 'skyblue',
  },
  shipDeliveryText: {
    color: 'white',
    fontSize: 18,
  },
  checkout: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'column',
  },
  checkoutDetail: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
  },
  checkoutAddress: {
    width: '100%',
    marginVertical: 5,
  },
  checkoutPrice: {
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
  },
  checkoutButton: {
    marginVertical: 20,
  },
  checkoutButtonPress: {
    width: '100%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
    borderWidth: 2,
    borderColor: 'skyblue',
    borderRadius: 5,
  },
});

export default CartScreen;
