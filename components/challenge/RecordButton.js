import { Text, TouchableOpacity, StyleSheet,Dimensions, Alert, Image } from 'react-native';
import { useState } from 'react';
import recButton from '../../assets/icons/rec-button.png';

const width = Dimensions.get('window').width;

export default function RecordingButton({ cameraRef, setRecordedVideo }) {
      
    const [recording, setRecording] = useState(false);

    const handleRecording = () => {

        setRecording(!recording);
        if(recording){
            cameraRef.stopRecording();
        } else if (!recording) {




            const options = {
                quality: 1
            }
            cameraRef.recordAsync(options).then((video) => {
                setRecording(false);
                setRecordedVideo(video)
            });
             
        }
    }

    return !recording ? (
        <TouchableOpacity
            style={[styles.record, {borderColor: "#ff404087", backgroundColor: "#ff4040"}]}
            onPress={handleRecording}
        >
            <Image source={recButton} resizeMode='contain'/>
        </TouchableOpacity>
    ) : (
        <TouchableOpacity
        style={[styles.record, {borderColor: "#FFFFFF87", backgroundColor: "#FFFFFF"}]}
        onPress={handleRecording}
        > 
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    record: {
        borderWidth: 7,
        borderRadius: 100,
        alignSelf: 'center',
        marginBottom: 10,
        position: 'absolute',
        bottom: 15,
        zIndex: 9999
    },
    countDown: {
        position: 'absolute',
        height:'100%',
        width: '100%',
        justifyContent:'center',
        alignItems: 'center'
        
    },
    countDownNumber: {
        color: 'white',
        fontSize: 100
    },
    countDownBackground: {
        height: 120,
        width: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 120,
        backgroundColor: 'black'
    },
    recording: {
        
    }
});
