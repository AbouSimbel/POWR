import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';


export default function InteractionsBar({ status, video, runningTime, setRunningTime, setDisplayModal, setDisplayRestartModal }) {

    const handlePause = () => {
        if(video && !status.didJustFinish) {
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()  
        } else {
            console.log('video deja terminée')
        };
        setRunningTime(!runningTime);
    }

    return(
        <View style={styles.container}>
            <View style={styles.blackGradient}>

            </View>
            <Text style={{color: 'white', fontSize: 14,fontWeight: '400', paddingLeft: 10, marginBottom: 10}}>INTERACTIONS</Text>
            <ScrollView horizontal style={styles.buttonsContainer}>

                <TouchableOpacity
                    style={[styles.button, !runningTime && styles.buttonPaused]}
                    onPress={handlePause}
                    >
                    <Text style={[styles.buttonText, !runningTime && styles.buttonPausedText]}>{runningTime ? "PAUSE" : "PLAY"}</Text>
                </TouchableOpacity>

                {video && <TouchableOpacity
                     style={[styles.button, status.isLooping && {opacity: 0.3}]}
                    >
                    <Text style={styles.buttonText}>VOIR LA VIDEO</Text>
                </TouchableOpacity>}

                <TouchableOpacity
                     style={styles.button}
                     onPress={()=>{ 
                        status?.isPlaying && handlePause();
                        setDisplayRestartModal(true)
                    }}>
                    <Text style={styles.buttonText}>RECOMMENCER LA SEANCE</Text>
                </TouchableOpacity>

                <TouchableOpacity
                     style={styles.button}
                     onPress={()=> {
                        status?.isPlaying && handlePause();
                        setDisplayModal(true)
                    }}>
                    <Text style={styles.buttonText}>QUITTER</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      paddingBottom: 30
    },
    buttonsContainer: {
        flexDirection: 'row'
    },
    buttonText: {
        color: '#2FFFB2',
        fontSize: 14,
        fontWeight: 'bold'
    },
    buttonPausedText: {
        color: '#212121'
    },
    button: {
        height: 35,
        borderColor: '#2FFFB2',
        borderWidth: 1,
        borderRadius: 35,
        marginLeft: 11,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30
    },
    buttonPaused: {
        backgroundColor: '#2FFFB2'
    }
});
