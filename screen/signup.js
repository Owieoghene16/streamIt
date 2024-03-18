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
import { StyleSheet, ImageBackground, View, Text, Checkbox, StatusBar, Pressable, SafeAreaView, TextInput, FlatList, ScrollView, TouchableOpacity } from 'react-native';

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <StatusBar
            animated={true}
            backgroundColor="skyblue"
            barStyle='default'
            showHideTransition='slide'
            hidden={false} 
          />
          <ImageBackground source={require('../assets/johnwi.jpg')} resizeMode="cover" style={styles.imageBackground}>
            <ScrollView>
              <View style={styles.main}>
                <View style={styles.mainHeader}>
                  <View style={styles.headerName}>
                    <Text style={{color: '#fff', fontSize: 35, fontWeight: 900}}>Sign Up</Text>
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
                      status={'unchecked'}
                    />
                    <Text style={styles.signupButtonText}>Remember Me</Text>
                  </View>
                  <View style={styles.signupBox}>
                    <Pressable style={styles.signupButton}>
                      <Text style={styles.signupButtonText}>Sign Up</Text>
                    </Pressable>
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
    height: '100%',
    justifyContent: 'center',
  },
  main: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  mainHeader: {
    paddingHorizontal: 7,
    flexDirection: 'column',
    gap: 10,
  },
  headerName: {
    width: '100%',
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
    backgroundColor: 'skyblue',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupButtonText: {
    color: '#fff',
    fontSize: 20,

  }
});

export default SignupScreen;
