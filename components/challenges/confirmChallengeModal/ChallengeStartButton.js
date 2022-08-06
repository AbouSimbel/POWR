import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function ChallengeStartButton({ setDisplayModal, data }) {

    const navigation = useNavigation();

    const handleStartChallenge = async (value) => {
        try {
          const strData = JSON.stringify(data);
          await AsyncStorage.setItem('challengeData', strData);
          setDisplayModal(false);
          navigation.navigate('Challenge', {screen: 'ChallengeMain'})
        } catch(error) {
          Alert(error);
        }
    }



    return(
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={handleStartChallenge}
                    
                >
                <Text>JE TENTE LE CHALLENGE !</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
        flexDirection:'row',
        alignSelf: 'center',
        justifyContent: 'center',
        marginBottom: 20
    },
    button: {
        
        borderColor: 'black',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        borderRadius: 100,
        paddingHorizontal: 15,
        height:45
    }
});
