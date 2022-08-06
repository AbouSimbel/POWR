import { View, StyleSheet, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import GoogleAuthButton from '../../components/auth/GoogleAuthButton';
import InputContainer from '../../components/auth/InputContainer';
import AuthButton from '../../components/auth/AuthButton';
import BigPowr from '../../components/common/BigPowr';
import OrLine from '../../components/auth/OrLine';
import { useState } from 'react';
import { sign } from '../../middleWares/auth/authentication';


export default function Login({ navigation }) {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    return(
            <KeyboardAvoidingView behavior='height' style={styles.kav}>
        <View style={styles.main}>
            <BigPowr/>
          
            <Text style={styles.text}>Optimise ta puissance !</Text>

            <GoogleAuthButton/>

            <OrLine/>

            <Text style={styles.text2}>Connexion avec email</Text>

            <InputContainer value={email} setValue={setEmail} text={"Email"} type={"email"} required={true}/>
            <InputContainer value={password} setValue={setPassword} text={"Mot de passe"} type={"password"} secureTextEntry={true} required={true}/>

            <AuthButton text={"CONNEXION"} sign={sign} email={email} password={password}/>

            <TouchableOpacity
                style={styles.changeAuthButton}
                onPress={()=> navigation.navigate('SignUp')}
            >
                <Text style={styles.changeAuthText}>JE N'AI PAS ENCORE DE COMPTE</Text> 
            </TouchableOpacity>
        </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FDFDFD"
    },
    text2: {
        width: '80%',
        fontSize: 12,
        fontWeight: '500',
        marginBottom: 5
    },
    kav: {
        flex: 1
    },
    changeAuthButton: {
        marginTop: 37
    },
    changeAuthText: {
        fontWeight: 'bold',
        fontSize: 10,
        color: 'blue'
    },
    text: {
        fontWeight: 'bold',
        marginTop:30,
        color: '#444444'
    }
})
