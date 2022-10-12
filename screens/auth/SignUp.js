import { View, StyleSheet, Text, TouchableOpacity, KeyboardAvoidingView, StatusBar } from 'react-native';
import GoogleAuthButton from '../../components/auth/GoogleAuthButton';
import OrLine from '../../components/auth/OrLine';
import BigPowr from '../../components/common/BigPowr';
import InputContainer from '../../components/auth/InputContainer';
import AuthButton from '../../components/auth/AuthButton';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function SignUp({ navigation }) {

    const insets = useSafeAreaInsets();

    const [username, setUsername] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [c_password, setC_password] = useState(null);


    return(
        <KeyboardAvoidingView behavior='height' style={styles.kav}>
        <View style={styles.main}>
        <StatusBar style="auto"/>

            <BigPowr/>
            <Text style={[styles.text, {marginTop: 28, marginBottom: 20}]}>Bonjour ! L'inscription commence. ⚽</Text>
         
            <InputContainer value={username} setValue={setUsername} text={"Prénom"} type={"text"} required={true}/>
            <InputContainer value={email} setValue={setEmail} text={"Email"} type={"email"} required={true}/>
            <InputContainer value={password} setValue={setPassword} text={"Mot de passe"} type={"password"} secureTextEntry={true} required={true}/>
            <InputContainer value={c_password} setValue={setC_password} text={"Confirmation du mot de passe"} type={"password"} secureTextEntry={true} required={true}/>

            <AuthButton text={"Inscription"} email={email} password={password} username={username}/>

            <OrLine/>

            <GoogleAuthButton/>

            <View style={[styles.signUp, {marginBottom: insets.bottom}]}>
                    <Text style={styles.changeAuthText}>Tu as déjà un compte ?</Text>
                    <TouchableOpacity
                      onPress={()=> navigation.navigate('Login')}
                    >
                        <Text style={styles.signUpButtonText}>Connecte-toi</Text>
                    </TouchableOpacity>
                </View>

        </View>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        //justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#FDFDFD",
        
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
        color: '#1E232C',
        width: "85%", 
        fontSize: 28
    },
    changeAuthButton: {
        marginTop: 37
    },
    changeAuthText: {
        fontSize: 15,
        color: '#1E232C'
    },
    signUpButtonText: {
        fontSize: 15,
        color: '#35C2C1',
        fontWeight: 'bold',
        paddingLeft: 10
    },
    signUp: {
        flexDirection: 'row',
        width: '85%',
        justifyContent: 'center',
        justifySelf: 'flex-end',
        position: "absolute",
        bottom: 0
    }
})

