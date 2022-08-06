import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Video } from 'expo-av';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import IsSuccess from './IsSuccess';
import { useState } from 'react';
import AndWhat from './AndWhat';


export default function ChallengeValidation({ recordedVideo, done, challengeId, setRecordedVideo }) {

    const insets = useSafeAreaInsets();

    const [isSuccess, setIsSuccess] = useState(null);
    const [andWhat, setAndWhat] = useState(null);

    return(
        <View style={[styles.container, { paddingTop: insets.top, paddingBottom: insets.bottom }]}>
        <View style={styles.videoContainer}>
            <Video
            style={styles.recordedVideo}
            source={{uri: recordedVideo.uri}}
            shouldPlay
            resizeMode='contain'
            zoom={0}
            useNativeControls
            />
        </View>

        <View style={styles.bottomContainer}>
          { isSuccess === null && <IsSuccess setIsSuccess={setIsSuccess} isSuccess={isSuccess} done={done} challengeId={challengeId} setRecordedVideo={setRecordedVideo} recordedVideo={recordedVideo}/> }
          { ((andWhat === null) && (isSuccess !== null)) && <AndWhat url={recordedVideo}/>}
        </View>

      </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        width: '100%'
      },
      recordedVideo:{
        flex:1,
        width: '100%'
      },
      videoContainer: {
        width: '95%',
        aspectRatio: 1/1,
        backgroundColor: 'black',
        alignSelf: 'center',
        borderRadius: 10,
        paddingVertical: 10
      },
      bottomContainer: {
        alignItems: 'center',
        marginTop: 10,
        flex: 1
      }
});
