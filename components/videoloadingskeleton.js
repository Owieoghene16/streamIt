import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';

const VideoLoadingSkeleton = ({ navigation }) => {
  const [movies, setMovies] = useState([
    {
      key: 1,
      title: 'Movie 1',
    },
    {
      key: 2,
      title: 'Movie 2',
    },
    {
      key: 3,
      title: 'Movie 3',
    },
    {
      key: 4,
      title: 'Movie 4',
    },
    {
      key: 5,
      title: 'Movie 5',
    },
    {
      id: 6,
      title: 'Movie 6',
    },
  ])
  return (
    <>
      <View style={styles.thirdDiv}>
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={true}
        data={movies}
        renderItem={({item}) => (
          <TouchableOpacity onPress={() => navigation.navigate('VideoDetails')}>
          <View style={styles.videoContLoading}>
            <View style={{width: '100%', height: "100%", borderRadius: 20, backgroundColor: 'hsl(204, 8%, 86%)'}}>
            </View>
            <View style={styles.videoHead}>
              <View style={styles.videoFirst}>
                <View style={styles.videoHeadLeft}>
                  <View style={{width: 50, height: 50, borderRadius: 20, backgroundColor: 'hsl(184, 6%, 81%)'}}>
                  </View>
                  <View style={{width: 50, height: 50, borderRadius: 20, backgroundColor: 'hsl(184, 6%, 81%)'}}>
                  </View>
                </View>
                <View style={styles.videoHeadRight}>
                  <View style={{width: 50, height: 50, borderRadius: 20, backgroundColor: 'hsl(184, 6%, 81%)'}}>
                  </View>
                </View>
              </View>
              <View style={styles.videoNameHead}>
                <View style={{width: '100%', height: 32, borderRadius: 20, backgroundColor: 'hsl(184, 6%, 81%)'}}>
                </View>
              </View>
              <View style={styles.info}>
                  <View style={{width: 40, height: 20, backgroundColor: 'hsl(184, 6%, 81%)'}}>
                  </View>
                  <View style={{width: 80, height: 20, borderRadius: 3, backgroundColor: 'hsl(184, 6%, 81%)'}}>
                  </View>
                  <View style={{width: 40, height: 20, backgroundColor: 'hsl(184, 6%, 81%)'}}>
                  </View>
              </View>
              <View style={styles.type}>
                  <View style={{width: 50, height: 18, borderRadius: 3, backgroundColor: 'hsl(184, 6%, 81%)'}}>
                  </View>
                  <View style={{width: 50, height: 18, borderRadius: 3, backgroundColor: 'hsl(184, 6%, 81%)'}}>
                  </View>
                  <View style={{width: 50, height: 18, borderRadius: 3, backgroundColor: 'hsl(184, 6%, 81%)'}}>
                  </View>
              </View>
            </View>
          </View>
          </TouchableOpacity>
        )}
      />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  videoContLoading: {
    position: 'relative',
    boxSizing: 'border-box',
    borderColor: 'hsl(184, 6%, 81%)',
    borderRadius: 25,
    borderWidth: 4,
    width: 310,
    height: 310,
    marginLeft: 3,
    marginRight: 12,
  },
  videoHead: {
    position: 'absolute',
    paddingTop: '40%',
    width: 310,
    height: 300,
    zIndex: 10,
    paddingHorizontal: 15,
    paddingVertical: 6,
  },
  videoFirst: {
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    width: '100%',
    zIndex: 10,
    justifyContent:'space-between',
    alignItems: 'center',
    width: '100%',
  },
  videoHeadLeft: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
    alignItems: 'center',
    width: '45%',
    paddingHorizontal: 10,
  },
  videoHeadRight: {
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 10,
    justifyContent:'flex-end',
    alignItems: 'center',
    alignItems: 'center',
    width: '40%',
  },
  videoIcon: {
    width: 50,
    height: 50,
    lineHeight: 50,
    backgroundColor: '#333',
    borderRadius: 20,
    overflow: 'hidden',
    textAlign: 'center',
  },
  videoIconTwo: {
    width: 50,
    height: 50,
    lineHeight: 50,
    backgroundColor: '#fff',
    overflow: 'hidden',
    borderRadius: 20,
    textAlign: 'center',
  },
  videoNameHead: {
    width: '100%',
    paddingVertical: 8,
    overflow: 'hidden',
  },
  videoName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  infoButton: {
    fontSize: 12,
    backgroundColor: '#333',
    width: 40,
    height: 20,
    lineHeight: 20,
    textAlign: 'center',
    justifyContent: 'center',
  },
  infoButtonText: {
    color: '#fff',
    textAlign: 'center',
  },
  infoName: {
    fontSize: 18,
    color: 'grey',
  },
  info: {
    width: '60%',
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',
  },
});

export default VideoLoadingSkeleton;
