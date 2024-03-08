import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screen/home';
import ShopScreen from './screen/shop';

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home">
          {(props) => <HomeScreen {...props} />}
        </Stack.Screen>
        <Stack.Screen name="shop" component={ShopScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
