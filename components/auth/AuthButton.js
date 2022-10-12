import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { authentication } from "../../firebase/firebase-config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


export default function AuthButton({ text, email, password, username, sign }) {

    function handleAuth() {
        if(text === 'Connexion') {
            signInWithEmailAndPassword(authentication, email, password).then((response) => console.log(response)).catch((error) => console.log(error));
        } else if (text === 'Inscription') {
            createUserWithEmailAndPassword(authentication, email, password, username).then((response) => console.log("ok")).catch((error) => console.log(error));
        }
    }

    return(
        <TouchableOpacity
            onPress={handleAuth}
            style={styles.button}
            >
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: '85%',
        backgroundColor: '#1E232C',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
        borderRadius: 10,
        marginTop: 30,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500'
    }

})