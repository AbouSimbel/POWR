import { Video } from 'expo-av';
import { View, Text, StyleSheet, Dimensions, StatusBar, Platform } from 'react-native';
import { Constants } from 'expo-constants';
import { useRef, useState } from 'react';
import InteractionsBar from './InteractionsBar';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import GradientBar from '../../common/GradientBar';


const width = Dimensions.get('window').width;
const heigth = Dimensions.get('window').height;

let top = 10;
Platform.OS === 'ios' && (top = 40);



export default function LoopComponent({ step, setStep, trainingData, displayModal, setDisplayModal, displayRestartModal, setDisplayRestartModal }) {

    const video = useRef(null);
    const [status, setStatus] = useState({});
    const [runningTime, setRunningTime] = useState(true);

    return (
        <View style={styles.container}>

            <View style={[styles.topBar]}>
                <View style={styles.ex_nameContainer}>
                    <Text style={styles.ex_nameText}>{trainingData.exercice_name.toUpperCase()}</Text>
                </View>
                <View style={styles.countDownContainer}>
                    <CountdownCircleTimer
                        isPlaying={runningTime}
                        duration={trainingData.duration}
                        colors={['black']}
                        colorsTime={[7]}
                        strokeWidth={0}
                        onComplete={() => setStep(step + 1)}
                    >
                        {({ remainingTime }) => <Text style={styles.countDown}>{remainingTime}</Text>}
                    </CountdownCircleTimer>

                </View>
            </View>

            <View style={styles.videoContainer}>
                <Video
                    ref={video}
                    style={styles.video}
                    source={{
                        uri: trainingData.video,
                    }}
                    useNativeControls={false}
                    resizeMode="cover"
                    shouldPlay
                    isMuted
                    isLooping={true}
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
            <GradientBar/>
            </View>

            <InteractionsBar displayRestartModal={displayRestartModal} setDisplayRestartModal={setDisplayRestartModal} setDisplayModal={setDisplayModal} status={status} video={video} runningTime={runningTime} setRunningTime={setRunningTime}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    video: {
        flex: 1
    },
    ex_nameContainer: {
        height: 25,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF80',
        paddingHorizontal: 15
    },
    ex_nameText: {
        color: '#212121',
        fontSize: 16,
        fontWeight: '600'
    },
    countDownContainer: {
        height: 104,
        width: 104,
        backgroundColor: "#00000084",
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    greatCountDownContainer: {
        backgroundColor: "#00000099",
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        top: heigth/2 -125,
        left: width/2 - 125,
        height: 250,
        width: 250,
        position: 'absolute',
    },
    topBar: {
        flexDirection: 'row',
        position: 'absolute',
        zIndex: 99,
        top: top,
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 10
    },
    countDown: {
        fontSize: 50,
        fontWeight: 'bold',
        color: '#2FFFB2',
    },
    greatCountDown: {
        fontWeight: 'bold',
        color: '#2FFFB2',
        fontSize: 96
    },
    videoContainer: {
        flex:1,
        position: 'relative'
    }
});
