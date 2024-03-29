import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const TodoItem = ({ item, pressHandler }) => {
  return (
    <TouchableOpacity onPress={() => pressHandler(item.key)} >
      <Text style={styles.item}>{item.text}</Text>
    </TouchableOpacity>
  ); 
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#bbb',
    borderStyle: 'dashed',
    borderRadius: 10,
  }
});

export default TodoItem;
