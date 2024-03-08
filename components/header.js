import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>My Todos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#333',
    height: 90,
    paddingTop: 38,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontVariant: 'bold',
  },
});

export default Header;
