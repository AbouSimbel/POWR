import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import coachIcon from '../../../assets/icons/coach.png';
import challengeIcon from '../../../assets/icons/challenge.png'

  export default function InteractionsBar() {

    const navigation = useNavigation();
  
    return(
        <View style={styles.container}>

                <View style={styles.subContainer}>
                    <TouchableOpacity
                        style={styles.interactionButton}
                        >
                        <Image source={challengeIcon} />
                    <Text style={styles.buttonText}>Le challenge</Text>
                    </TouchableOpacity>
                </View>
 
                <View style={styles.subContainer}>
                    <TouchableOpacity
                        style={styles.interactionButton}
                        >
                       <Image source={coachIcon} />
                    <Text style={styles.buttonText}>Conseils du coach</Text>
                    </TouchableOpacity>
                </View>
                
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#00000090',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 10,
        paddingVertical: 7,
        position: 'absolute',
        bottom: 0,
        zIndex: 1

    },
    buttonText: {
        color: '#444',
        fontSize: 10,
        fontWeight: '500',
        color: 'white',
        height: 20,
        lineHeight: 20
    },
    subContainer: {
        alignItems: 'center',
        width: 100
    },
    interactionButton: {
        width: '100%',
        alignItems: 'center'
    },
    exitButton: {
        position: 'absolute',
        top: 90,
        left: 10
    }
});
