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
import { StyleSheet, ImageBackground, View, Text, Image, StatusBar, Pressable, SafeAreaView, TextInput, FlatList, ScrollView, TouchableOpacity } from 'react-native';

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
          <ImageBackground source={require('../assets/Poster.png')} resizeMode="cover" style={styles.imageBackground}>
            <ScrollView>
              <View style={styles.main}>
                <View style={styles.mainHeader}>
                  <View style={styles.headerName}>
                    <Text style={{color: '#fff', fontSize: 35, fontWeight: 900}}>Sign Up</Text>
                  </View>
                  <View>
                    <View>
                      <TextInput 
                        placeholder='Username'
                      />
                    </View>
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
  },
  headerName: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SignupScreen;
