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
    <View style={styles.header}>
      <View>
        <Text style={styles.headerLogo}>Owie's PLace</Text>
      </View>
      <View>
        <Pressable>
          <Feather name="menu" size={32} color="white" />
        </Pressable>
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
          <View style={styles.mainAds}>
            <Image
              source={{
                uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
              }}
              style={{width: 250, height: 200}}
            />
          </View>
        </View>
        <View style={styles.firstRow}>
          <View style={styles.firstHeader}>
            <Text style={styles.mainText}>Best Deals</Text>
            <Entypo name="arrow-long-right" size={24} color="white" />
          </View>
        </View>
      </ScrollView>
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