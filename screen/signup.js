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
import { StyleSheet, View, Text, Image, StatusBar, Pressable, SafeAreaView, TextInput, FlatList, ScrollView, TouchableOpacity } from 'react-native';

const SignupScreen = ({ navigation }) => {
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <StatusBar
            animated={true}
            backgroundColor="skyblue"
            barStyle='default'
            showHideTransition='slide'
            hidden={false} 
          />
        <ScrollView> 
          <View style={styles.mainAds}>
            <View style={styles.shopHead}>
              <Text style={styles.shopHeadText}>Movies</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    position: 'relative',
  },
});

export default SignupScreen;
