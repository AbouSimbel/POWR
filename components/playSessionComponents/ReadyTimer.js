import { View, Text, StyleSheet} from 'react-native';
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';


export default function ReadyTimer({ data, step, setStep }) {
    return(
        <View style={styles.screenContainer}>
            <Text style={styles.text}>{data.text.toUpperCase()}</Text>

            <CountdownCircleTimer
                        isPlaying
                        duration={data.duration}
                        colors={['black']}
                        colorsTime={[7]}
                        strokeWidth={0}
                        onComplete={() => setStep(step + 1)}
                    >
                        {({ remainingTime }) => <View style={{justifyContent: 'center', height: 200, marginVertical: 30}}><Text style={styles.countDown}>{remainingTime}</Text></View>}
                    </CountdownCircleTimer>

        </View>
    )
};

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#18c07a',
        marginBottom: 5
    },
    countDown: {
        fontSize: 190,
        fontWeight: 'bold',
        textAlign: 'center',
        color: "#414141"    
    }
});
