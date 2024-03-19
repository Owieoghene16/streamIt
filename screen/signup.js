import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import Footer from '../components/footer';
import VideoLoadingSkeleton from '../components/videoloadingskeleton';
import { RadioButton } from 'react-native-paper';
import { StyleSheet, ImageBackground, View, Text, Image, StatusBar, Pressable, SafeAreaView, TextInput, FlatList, ScrollView, TouchableOpacity } from 'react-native';

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <StatusBar
            animated={true}
            backgroundColor="darkblue"
            barStyle='default'
            showHideTransition='slide'
            hidden={false} 
          />
          <ImageBackground source={require('../assets/johnw.jpg')} resizeMode="cover" style={styles.imageBackground}>
            <ScrollView>
              <View style={styles.main}>
                <View style={styles.mainHeader}>
                  <View style={styles.headerName}>
                    <Text style={{color: '#fff', fontSize: 35, fontWeight: 900}}>Sign Up</Text>
                  </View>
                  <View style={styles.socialSignup}>
                    <View style={styles.socialGoogle}>
                      <Image
                        source={{
                          uri: 'https://cdn-icons-png.flaticon.com/512/300/300221.png',
                        }}
                        style={{width: 35, height: 35}}
                      />
                      <Text style={{color: '#000', fontSize: 21, fontWeight: 'bold'}}>Google</Text>
                    </View>
                    <View style={styles.socialFacebook}>
                      <Image
                        source={{
                          uri: 'https://cdn-icons-png.flaticon.com/512/5968/5968764.png',
                        }}
                        style={{width: 35, height: 35}}
                      />
                      <Text style={{color: '#fff', fontSize: 21, fontWeight: 'bold'}}>Facebook</Text>
                    </View>
                  </View>
                  <View style={styles.inputHeader}>
                    <View style={styles.inputBox}>
                      <TextInput 
                        placeholder='Username'
                        placeholderTextColor="grey" 
                        style={styles.inputBoxText}
                      />
                      <Pressable style={styles.searchButton}>
                        <Feather name="user" size={24} color="grey" />
                      </Pressable>
                    </View>
                  </View>
                  <View style={styles.inputHeader}>
                    <View style={styles.inputBox}>
                      <TextInput 
                        placeholder='Email'
                        placeholderTextColor="grey" 
                        style={styles.inputBoxText}
                      />
                      <Pressable style={styles.searchButton}>
                      <MaterialCommunityIcons name="email" size={24} color="grey" />
                      </Pressable>
                    </View>
                  </View>
                  <View style={styles.inputHeader}>
                    <View style={styles.inputBox}>
                      <TextInput 
                        placeholder='Password'
                        placeholderTextColor="grey" 
                        style={styles.inputBoxText}
                      />
                      <Pressable style={styles.searchButton}>
                        <Entypo name="lock" size={24} color="grey" />
                      </Pressable>
                    </View>
                  </View>
                  <View style={styles.inputHeader}>
                    <View style={styles.inputBox}>
                      <TextInput 
                        placeholder='Confirm Password'
                        placeholderTextColor="grey" 
                        style={styles.inputBoxText}
                      />
                      <Pressable style={styles.searchButton}>
                        <Entypo name="lock" size={24} color="grey" />
                      </Pressable>
                    </View>
                  </View>
                  <View style={styles.signupBox}>
                    <RadioButton
                      value="first"
                      status='checked'
                      color='skyblue'
                    />
                    <Text style={styles.signupButtonText}>Remember Me</Text>
                  </View>
                  <View style={styles.signupBox}>
                    <Pressable style={styles.signupButton}>
                      <Text style={styles.signupButtonText}>Sign Up</Text>
                    </Pressable>
                  </View>
                  <View style={styles.loginLinkBox}>
                    <Text style={{color: '#fff', fontSize: 16, fontWeight: 'bold'}}>Have an Account?</Text>
                    <Text style={{color: '#1DA1F2', fontSize: 22, fontWeight: 'bold'}}>Login</Text>
                  </View>
                </View>
              </View>
            </ScrollView>
          </ImageBackground>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  mainHeader: {
    paddingHorizontal: 7,
    flexDirection: 'column',
    borderRadius: 20,
    gap: 10,
  },
  headerName: {
    width: '100%',
    marginVertical: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputHeader: {
    width: '100%',
  },
  inputBox: {
    width: '100%',
    position: 'relative',
  },
  inputBoxText: {
    width: '100%',
    height: 50,
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#fff',
    color: '#fff',
    fontSize: 20,
    borderRadius: 20,
    paddingLeft: 45,
    paddingRight: 12,
  },
  searchButton: {
    position: 'absolute',
    left: 12,
    top: 12,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupBox: {
    marginVertical: 10,
  },
  signupButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#1DA1F2',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 20,
  },
  signupBox: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    gap: 5,
  },
  loginLinkBox: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
  },
  socialSignup: {
    marginBottom: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  socialGoogle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '48%',
    height: 50,
    gap: 10,
    backgroundColor: '#fff',
  },
  socialFacebook: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '48%',
    height: 50,
    gap: 10,
    backgroundColor: '#1DA1F2',
  },
});

export default SignupScreen;
