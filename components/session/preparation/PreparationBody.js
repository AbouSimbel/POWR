import { View, StyleSheet, Text } from 'react-native';
import GradientBar from '../../common/GradientBar';

export default function PreparationBody({ text, textPosition }) {

    return(
        <View style={styles.container}>
            <View style={styles.section}>
            {textPosition === 'top' && <View style={styles.textContainer}>
                    <Text style={styles.text}>{text.toUpperCase()}</Text>
                    <Text style={[styles.text, {marginTop: 20}]}>LORSQUE TU AS FINI, APPUIE SUR <Text style={{color: "#2FFFB2", fontWeight: 'bold'}}> SUIVANT</Text></Text>
                </View>}
            </View>

            <View style={styles.section}>
            {textPosition === 'bottom' && <View style={styles.textContainer}>
                    <Text style={styles.text}>{text.toUpperCase()}</Text>
                    <Text style={[styles.text, {marginTop: 20}]}>LORSQUE TU AS FINI, APPUIE SUR <Text style={{color: "#2FFFB2", fontWeight: 'bold'}}> SUIVANT</Text></Text>
                </View>}
            </View>
            <GradientBar/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    section: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textContainer: {
        width: '90%',
        backgroundColor: '#00000099',
        paddingHorizontal: 24,
        paddingVertical: 20,
        borderRadius: 20
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        lineHeight: 22
    }
});
