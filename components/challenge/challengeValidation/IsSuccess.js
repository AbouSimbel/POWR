import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as MediaLibrary from 'expo-media-library';


// J'ai reussi le challenge -> ça incremente done puis ça enregistre ma video dans ma gallerie et on passe a l'écran "partager ou terminer"



export default function IsSuccess({ setIsSuccess, isSuccess, done, challengeId, setRecordedVideo, recordedVideo }) {

    const navigation = useNavigation();


    const handleSuccess = async (value) => {
        if(value === true) {
        //Créer une fonction pour incrémenter le nombre de challenge réussi dans la base de données.
            console.log('valeur done a incrementer');
    
        try {
          Alert.alert("valeur a incrementer dans done")
         
        } catch(error) {
            console.log(error.message)
            Alert.alert(JSON.stringify(error.message));
        }
    }
    // puis enregistrer la Video
    MediaLibrary.saveToLibraryAsync(recordedVideo);
    //puis passer andwhat  
    setIsSuccess(value); 
    }


 return(
    <View style={styles.container}>

        <Text style={{fontSize: 20, fontWeight: 'bold', marginVertical: 20}}>As-tu réussi le challenge ?</Text>

        <TouchableOpacity
            style={[styles.button, {backgroundColor: '#2FFFB230'}]}
            onPress={() => handleSuccess(true)}
            >
            <Text style={styles.buttonText}>Oui, j'ai réussi !</Text>
        </TouchableOpacity>

        <TouchableOpacity
             style={[styles.button, {backgroundColor: '#DE173830'}]}
            onPress={() => handleSuccess(false)}
            >
            <Text style={styles.buttonText}>Non, mais je conserve ma vidéo</Text>
        </TouchableOpacity>

        <TouchableOpacity
             style={[styles.button, {backgroundColor: '#DE173830'}]}
            onPress={() => setRecordedVideo(null)}
            >
            <Text style={styles.buttonText}>Je retente !</Text>
        </TouchableOpacity>

        <TouchableOpacity
             style={[styles.button, {backgroundColor: '#DE173830'}]}
            onPress={() => navigation.navigate('Root', { screen: "Accueil"})}
            >
            <Text style={styles.buttonText}>Je ressayerai une prochaine fois...</Text>
        </TouchableOpacity>

    </View>
 );
};

const styles = StyleSheet.create({
    container: {
        width: '90%',
        alignItems: 'center'
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
        width: '100%',
        marginBottom: 20,
        borderRadius: 10
    },
    buttonText: {
        fontSize: 16,
    }
})
