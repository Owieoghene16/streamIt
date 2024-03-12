import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/home';
import ShopScreen from './screen/shop';
import ShopDetails from './screen/shopdetails';
import VideoDetails from './screen/videodetails';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Shop">
          {(props) => <ShopScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="ShopDetails">
          {(props) => <ShopDetails {...props} />}
        </Stack.Screen>
        <Stack.Screen name="VideoDetails">
          {(props) => <VideoDetails {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
