import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList, TextInput, Button } from 'react-native';

const AddTodo = ({ submitHandler }) => {
  const [text, setText] = useState('');
  const changeHandler = (value) => {
    setText(value);
  };

  return (
    <View>
      <TextInput 
        style={styles.input}
        placeholder='Add todo...'
        onChangeText={changeHandler}
      />
      <Button 
        title='Add Todo' 
        onPress={()=>submitHandler(text)}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingVertical: 6,
    paddingHorizontal: 8,
    borderBottomColor: '#ddd',
  },
});

export default AddTodo;
