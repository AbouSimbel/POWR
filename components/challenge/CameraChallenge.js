import { useState, useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Dimensions, Alert } from 'react-native';
import { Camera, CameraType } from 'expo-camera';
import RecordingButton from './RecordButton';
import CameraOptions from './CameraOptions';
import * as MediaLibrary from 'expo-media-library';
import InteractionsBar from './InterationsBar/InteractionsBar';

const { width, height } = Dimensions.get('window');

export default function CameraChallenge({ setRecordedVideo, recordedVideo, challengeData }) {

  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState(null);
  const [type, setType] = useState(CameraType.front);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [cameraRef, setCameraRef] = useState(null);

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === 'granted');
      await Camera.requestMicrophonePermissionsAsync();

      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasMediaLibraryPermission(mediaLibraryPermission.status === 'granted');
    })();
  }, []);

  if (hasCameraPermission === null) {
    return <View />;
  }
  if (!hasCameraPermission || !hasMediaLibraryPermission) {
    // renvoyer une modal pour indiquer que la persmission n'a pas été donnée et inviter a faire les modifs dans les params du telephone.
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', color: 'white' }}>
        <Text style={{ color: 'white' }}>No access to camera or Media Library</Text>
      </View>
    )
  }


  return (
    <View style={styles.container}>
      <Camera
        ref={ref => setCameraRef(ref)}
        style={styles.camera}
        type={type}
        ratio={"16:9"}
        onCameraReady={() => setIsCameraReady(true)}
        zoom={0}
      >
        <View style={{ flex: 1 }}>
          <CameraOptions type={type} setType={setType} width={width} challengeData={challengeData} />
        </View>

      </Camera>
      {isCameraReady && <RecordingButton cameraRef={cameraRef} setRecordedVideo={setRecordedVideo} recordedVideo={recordedVideo} />}
      <InteractionsBar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    position: 'relative'
  },
  camera: {
    backgroundColor: '#F1F1F1',
    aspectRatio: 9 / 16,
    flex: 1,
    width: width
  }
})
