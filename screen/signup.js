import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import Footer from '../components/footer';
import VideoLoadingSkeleton from '../components/videoloadingskeleton';
import { StyleSheet, View, Text, Image, StatusBar, Pressable, SafeAreaView, TextInput, FlatList, ScrollView, TouchableOpacity } from 'react-native';

const VideoScreen = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [movies, setMovies] = useState([
    { imageUrl: 'https://image.tmdb.org/t/p/w1280/dqK9Hag1054tghRQSqLSfrkvQnA.jpg', key: 1 },
    { imageUrl: 'https://image.tmdb.org/t/p/w1280/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg', key: 2 },
    { imageUrl: 'https://image.tmdb.org/t/p/w1280/s9YTxwaByYeoSqugYjJJtZjMRAG.jpg', key: 3 },
    { imageUrl: 'https://image.tmdb.org/t/p/w1280/oBIQDKcqNxKckjugtmzpIIOgoc4.jpg', key: 4 },
    { imageUrl: 'https://image.tmdb.org/t/p/w500/kDp1vUBnMpe8ak4rjgl3cLELqjU.jpg', key: 5 },
    { imageUrl: 'https://image.tmdb.org/t/p/w1280/feSiISwgEpVzR1v3zv2n2AU4ANJ.jpg', key: 6 },
    { imageUrl: 'https://image.tmdb.org/t/p/w1280/3Kzc6V4MWs3RXCmE5DhAYnfWL8F.jpg', key: 7 },
    { imageUrl: 'https://image.tmdb.org/t/p/w1280/ehumsuIBbgAe1hg343oszCLrAfI.jpg', key: 8 },
  ]);
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/movie/popular?api_key=b991de6ee9dc8e55c2bcc7a20cc0a756',  
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiOTkxZGU2ZWU5ZGM4ZTU1YzJiY2M3YTIwY2MwYTc1NiIsInN1YiI6IjY1MDA1YTFiZDdkY2QyMDBhY2IwNDVhMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xk2gatk5wsYEPGcosnmfqzG0Pp9UbOCdEUIr2zOG2TU'
    }
  };
  const fetchData = async () => {
    const resp = await fetch(options.url, options);
    const data = await resp.json();
    setData(data.results);
    setLoading(false);
  };
  useEffect(() => {
    fetchData();
  }, []);
  
  return (
    <>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.container}>
          <StatusBar
            animated={true}
            backgroundColor="skyblue"
            barStyle='default'
            showHideTransition='slide'
            hidden={false} 
          />
        <ScrollView> 
          <View style={styles.mainAds}>
            <View style={styles.shopHead}>
              <Text style={styles.shopHeadText}>Movies</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    position: 'relative',
  },
});

export default VideoScreen;
