import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Video } from 'expo-av';
import { useEffect, useRef, useState } from 'react';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import close from '../../assets/icons/close.png';
import restart from '../../assets/icons/restart.png';
import pause from '../../assets/icons/pause.png';
import play from '../../assets/icons/play.png';
import { useNavigation } from '@react-navigation/native';

export default function VideoExerciceExplanation({ data, setStep, step, displayLeaveModal, setDisplayLeaveModal, setDisplayRestartModal }) {

    const navigation = useNavigation();

    const [startExercice, setStartExercice] = useState(false);
    const [nextButtons, setNextButtons] = useState(false);

    const insets = useSafeAreaInsets();
    const video = useRef(null);

    const [status, setStatus] = useState({});
    const [isPlaying, setIsPlaying] = useState(true);

    return(
        <View style={[styles.screenContainer, { paddingBottom: insets.bottom }]}>

            <View style={styles.videoContainer}>
                    {startExercice ? <Video
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
                        //positionMillis={positionMillis}
                        isLooping={false}
                        onPlaybackStatusUpdate={status => {
                            status.didJustFinish && setNextButtons(true);
                            setStatus(() => status)}}
                    /> : 
                    <View style={{alignItems: 'center', justifyContent: 'center', padding: 10, flex:1, backgroundColor: '#e8e8e8' }}>
                        <Text style={{width: '90%', textAlign: 'center', fontWeight: '600', marginBottom: 30, color: '#414141'}}>
                            Observe attentivement l'exercice. Tu devras le reproduire lorsque nous le t'indiquerons...
                        </Text>
                    <TouchableOpacity
                        style={{height: 41, paddingHorizontal:15, backgroundColor: "#18C07A", alignItems: 'center', justifyContent: 'center', borderRadius: 7, width: '80%'}}
                        onPress={()=> setStartExercice(true)}
                        >
                        <Text style={{fontWeight: '600', color: 'white', fontSize: 16}}>Voir la vidéo</Text>
                    </TouchableOpacity>
            </View>
                }

            </View>

            <View style={{ alignItems: 'center', justifyContent: 'space-around' }}>

                <Text style={styles.text}>{data.exercice_name}</Text>

                <View style={{ height: 90, justifyContent: 'center', width: '100%', alignItems: 'center' }}>


                  {nextButtons ? <View style={{flexDirection: 'row', flex: 1, width: '90%', justifyContent: 'space-around', alignItems: 'center', marginBottom: 20, borderBottomColor: "#E8ECF4", borderBottomWidth: 1}}>

                        <TouchableOpacity style={{height: 41, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#E8ECF4', width: '40%', borderRadius: 12}}
                            onPress={()=> {
                                video.current.replayAsync()
                              
                        }}
                        >
                            
                            <Text style={{fontWeight: '600', fontSize: 14 }}>Revoir la vidéo</Text>
                        </TouchableOpacity>



                        <TouchableOpacity style={{height: 41, alignItems: 'center', justifyContent: 'center', backgroundColor: "#18C07A", width: '40%', borderRadius: 12}}
                            onPress={()=> setStep(step+1)}
                        >
                            <Text style={{fontWeight: 'bold', fontSize: 16, color: 'white'}}>Je suis prêt !</Text>
                        </TouchableOpacity>
                    </View> : 
                    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingHorizontal: 15}}>

                       {startExercice && <Text style={{fontSize: 14, fontWeight: '600'}}>Visionnage de l'exercice en cours...</Text>}
                    </View>
                    }
               

                </View>

                <View style={styles.buttonsContainer}>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            data.video && video.current.pauseAsync();
                            setIsPlaying(false);
                            setDisplayRestartModal(true)}}
                    >
                        <Image source={restart} style={{height: 24, width: 24}}/>

                    </TouchableOpacity>

                    <TouchableOpacity
                    disabled={!startExercice ? true : false}
                        style={[styles.button, {opacity: !startExercice ? 0.2 : 1}]}
                        onPress={() =>{
                            setStartExercice(true)
                            video && (status.isPlaying) ? video.current.pauseAsync() : video.current.playAsync();
                            setIsPlaying(!isPlaying);
                          }}
                    >
                         <Image source={status.isPlaying ? pause : play} style={{ height: 24, width: 24 }}/>

                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() =>{
                            video && video.current.pauseAsync();
                            setIsPlaying(false);
                            setDisplayLeaveModal(true);
                          }}
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