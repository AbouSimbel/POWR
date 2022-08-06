import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import googleIcon from '../../assets/images/googleIcon.png';

export default function GoogleAuthButton() {
    return(
        <TouchableOpacity
            style={styles.button}
            >
            <Image resizeMode='contain' style={styles.googleIcon} source={googleIcon}/>
            <Text style={styles.text}>Connexion avec mon compte Google</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: "#F6F6F6",
        height: 50,
        width: '80%',
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        marginTop: 16
    },
    googleIcon: {
        height: 30
    },
    text: {
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        flex:1,
        color: "#444444"
    }
})