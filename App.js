import React, { useState } from 'react';
import {View, Text, Image, ScrollView, TextInput, StyleSheet, Button} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const changeName = () => {
    const newName = ['silas', 'doyin', 'kindness', 'owie', 'nicolas'];
    const index = Math.floor(Math.random() * newName.length);
    setName(newName[index]);
  };

  return (
    <ScrollView style={styles.ScrollView}>
      <View style={styles.main}>
        <Text>The name are below: DOWN</Text>
        <Text>1. {name}</Text>
        <Text>2. {text}</Text>
      </View>
      <View style={styles.container}>
        <Button title='Change Name' onPress={changeName} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  ScrollView: {
    marginTop: 100,
  },
  main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: 300,
    height: 200,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 300,
    height: 40,
    paddingLeft: 10,
    borderColor: 'gray',
    borderWidth: 1,
  }
})

export default App;