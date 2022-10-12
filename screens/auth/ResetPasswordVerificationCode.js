import { View, Text, TouchableOpacity, TextInput, StyleSheet, KeyboardAvoidingView, StatusBar, SafeAreaView, Image } from 'react-native';
import leftChevron from '../../assets/icons/left-chevron-black.png';
import InputContainer from '../../components/auth/InputContainer';
import { useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function ResetPasswordVerificationCode({ navigation }) {

    const [email, setEmail] = useState(null);
    const insets = useSafeAreaInsets();

    return(
        <KeyboardAvoidingView style={styles.kav}>
            <SafeAreaView style={styles.main}>
            <StatusBar style="auto"/>

                <View style={{width: '85%', marginTop: 12}}>
                <TouchableOpacity
                onPress={()=> navigation.navigate('Login')}
                style={styles.backButton}
                >
                    <Image source={leftChevron}/>
                </TouchableOpacity>
                </View>



                <Text style={styles.text}>Mot de passe oublié ?</Text>
                <Text style={styles.text2}>Pas d’inquiétude ! Indique nous ton email et tu recevras un code de réinitialisation.</Text>

                <InputContainer value={email} setValue={setEmail} text={"Entre ton email"} type={"text"} required={true}/>

                <TouchableOpacity
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Envoyer</Text>
                </TouchableOpacity>
            </SafeAreaView>

            

            <View style={[styles.signIn, {marginBottom: insets.bottom}]}>
                <Text>Tu te souviens de ton mot de passe ?</Text>
                <TouchableOpacity
                    style={{paddingVertical: 10}}
                    onPress={()=> navigation.navigate('Login')}
                >
                    <Text style={styles.signInButtonText}>Connecte-toi</Text>
                </TouchableOpacity>
            </View>

        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    kav: {
        height: '100%',
        width: '100%',
        backgroundColor: 'white'
    },
    main: {
        height: '100%',
        width: '100%',
        alignItems: 'center',
    },
    backButton: {
        width: 41,
        height: 41,
        borderRadius: 12,
        borderColor: "#E8ECF4",
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 15,
        alignSelf: 'flex-start'
    },
    text: {
        fontSize: 28,
        fontWeight: 'bold',
        width: '85%',
        marginTop: 18
    },
    text2: {
        color: '#8391A1',
        marginTop: 10,
        width: '85%', 
        marginBottom: 22
    },
    button: {
        width: '85%',
        backgroundColor: '#1E232C',
        alignItems: 'center',
        justifyContent: 'center',
        height: 56,
        borderRadius: 8,
        marginTop: 38,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500'
    },
    signInButtonText: {
        fontSize: 15,
        color: '#35C2C1',
        fontWeight: 'bold',
        paddingLeft: 10
    },
    signIn: {
        //flexDirection: 'row',
        width: '85%',
        justifyContent: 'center',
        justifySelf: 'flex-end',
        position: "absolute",
        bottom: 0,
        alignSelf: 'center',
        alignItems: 'center',
    }
});