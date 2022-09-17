import { View, StyleSheet, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
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

            {/* La StatusBar doit etre fond blanc et écritures noire */}
            <StatusBar style="auto"/>

            <BigPowr/>
          
            <Text style={styles.text}>Bonjour, </Text>
            <Text style={styles.text}>content de te revoir ! ⚽</Text>



            

            <InputContainer value={email} setValue={setEmail} text={"Email"} type={"email"} required={true}/>
            <InputContainer value={password} setValue={setPassword} text={"Mot de passe"} type={"password"} secureTextEntry={true} required={true}/>

            
            <AuthButton text={"Connexion"} sign={sign} email={email} password={password}/>

            <OrLine/>

            <GoogleAuthButton/>


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
        color: '#1E232C',
        width: "85%", 
        fontSize: 28
    }
})
