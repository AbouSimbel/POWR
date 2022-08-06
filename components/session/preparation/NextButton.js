import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import GradientBar from '../../common/GradientBar';


export default function NextButton({ preparationDataLength, prepaCounter, setPrepaCounter }) {

    const navigation = useNavigation();

    const handleNext = () => {
        if(preparationDataLength - 1 === prepaCounter) {
            navigation.navigate('SessionMain');
        } else {
            setPrepaCounter(prepaCounter++)
        }
    }


    return(
        <View style={{width: '100%'}}>
            
        <View style={styles.container}>

            <TouchableOpacity
                style={styles.button}
                onPress={handleNext}
                >
                <Text style={styles.buttonText}>SUIVANT</Text>
            </TouchableOpacity>
        </View>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingRight: 20,
        paddingBottom: 40
    },
    button: {

    },
    buttonText: {
        fontSize: 22,
        color: '#2FFFB2',
        fontWeight: '600'
    }
})