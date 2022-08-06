import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import starIcon from '../../../assets/icons/star.png';
import emptyStarIcon from '../../../assets/icons/empty-star.png';

export default function PowrRate({ rate, setRate }) {

    const stars =  ['1', '2', '3', '4', '5'];

    return(
        <View style={styles.container}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: '600', marginBottom: 23}}>Noter l'application</Text>
            <View style={styles.starsContainer}>
                {stars.map((star, index) => {
                    return(
                        <TouchableOpacity
                        style={styles.button}
                            onPress={() => setRate(index)}
                            key={index}
                            >
                            <Image resizeMode='contain' style={styles.star} source={rate >= index ? starIcon : emptyStarIcon}/>
                        </TouchableOpacity>
                    )
                })}
                
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 20
    },
    questionText: {
        fontSize: 14
    },
    starsContainer: {
        flexDirection: 'row'
    },
    button: {
        marginHorizontal: 2
    },
    star: {
        height: 20
    }
})