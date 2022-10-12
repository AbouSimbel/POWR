import { View, StyleSheet, Text, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import GoogleAuthButton from '../../components/auth/GoogleAuthButton';
import InputContainer from '../../components/auth/InputContainer';
import AuthButton from '../../components/auth/AuthButton';
import BigPowr from '../../components/common/BigPowr';
import OrLine from '../../components/auth/OrLine';
import { useState } from 'react';
import { sign } from '../../middleWares/auth/authentication';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


export default function Login({ navigation }) {


    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const insets = useSafeAreaInsets();

    return(
            <KeyboardAvoidingView behavior='height' style={styles.kav}>


        <View style={styles.main}>

            {/* La StatusBar doit etre fond blanc et écritures noire */}
            <StatusBar style="auto"/>

            <BigPowr/>
          
            <Text style={[styles.text, {marginTop: 50}]}>Bonjour, </Text>
            <Text style={[styles.text, {marginBottom: 20}]}>content de te revoir ! ⚽</Text>



    
            <InputContainer value={email} setValue={setEmail} text={"Email"} type={"email"} required={true}/>
            <InputContainer value={password} setValue={setPassword} text={"Mot de passe"} type={"password"} secureTextEntry={true} required={true}/>

            <View style={{width: '85%', marginTop: 5}}>
            <TouchableOpacity 
                onPress={() => navigation.navigate("ResetPasswordVerificationCode")}
                style={{alignSelf: 'flex-end', paddingVertical: 12, alignItems: 'center'}}><Text style={{color: "#6A707C", fontWeight: '500'}}>Mot de passe oublié ?</Text></TouchableOpacity>
            </View>
            

            
            <AuthButton text={"Connexion"} sign={sign} email={email} password={password}/>

            <OrLine/>

            <GoogleAuthButton/>

                <View style={[styles.signUp, {marginBottom: insets.bottom}]}>
                    <Text style={styles.changeAuthText}>Tu n'as pas de compte ?</Text>
                    <TouchableOpacity
                      onPress={()=> navigation.navigate('SignUp')}
                    >
                        <Text style={styles.signUpButtonText}>Inscris-toi</Text>
                    </TouchableOpacity>
                </View>

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
        fontSize: 15,
        color: '#1E232C'
    },
    text: {
        fontWeight: 'bold',
        color: '#1E232C',
        width: "85%", 
        fontSize: 28
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
