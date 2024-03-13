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
              <Text style={styles.shopHeadText}>Notification</Text>
            </View>
            <View style={styles.mainContent}>
              <View style={styles.dateTimer}>
                <Text style={styles.dateTimerText}>A place to see your activity and transaction notifications</Text>
              </View>
              <View style={styles.notifyBox}>
                <View style={styles.notifyContent}>
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
                    <Text style={styles.notifyText}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore 
                      magna aliqua. Ut enim ad minim veniam, quis nostrud 
                      exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                      consequat. Duis aute irure dolor in reprehenderit.
                    </Text>
                  </View>
                </View>
                <Text style={styles.notificationBell}>!</Text>
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
  }
});

export default NotificationScreen;
