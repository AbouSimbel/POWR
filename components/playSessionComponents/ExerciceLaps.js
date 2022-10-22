import { useCallback, useState } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native';
import check from '../../assets/icons/check.png';
import nocheck from '../../assets/icons/nocheck.png';
import close from '../../assets/icons/close.png';
import restart from '../../assets/icons/restart.png';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';



export default function ExerciceLaps({ data,  setStep, step, displayLeaveModal, setDisplayLeaveModal, setDisplayRestartModal  }) {

    const [currentLap, setCurrentLap] = useState(1);
    const [restTime, setRestTime] = useState(false);

    const lapsArray = Array.from(Array(data.repetitions).keys());

    if(currentLap > data.repetitions)
        setStep(step+1)
    

    return(
        <View style={styles.mainContainer}>
            <Text style={styles.title}>{data.ex_name}</Text>
            <View style={styles.lapsCounter}>
                {lapsArray.map((lap, index) => {
                    return(
                            <Image style={styles.checkIcon} key={index} source={currentLap - 1 > index ? check : nocheck}/>
                    )
                })}
            </View>

            <View style={styles.body}>


               {!restTime ? 
               <Image style={{flex: 1, height: '100%', width: '100%'}} source={{ uri:data.picture }} resizeMode='contain'/> 
               :
               <View style={{alignContent: 'center', alignItems: 'center', justifyContent: 'center', flex: 1, width: '100%', backgroundColor: 'grey'}}>
                <Text style={{fontSize: 36, fontWeight: 'bold'}}>PUBLICITE</Text>



               </View>
}



            </View>

            {!restTime ? 
            
            <View style={styles.bottom}>
            <TouchableOpacity style={styles.finishLapButton}
                onPress={() => setRestTime(true)}
            >
                <Text style={styles.buttonText}>Tour {currentLap} terminé !</Text>

            </TouchableOpacity>

            <Text style={{padding: 12, fontSize: 12, fontWeight: '500', width: '85%', textAlign: 'center', marginBottom: 10, color: '#414141'}}>A toi de jouer ! Effectue ton tour et appuie sur le bouton lorsque tu es revenu à ton point de départ !</Text>


            <TouchableOpacity
                style={styles.showVideoButton}
            >
                <Text style={{color: "#18C07A", fontWeight: '500'}}>Revoir la video</Text>
            </TouchableOpacity>

        </View>
        :
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>

                <Text style={{fontSize: 22, fontWeight: 'bold', marginVertical: 7}}>Récuperation </Text>

            <View style={{width: '80%', alignItems: 'center', justifyContent: 'center', height: 40, width: 50, marginBottom: 10}}>
                <CountdownCircleTimer
                            key={step}
                            style={{height: 40, width: 40, backgroundColor: 'red'}}
                            isPlaying
                            duration={data.rest_time}
                            colors={['black']}
                            strokeWidth={0}
                            onComplete={() => {
                                setRestTime(false);
                                currentLap > data.repetitions ?  setStep(step+1) :  setCurrentLap(currentLap + 1)
                            }}
                        >
                            {({ remainingTime }) =><Text style={styles.countDown}>{remainingTime}</Text>}
                </CountdownCircleTimer>  
            </View> 
        </View>
        }

       

            <View style={styles.buttonsContainer}>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setDisplayRestartModal(true)}>
                    <Image source={restart} style={{height: 24, width: 24}}/>
                </TouchableOpacity>

                <TouchableOpacity
                    disabled={true}
                    style={[styles.button, { opacity: 0}]}>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => setDisplayLeaveModal(true)}>
                    <Image source={close} style={{height: 20, width: 20}}/>
                </TouchableOpacity>

            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 20,
        width: '100%'
    },
    title: {
        fontSize: 26,
        fontWeight: 'bold',
        marginBottom: 20
    },
    lapsCounter: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 15
    },
    checkIcon: {
        marginHorizontal: 7
    },
    body: {
        flex: 1,
        width: '100%'
    },
    button: {
        height: 41,
        width: 41,
        borderWidth: 1,
        borderColor: '#e8ecf4',
        marginHorizontal: 18,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonsContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center'
    },
    bottom: {
        width: '100%',
        alignItems: 'center',
        paddingVertical: 11
    },
    finishLapButton: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        width: '80%',
        borderRadius: 12,
        backgroundColor: '#18C07A'
    },
    showVideoButton: {
        height: 30,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#18C07A',
        width: '80%',
        borderRadius: 7,
        marginBottom: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    countDown: {
        fontSize: 36,
        fontWeight: 'bold'
    }
});
