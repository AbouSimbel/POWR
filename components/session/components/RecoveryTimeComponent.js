import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import InteractionsBar from '../components/InteractionsBar';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { useState } from 'react';
import LeaveModal from '../../common/LeaveModal'
import RestartModal from '../../common/RestartModal';

export default function RestComponent({ step, setStep, trainingData, displayRestartModal, displayModal, setDisplayModal, setDisplayRestartModal }) {

    const [runningTime, setRunningTime] = useState(true);

    return(
        <View style={styles.mainContainer}>


                <View style={styles.titleContainer}><Text style={styles.title}>RESISTANCE BAND DRILL</Text></View>

                <View style={styles.adContainer}>
                    <Text>ADD CONTAINER</Text>
                </View>

                <View style={styles.countDownContainer}>
                    <View style={styles.countDownTextContainer}>
                        <Text style={{color: 'white', fontSize: 30, fontWeight: 'bold'}}>RECUPERATION</Text>
                        <Text style={{color: 'white', fontSize: 10}}>NE PAS S'ASSOIR PENDANT LE TEMPS DE RECUPERATION</Text>
                    </View>
                    <View style={{padding: 7, alignItems: 'center', justifyContent:'center', borderRadius: 10, height: 100, width: 100}}>
                        <CountdownCircleTimer
                            isPlaying={runningTime}
                            duration={trainingData.duration}
                            colors={['black']}
                            colorsTime={[7]}
                            strokeWidth={0}
                            onComplete={() => setStep(step+1)}
                        >
                        {({ remainingTime }) => 
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 80}}>
                            {remainingTime}
                        </Text>
                        }
                    </CountdownCircleTimer>
                        </View>
                </View>
                   <InteractionsBar runningTime={runningTime} setRunningTime={setRunningTime} displayRestartModal={displayRestartModal} setDisplayRestartModal={setDisplayRestartModal} setDisplayModal={setDisplayModal}/>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        backgroundColor: '#242424',
    },
    adContainer: {
       flex:1
    },
    countDownContainer: {
       flexDirection: 'row',
       width: '100%',
       paddingHorizontal: 10
    },
    titleContainer: {
        height: 25,
        backgroundColor: "#FFFFFF65",
        position: 'absolute',
        top: 40,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        borderRadius: 20
    },
    countDownTextContainer: {
        flex:1,
        justifyContent: 'center'
    },
    countDown: {
        
    }

});
