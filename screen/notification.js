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
import { StyleSheet, View, Text, Image, StatusBar, Pressable, SafeAreaView, Button, FlatList, ScrollView, TextInput } from 'react-native';

const NotificationScreen = ({ navigation }) => {
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
              <Pressable style={styles.shopHead}  onPress={() => navigation.navigate('Profile')}>
                <Ionicons name="arrow-back" size={24} color="white" style={styles.goBack} />
                <Text style={styles.shopHeadText}>Notification</Text>
              </Pressable>
            </View>
            <View style={styles.mainContent}>
              <View style={styles.dateTimer}>
                <Text style={styles.dateTimerText}>A place to see your activity and transaction notifications</Text>
              </View>
              <View style={styles.nofificationContent}>
                <View style={styles.notifyBox}>
                  <View style={styles.notifyContent}>
                    <Pressable onPress={() => navigation.navigate('NotificationDetails')}>
                      <View style={styles.notifyHead}>
                        <Image
                          source={{
                            uri: 'https://argon-dashboard-nodejs.creative-tim.com/public/img/theme/team-4-800x800.jpg',
                          }}
                          style={{width: 45, height: 45, borderRadius: 25}}
                        />
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Account Creation!</Text>
                      </View>
                      <View style={styles.notifyMessage}>
                        <Text numberOfLines={3} ellipsizeMode='tail' style={styles.notifyText}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                          sed do eiusmod tempor incididunt ut labore et dolore 
                          magna aliqua Ut enim ad minim veniam, quis nostrud 
                          exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                          consequat. Duis aute irure dolor in reprehenderit
                        </Text>
                      </View>
                      <View style={{borderWidth: 0.25, borderColor: 'grey', marginVertical: 5}}></View>
                      <View style={styles.notifyMore}>
                        <View style={styles.notifyTimer}>
                          <Text style={{fontWeight: 'bold', color: 'grey'}}>Yesterday: 08:17pm</Text>
                        </View>
                        <View style={styles.notifyMoreInfo}>
                          <Text style={{fontWeight: 'bold', color: 'grey'}}>View</Text>
                          <MaterialIcons name="navigate-next" size={24} color="grey" />
                        </View>
                      </View>
                    </Pressable>
                  </View>
                  <Text style={styles.notificationBell}>!</Text>
                </View>
                <View style={styles.notifyBox}>
                  <View style={styles.notifyContent}>
                    <Pressable onPress={() => navigation.navigate('NotificationDetails')}>
                      <View style={styles.notifyHead}>
                        <Image
                          source={{
                            uri: 'https://argon-dashboard-nodejs.creative-tim.com/public/img/theme/team-4-800x800.jpg',
                          }}
                          style={{width: 45, height: 45, borderRadius: 25}}
                        />
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Account Creation!</Text>
                      </View>
                      <View style={styles.notifyMessage}>
                        <Text numberOfLines={3} ellipsizeMode='tail' style={styles.notifyText}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Text>
                      </View>
                      <View style={{borderWidth: 0.25, borderColor: 'grey', marginVertical: 5}}></View>
                      <View style={styles.notifyMore}>
                        <View style={styles.notifyTimer}>
                          <Text style={{fontWeight: 'bold', color: 'grey'}}>Yesterday: 08:17pm</Text>
                        </View>
                        <View style={styles.notifyMoreInfo}>
                          <Text style={{fontWeight: 'bold', color: 'grey'}}>View</Text>
                          <MaterialIcons name="navigate-next" size={24} color="grey" />
                        </View>
                      </View>
                    </Pressable>
                  </View>
                </View>
                <View style={styles.notifyBox}>
                  <View style={styles.notifyContent}>
                    <Pressable onPress={() => navigation.navigate('NotificationDetails')}>
                      <View style={styles.notifyHead}>
                        <Image
                          source={{
                            uri: 'https://argon-dashboard-nodejs.creative-tim.com/public/img/theme/team-4-800x800.jpg',
                          }}
                          style={{width: 45, height: 45, borderRadius: 25}}
                        />
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}>Account Creation!</Text>
                      </View>
                      <View style={styles.notifyMessage}>
                        <Text numberOfLines={3} ellipsizeMode='tail' style={styles.notifyText}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                          sed do eiusmod tempor incididunt ut labore et dolore 
                          magna aliqua Ut enim ad minim veniam, quis nostrud.
                        </Text>
                      </View>
                      <View style={{borderWidth: 0.25, borderColor: 'grey', marginVertical: 5}}></View>
                      <View style={styles.notifyMore}>
                        <View style={styles.notifyTimer}>
                          <Text style={{fontWeight: 'bold', color: 'grey'}}>Yesterday: 08:17pm</Text>
                        </View>
                        <View style={styles.notifyMoreInfo}>
                          <Text style={{fontWeight: 'bold', color: 'grey'}}>View</Text>
                          <MaterialIcons name="navigate-next" size={24} color="grey" />
                        </View>
                      </View>
                    </Pressable>
                  </View>
                  <Text style={styles.notificationBell}>!</Text>
                </View>
              </View>
            </View>
            <View style={styles.footerEnd}>
              <Text style={styles.footerText}>Licensed By {''}<Text style={{color: 'skyblue'}}>Kindness{' '}</Text><Text style={{color: 'green'}}>Okpugie</Text></Text>
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
  mainContent: {
    width: '100%',
    paddingHorizontal: 15,
  },
  dateTimer: {
    marginVertical: 15,
  },
  dateTimerText: {
    fontSize: 17,
    color: 'grey',
    fontWeight: 'bold',
  },
  nofificationContent: {
    width: '100%',
    gap: 20,
  },
  notifyBox: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  notifyContent: {
    width: '100%',
    flexDirection: 'column',
    gap: 5,
    overflow: 'hidden',
  },
  notifyHead: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
  },
  notifyMessage: {
    width: '100%',
  },
  notifyText: {
    fontSize: 16,
    color: 'grey',
  },
  notifyMore: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
  },
  notifyMoreInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerEnd: {
    width: '100%',
    marginVertical: 50,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent:'center',
  },
  footerText: {
    fontSize: 15,
    color: 'grey',
    fontWeight: 'bold',
  },
});

export default NotificationScreen;
