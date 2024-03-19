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

const LoginScreen = ({ navigation }) => {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <StatusBar
            animated={true}
            backgroundColor="#000"
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
});

export default LoginScreen;
