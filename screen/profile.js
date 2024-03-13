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
import { StyleSheet, View, Text, Image, StatusBar, Pressable, SafeAreaView, Modal, FlatList, ScrollView, TouchableOpacity, Alert } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [checked, setChecked] = useState(true);

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
            <View style={styles.photoHeader}>
              <View style={styles.photoHeaderPic}>
                <Image
                  source={{
                    uri: 'https://argon-dashboard-nodejs.creative-tim.com/public/img/theme/team-4-800x800.jpg',
                  }}
                  style={{width: 200, height: 200, borderRadius: 100, objectFit: 'cover'}}
                />
              </View>
              <View style={styles.joined}>
                <Text style={{fontSize: 20, color: 'grey'}}>Joined</Text>
                <Text style={{fontSize: 18, color: '#111', fontWeight: 'bold'}}>1 year ago</Text>
              </View>
            </View>
            <View style={styles.profileName}>
              <Text style={styles.firstName}>David</Text>
              <Text style={styles.lastName}>Robinson</Text>
            </View>
            <View style={styles.profileHeader}>
              <Text style={styles.profileHeaderName}>Profile</Text>
            </View>
            <View style={styles.manageAccount}>
              <Pressable onPress={() => navigation.navigate('Account')}>
                <View style={styles.manage}>
                  <View style={styles.manageIcon}>
                    <View>
                      <MaterialIcons name="account-circle" size={24} color="skyblue" style={styles.manageIconPic} />
                      <Text style={styles.notificationBellTwo}>!</Text>
                    </View>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>Manage Account</Text>
                  </View>
                  <MaterialIcons name="navigate-next" size={24} color="black" />
                </View>
              </Pressable>
            </View>
            <View style={styles.profileHeader}>
              <Text style={styles.profileHeaderName}>Settings</Text>
            </View>
            <View style={styles.manageAccount}>
              <Pressable onPress={() => navigation.navigate('Notification')}>
                <View style={styles.manage}>
                  <View style={styles.manageIcon}>
                    <View>
                      <Ionicons name="notifications" size={24} color="skyblue" style={styles.manageIconPic} />
                      <Text style={styles.notificationBellTwo}>1</Text>
                    </View>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>Notifications</Text>
                  </View>
                  <MaterialIcons name="navigate-next" size={24} color="black" />
                </View>
              </Pressable>
            </View>
            <View style={styles.manageAccount}>
              <Pressable onPress={() => setModalVisible(true)}>
                <View style={styles.manage}>
                  <View style={styles.manageIcon}>
                    <MaterialIcons name="light-mode" size={24} color="skyblue" style={styles.manageIconPic} />
                    <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
                      <Text style={{fontSize: 18, fontWeight: 'bold'}}>Appearance</Text>
                      <Text style={{fontSize: 12, fontWeight: 'bold', color: 'grey'}}>System</Text>
                    </View>
                  </View>
                  <MaterialIcons name="navigate-next" size={24} color="black" />
                  <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                    Alert.alert('Modal has been closed.');
                      setModalVisible(!modalVisible);
                    }}>
                    <View style={styles.centeredView}>
                      <View style={styles.modalView}>
                        <Text style={styles.modalText}>Appearance</Text>
                        <View style={styles.radioCheck}>
                          <RadioButton
                            value="first"
                            color='skyblue'
                            status={ checked ? 'checked' : 'unchecked' }
                            onPress={() => setChecked(!checked)}
                          />
                          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'grey'}}>System</Text>
                        </View>
                        <View style={styles.radioCheck}>
                          <RadioButton
                            value="first"
                            color='skyblue'
                            status={ checked ? 'checked' : 'unchecked' }
                            onPress={() => setChecked(!checked)}
                          />
                          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'grey'}}>Light Mode</Text>
                        </View>
                        <View style={styles.radioCheck}>
                          <RadioButton
                            value="first"
                            color='skyblue'
                            status={ checked ? 'checked' : 'unchecked' }
                            onPress={() => setChecked(!checked)}
                          />
                          <Text style={{fontSize: 20, fontWeight: 'bold', color: 'grey'}}>Dark Mode</Text>
                        </View>
                        <Pressable
                          style={styles.button}
                          onPress={() => setModalVisible(!modalVisible)}>
                          <Text style={styles.textStyle}>CANCEL</Text>
                        </Pressable>
                      </View>
                    </View>
                  </Modal>
                </View>
              </Pressable>
            </View>
            <View style={styles.signOut}>
              <Text style={styles.signOutText}>Sign Out</Text>
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
    backgroundColor: '#cce7d0',
    color: 'white', 
    fontSize: 12,
    textAlign: 'center',
  },
  notificationBellTwo: {
    position: 'absolute',
    top: -5,
    right: -5,
    overflow: 'hidden',
    borderRadius: 10,
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
    paddingHorizontal: 15,
    width: '100%',
  },
  photoHeader: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    height: 250,
    width: '100%',
  },
  photoHeaderPic: {
    width: '60%',
  },
  joined: {
    width: '35%',
    height: '100%',
    justifyContent: 'center',
  },
  profileName: {
    width: '100%',
    flexDirection: 'row',
    gap: 10,
  },
  lastName: {
    fontSize: 35,
    fontWeight: 'bold',
    letterSpacing: 1,
    color: '#666',
  },
  firstName: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#111',
    letterSpacing: 1,
  },
  profileHeader: {
    marginTop: 20,
  },
  profileHeaderName: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#111',
  },
  manageAccount: {
    marginTop: 10,
    width: '100%',
  },
  manage: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'skyblue',
    borderWidth: 0.5,
    borderColor: 'skyblue',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50,
  },
  manageIcon: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    justifyContent:'space-between',
    alignItems: 'center',
  },
  manageIconPic: {
    width: 50,
    height: 50,
    lineHeight: 50,
    backgroundColor: '#cce7d0',
    borderRadius: 25,
    overflow: 'hidden',
    textAlign: 'center',
  },
  signOut: {
    marginVertical: 40,
  },
  signOutText: {
    width: 120,
    height: 50,
    lineHeight: 50,
    overflow: 'hidden',
    borderRadius: 10,
    textAlign: 'center',
    backgroundColor: 'skyblue',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#111',
  },


  
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: ' rgba(0,0,0,0.4)'
  },
  modalView: {
    width: '100%',
    position: 'relative',
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  radioCheck: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    gap: 10,
  },
  textStyle: {
    color: 'skyblue',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
    marginRight: 15,
  },
  modalText: {
    marginBottom: 15,
    fontSize: 22,
    fontWeight: 'bold',
  },
  radioButtonStyle: {
    color: 'red',
  },

});

export default ProfileScreen;
