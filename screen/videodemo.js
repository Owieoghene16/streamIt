import * as React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import * as ScreenOrientation from 'expo-screen-orientation';
import { Video, ResizeMode } from 'expo-av';

const VideoDemo = ({navigation}) => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  const onFullscreenUpdate = async ({fullscreenUpdate}) => {
    console.log(fullscreenUpdate, 'fullscreen update');
    if (fullscreenUpdate === VideoFullscreenUpdate.PLAYER_DID_PRESENT) {
      console.log('fullscreen present')
      await ScreenOrientation.unlockAsync();
    } else if (fullscreenUpdate === VideoFullscreenUpdate.PLAYER_WILL_DISMISS) {
      console.log('fullscreen portrait')
      await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }
  };
  const showVideoInFullscreen = async () => { await videoRef.current.presentFullscreenPlayer() }
  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        useNativeControls
        resizeMode={'contain'}
        isLooping
        onFullscreenUpdate={onFullscreenUpdate}
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
        <Button
          title={status.isPlaying ? 'Pause' : 'Play'}
          onPress={() =>
            console.log(status, 'videooooo')
          }
        />
        <Button
          title={'Backkkk'}
          onPress={() =>
            navigation.goBack()
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 320,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default VideoDemo;
