import { View, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native';
import leftChevron from '../../../assets/icons/left-chevron.png';
import Constants from 'expo-constants';
import { Video } from 'expo-av';
import { useRef } from 'react';

const statusBarHeight = Platform.OS === 'ios' ? Constants.statusBarHeight : 0;


export default function ChallengeVideo({ videoPresentation, setDisplayModal }) {

    const video = useRef();

    return(
        <View style={styles.container}>

            <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: videoPresentation,
                }}
                useNativeControls={false}
                resizeMode="cover"
                isLooping
                shouldPlay
                />
            <TouchableOpacity
                style={styles.backButton}
                onPress={()=> setDisplayModal(false)}
                >
                <Image style={styles.backIcon} resizeMode='contain' source={leftChevron}/>
            </TouchableOpacity>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'relative',
        width: '100%',
        height: '60%',
        backgroundColor: 'blue'
    },
    backButton: {
        height: 40,
        width: 40,
        backgroundColor: '#00000090',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 10,
        top: 10,
        borderRadius: 40,
        marginTop: statusBarHeight
    },
    backIcon: {
        height: 25
    },
    video: {
        flex: 1
    }
})