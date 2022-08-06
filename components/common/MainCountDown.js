import { View, Text, StyleSheet } from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'


export default function MainCountDown({ duration, step, setStep }) {
    return(
        <View style={styles.container}>

            <Text style={styles.text}>SEANCE DANS</Text>

             <CountdownCircleTimer
                  isPlaying
                  duration={duration}
                  colors={['black']}
                  colorsTime={[7]}
                  strokeWidth={0}
                  onComplete={() => setStep(step+1)}
                >
                    {({ remainingTime }) => <Text style={styles.countDown}>{remainingTime}</Text>}
                </CountdownCircleTimer>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 30
    },
    countDown: {
        color: 'white',
        fontSize: 90,
        fontWeight: 'bold'
    }
})