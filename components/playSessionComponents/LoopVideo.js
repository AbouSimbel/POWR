import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Video } from 'expo-av';
import { useEffect, useRef, useState } from 'react';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import close from '../../assets/icons/close.png';
import restart from '../../assets/icons/restart.png';
import pause from '../../assets/icons/pause.png'


export default function LoopVideo({ data, setStep, step }) {

    const insets = useSafeAreaInsets();
    const video = useRef(null);

    const [status, setStatus] = useState({});

    return(
        <View style={[styles.screenContainer, { paddingBottom: insets.bottom }]}>

            <View style={styles.videoContainer}>
           {data.video && <Video
                    key={step}
                    ref={video}
                    style={styles.video}
                    source={{
                        uri: data.video,
                    }}
                    useNativeControls={false}
                    resizeMode="cover"
                    shouldPlay
                    isMuted
                    isLooping={true}
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                />}

            </View>

            <View style={{ alignItems: 'center', justifyContent: 'space-around'}}>

                <Text style={styles.text}>{data.exercice_name}</Text>

                <View style={{ height: 90, justifyContent: 'center' }}>
               
               
                <CountdownCircleTimer
                        key={step}
                        style={{height: 90}}
                        isPlaying
                        duration={data.duration}
                        colors={['black']}
                        strokeWidth={0}
                        onComplete={() => {
                            setStep(step + 1)}}
                    >
                        {({ remainingTime }) => <View style={{justifyContent: 'center' }}><Text style={styles.countDown}>{remainingTime}</Text></View>}
                    </CountdownCircleTimer>
               

                </View>

                <View style={styles.buttonsContainer}>

                    <TouchableOpacity
                        style={styles.button}
                    >
                        <Image source={restart} style={{height: 24, width: 24}}/>

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                    >
                         <Image source={pause} style={{height: 24, width: 24}}/>

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                    >
                        <Image source={close} style={{height: 20, width: 20}}/>

                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screenContainer: {
        height: '100%',
        backgroundColor: 'white'
    },
    videoContainer: {
        height: '80%',
        width: '100%'
    },
    text: {
        fontSize: 26,
        fontWeight: 'bold',
        paddingVertical: 5
    },
    video: {
        flex:1
    },
    countDown: {
        color: '#18c07a',
        fontSize: 60,
        fontWeight: 'bold'
    },
    button: {
        height: 41,
        width: 41,
        borderWidth: 1,
        borderColor: '#e8ecf4',
        marginHorizontal: 18,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonsContainer: {
       
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    countDownContainer: {
        height: 90,
        width: 90
    }
});