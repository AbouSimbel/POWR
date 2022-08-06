import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { authentication } from "../../firebase/firebase-config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

export default function AuthButton({ text, email, password, username, sign }) {


    function handleAuth() {
        if(text === 'CONNEXION') {
            signInWithEmailAndPassword(authentication, email, password).then((response) => console.log("")).catch((error) => console.log(error));
        } else if (text === 'INSCRIPTION') {
            createUserWithEmailAndPassword(authentication, email, password, username).then((response) => console.log("")).catch((error) => console.log(error));
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
        width: '65%',
        backgroundColor: '#2FFFB2',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderRadius: 10,
        marginTop: 42,
        shadowColor: "#000",
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 8,
    },
    buttonText: {
        color: '#444444',
        fontSize: 16,
        fontWeight: 'bold'
    }

})