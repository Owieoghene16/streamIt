import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, Alert, TouchableWithoutFeedback, Keyboard, Button } from 'react-native';
import Header from '../components/header';
import AddTodo from '../components/addtodo';
import TodoItem from '../components/todoitem';

const HomeScreen = ({ navigation }) => {
  const [todo, setTodo] = useState([
    { text: 'Wake up early', key: 1 },
    { text: 'Come to the office', key: 2 },
    { text: 'Drive back home', key: 3 },
  ]);
  const pressHandler = (key) => {
    setTodo((prevTodo) => {
      return prevTodo.filter((item) => item.key !== key );
    });
  };
  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodo((prevTodo) => {
        return [
          ...prevTodo,
          { text, key: prevTodo.length + 1 },
        ];
      });
    } else {
      Alert.alert('OOPS...', 'Todos must be over three characters long', [
        {
          text: 'Understood',
          onPress: () => console.log('OK Pressed'),
        }
      ])
    }
  }

  return (
    /* <Sandbox /> */
    <TouchableWithoutFeedback
     
      onPress={() =>  Keyboard.dismiss()} 
    >
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList 
            data={todo}
            renderItem={({ item }) => {
              return (
                <TodoItem item={item} pressHandler={()=> pressHandler(item.key)} />
              );
            }}
          />
        </View>
      </View>
      <View>
        <Button 
          title='Go To Details' 
          style={styles.text} 
          onPress={() => navigation.navigate('details')}
        />
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    flex: 1,
    marginTop: 20,
  }
});

export default HomeScreen;
