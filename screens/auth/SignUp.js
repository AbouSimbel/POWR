import { View, StyleSheet, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import GoogleAuthButton from '../../components/auth/GoogleAuthButton';
import OrLine from '../../components/auth/OrLine';
import BigPowr from '../../components/common/BigPowr';
import InputContainer from '../../components/auth/InputContainer';
import AuthButton from '../../components/auth/AuthButton';
import { useState } from 'react';

export default function SignUp({ navigation }) {

    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [c_password, setC_password] = useState(null);


    return(
        <KeyboardAvoidingView behavior='height' style={styles.kav}>
        <View style={styles.main}>
            <BigPowr/>
            <Text style={styles.text}>Découvre toute ta puissance !</Text>
            <GoogleAuthButton/>
            <OrLine/>
            <Text  style={styles.text2}>Inscription avec une adresse email. Assures-toi d'utiliser une adresse valide, un code de confirmation sera envoyé.</Text>

            <InputContainer value={username} setValue={setUsername} text={"Prénom"} type={"text"} required={true}/>
            <InputContainer value={email} setValue={setEmail} text={"Email"} type={"email"} required={true}/>
            <InputContainer value={password} setValue={setPassword} text={"Mot de passe"} type={"password"} secureTextEntry={true} required={true}/>
            <InputContainer value={c_password} setValue={setC_password} text={"Confirmation du mot de passe"} type={"password"} secureTextEntry={true} required={true}/>

            <AuthButton text={"INSCRIPTION"}/>

            <TouchableOpacity
                style={styles.changeAuthButton}
                onPress={()=> navigation.navigate('Login')}
            >
                <Text style={styles.changeAuthText}>J'AI DEJA UN COMPTE</Text> 
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
        backgroundColor: "#FDFDFD",
        paddingVertical: 10
    },
    kav: {
        flex: 1
    },
    text2: {
        width: '80%',
        fontSize: 12,
        fontWeight: '500',
        marginBottom: 5
    },
    text: {
        fontWeight: 'bold',
        marginTop:30,
        color: '#444444'
    },
    changeAuthButton: {
        marginTop: 37
    },
    changeAuthText: {
        fontWeight: 'bold',
        fontSize: 10,
        color: 'blue'
    }
})

