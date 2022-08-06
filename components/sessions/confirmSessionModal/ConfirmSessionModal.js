import { Modal, View, Text, TouchableOpacity, StyleSheet, Dimensions, StatusBar, SafeAreaView, Platform, Image } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';
import { useRef } from 'react';
import TitleBar from './TitleBar';
import BottomBlock from './BottomBlock';
import { LinearGradient } from 'expo-linear-gradient';


export default function ConfirmSessionModal({ data, setDisplayModal, displayModal }) {

    const video = useRef(null);

    return (
        <Modal
            statusBarTranslucent
            visible={displayModal}
            style={styles.container}>

            <LinearGradient
                // Background Linear Gradient
                colors={['transparent', 'rgba(0,0,0,1)']}
                style={styles.background}
            />

            <TitleBar setDisplayModal={setDisplayModal} title={data.title}/>

            <Video
                ref={video}
                style={styles.video}
                source={{
                    uri: data.trailer,
                }}
                useNativeControls={false}
                resizeMode="cover"
                isLooping
                shouldPlay

            />

            <BottomBlock setDisplayModal={setDisplayModal} data={data} />

        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    video: {
        flex: 1
    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: '85%',
        zIndex: 1
    }
})