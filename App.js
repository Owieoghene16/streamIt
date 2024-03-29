import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/home';
import ShopScreen from './screen/shop';
import ShopDetails from './screen/shopdetails';
import VideoScreen from './screen/video';
import VideoDetails from './screen/videodetails';
import AccountScreen from './screen/account';
import ProfileScreen from './screen/profile';
import CartScreen from './screen/cart';
import VideoDemo from './screen/videodemo';
import SignupScreen from './screen/signup';
import LoginScreen from './screen/login';
import NotificationScreen from './screen/notification';
import NotificationDetails from './screen/notificationdetails';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Signup"
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
        <Stack.Screen name="Video">
          {(props) => <VideoScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="VideoDetails">
          {(props) => <VideoDetails {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Profile">
          {(props) => <ProfileScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Account">
          {(props) => <AccountScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Notification">
          {(props) => <NotificationScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="NotificationDetails">
          {(props) => <NotificationDetails {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Cart">
          {(props) => <CartScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="VideoDemo">
          {(props) => <VideoDemo {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Signup">
          {(props) => <SignupScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="Login">
          {(props) => <LoginScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
