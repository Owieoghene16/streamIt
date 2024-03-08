import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { StyleSheet, View, Text, Image, Alert, TouchableWithoutFeedback, Keyboard, Button, FlatList, ScrollView } from 'react-native';

const ShopScreen = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Welcome To Shop</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    position: 'relative',
    backgroundColor: 'red',
  },
});

export default ShopScreen;