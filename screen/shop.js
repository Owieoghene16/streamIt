import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { StyleSheet, View, Text, Image, StatusBar, TouchableWithoutFeedback, SafeAreaView, Pressable, FlatList, ScrollView } from 'react-native';

const ShopScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Text>WElcome</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.920, 
    position: 'relative',
    backgroundColor: 'gold',
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
  main: {
    width: '100%',
    justifyContent: 'center',
  },
  mainAds: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    paddingVertical: 20,
  },
  firstRow: {
    width: '100%',
  },
});

export default ShopScreen;