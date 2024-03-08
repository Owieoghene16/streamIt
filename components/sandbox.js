import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const Sandbox = () => {
  return (
    <View style={styles.container}>
    <Text style={styles.sandBox}>One</Text>
      <Text style={styles.sandBoxTwo}>Two</Text>
      <Text style={styles.sandBoxThree}>Three</Text>
      <Text style={styles.sandBoxFour}>Four</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    backgroundColor: 'skyblue',
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
    paddingTop: 40,
  },
  sandBox: {
    flex: 1,
    color: 'white',
    fontSize: 20,
    padding: 10,
    backgroundColor: 'gold',
  },
  sandBoxTwo: {
    flex: 1,
    color: 'white',
    fontSize: 20,
    padding: 10,
    backgroundColor: 'pink',
  },
  sandBoxThree: {
    flex: 2,
    color: 'white',
    padding: 10,
    backgroundColor: 'green',
  },
  sandBoxFour: {
    flex: 1,
    color: 'white',
    padding: 10,
    padding: 20,
    backgroundColor: 'coral',
  },
});

export default Sandbox;
