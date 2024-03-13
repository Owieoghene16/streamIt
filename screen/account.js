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

const AccountScreen = ({ navigation }) => {
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
              <Text style={styles.shopHeadText}>Account Details</Text>
            </View>
            <View style={styles.mainContent}>
              <View style={styles.dateTimer}>
                <Text style={styles.dateTimerText}>Date: <Text style={{color: 'grey'}}>16-09-2024</Text></Text>
              </View>
              <View style={styles.photoChanger}>
                <View style={styles.photoChangerLeft}>
                    <View style={styles.photoChangerBox}>
                      <Image
                        source={{
                          uri: 'https://argon-dashboard-nodejs.creative-tim.com/public/img/theme/team-4-800x800.jpg',
                        }}
                        style={{width: 60, height: 60, borderRadius: 30}}
                      />
                    </View>
                    <Text>Hi, Kindness</Text>
                </View>
                <View style={styles.photoChangerRight}>
                  <Pressable>
                    <Text style={styles.photoFile}>Change Photo</Text>
                  </Pressable>
                </View>
              </View>
              <View style={styles.profileInfo}>
                <View style={styles.profileDetails}>
                  <Text style={styles.profileName}>Full Name</Text>
                  <TextInput 
                    style={styles.inputName} 
                    defaultValue='Kindness Okpugie'
                  />
                </View>
                <View style={styles.profileDetails}>
                  <Text style={styles.profileName}>Nick Name</Text>
                  <TextInput
                    style={styles.inputName} 
                    defaultValue='Industrious Owie'
                  />
                </View>
                <View style={styles.profileDetails}>
                  <Text style={styles.profileName}>Gender</Text>
                  <TextInput 
                    style={styles.inputName} 
                    defaultValue='Male'
                  />
                </View>
                <View style={styles.profileDetails}>
                  <Text style={styles.profileName}>About</Text>
                  <TextInput
                    multiline={true}
                    editable
                    numberOfLines={8}
                    style={styles.inputNameAbout} 
                    defaultValue='Kindness Okpugie'
                  />
                </View>
                <View style={styles.saveChanges}>
                  <Pressable>
                    <Text style={styles.saveChangesText}>Save Changes</Text>
                  </Pressable>
                </View>
              </View>
              <View style={styles.profileBox}>
                <View style={styles.profileSocial}>
                  <View style={styles.profileReferall}>
                    <Text style={{fontSize: 17, color: 'grey', fontWeight: 'bold'}}>Referral Tag</Text>
                    <View style={{flexDirection: 'row', gap: 2, alignItems: 'center'}}>
                      <Text style={{fontSize: 17, color: '#111', fontWeight: 'bold'}}>2A3gf4i</Text>
                      <MaterialCommunityIcons name="clipboard-multiple-outline" size={20} color="black" />
                    </View>
                  </View>
                </View>
                <View style={{borderWidth: 0.25, borderColor: 'grey'}}></View>
                <View style={styles.profileSocial}>
                  <View style={styles.profileReferall}>
                    <View>
                      <Text style={{fontSize: 17, color: '#111', fontWeight: 'bold'}}>Facebook</Text>
                      <Text style={{fontSize: 12, color: 'grey', fontWeight: 'bold'}}>Follow us on Facebook</Text>
                    </View>
                    <FontAwesome5 name="facebook" size={40} color="blue" />
                  </View>
                  <View style={{borderWidth: 0.25, borderColor: 'grey', marginVertical: 5}}></View>
                  <View style={styles.profileReferall}>
                    <View>
                      <Text style={{fontSize: 17, color: '#111', fontWeight: 'bold'}}>Twitter</Text>
                      <Text style={{fontSize: 12, color: 'grey', fontWeight: 'bold'}}>Follow us on Twitter</Text>
                    </View>
                    <FontAwesome5 name="twitter" size={40} color="skyblue" />
                  </View>
                  <View style={{borderWidth: 0.25, borderColor: 'grey', marginVertical: 5}}></View>
                  <View style={styles.profileReferall}>
                    <View>
                      <Text style={{fontSize: 17, color: '#111', fontWeight: 'bold'}}>Youtube</Text>
                      <Text style={{fontSize: 12, color: 'grey', fontWeight: 'bold'}}>Follow us on Youtube</Text>
                    </View>
                    <FontAwesome5 name="youtube" size={40} color="red" />
                  </View>
                  <View style={{borderWidth: 0.25, borderColor: 'grey', marginVertical: 5}}></View>
                </View>
              </View>
              <View style={styles.footerEnd}>
                <Text style={styles.footerText}>Licensed By {''}<Text style={{color: 'skyblue'}}>Kindness{' '}</Text><Text style={{color: 'green'}}>Okpugie</Text></Text>
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
    backgroundColor: '#cce7d0',
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
    fontSize: 16,
    fontWeight: 'bold',
  },
  photoChanger: {
    width: '100%',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent:'space-between',
    backgroundColor: '#F5F6FA',
    borderRadius: 15,
    paddingHorizontal: 10,
    height: 70,
  },
  photoChangerLeft: {
    width: '60%',
    height: '100%',
    alignContent: 'center',
    alignItems: 'center',
    gap: 10,
    flexDirection: 'row',
  },
  photoChangerRight: {
    width: '35%',
    height: '100%',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  photoFile: {
    fontSize: 14,
    paddingHorizontal: 10,
    paddingVertical: 10,
    color: '#111',
    borderRadius: 10,
    fontWeight: 'bold',
    backgroundColor: '#cce7d0',
  },
  profileInfo: {
    width: '100%',
    flexDirection: 'column',
    backgroundColor: '#F5F6FA',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 30,
    marginTop: 20,
  },
  profileDetails: {
    marginBottom: 20,
    flexDirection: 'column',
    gap: 5,
  },
  profileName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  inputName: {
    width: '100%',
    height: 40,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 16,
    color: '#666',
    backgroundColor: '#cce7d0',
    borderRadius: 10,
    fontWeight: 'bold',
  },
  inputNameAbout: {
    width: '100%',
    height: 200,
    paddingHorizontal: 10,
    paddingVertical: 10,
    fontSize: 16,
    color: '#666',
    backgroundColor: '#cce7d0',
    borderRadius: 10,
    fontWeight: 'bold',
    textAlignVertical: 'top',
  },
  saveChanges: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'flex-end',
  },
  saveChangesText:{
    fontSize: 15,
    paddingHorizontal: 20,
    paddingVertical: 12,
    color: '#111',
    borderRadius: 10,
    fontWeight: 'bold',
    backgroundColor: '#cce7d0',
  },
  profileBox: {
    width: '100%',
    backgroundColor: '#F5F6FA',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 30,
    marginTop: 20,
    marginBottom: 50,
  },
  profileSocial: {
    width: '100%',
    paddingVertical: 10,
  },
  profileReferall: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    gap: 10,
  },
  footerEnd: {
    width: '100%',
    marginBottom: 30,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent:'center',
  },
  footerText: {
    fontSize: 15,
    color: 'grey',
    fontWeight: 'bold',
  }
});

export default AccountScreen;
