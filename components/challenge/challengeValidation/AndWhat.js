import { View, TouchableOpacity, StyleSheet,Text, Alert, Share } from 'react-native';
import * as Sharing from 'expo-sharing';
import { useNavigation } from '@react-navigation/native';


export default function AndWhat({ url }) {

    const navigation = useNavigation();

    const handleShare = () => {
        Share.share({
          message: 'BAM: we\'re helping your business with awesome React Native apps www.google.fr',
          url: 'www.google.Fr',
          title: 'Wow, did you see that?',
          
        }, {
          // Android only:
          dialogTitle: 'Share BAM goodness',
          // iOS only:
        })
    }

  
    return(
        <View style={styles.container}>
           
                <TouchableOpacity
                    style={styles.button}
                    onPress={handleShare}
                    >
                <Text>Partager ma video !</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate('Root', { screen: "Accueil"})}
                    >
                    <Text>Terminer sans partager</Text>
                </TouchableOpacity>

        
        </View> 
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    button : {
        height: 45,
        width: '100%',
        paddingHorizontal: 40,
        borderColor: 'black',
        borderWidth: 1,
        alignContent: 'center',
        justifyContent: 'center',
        marginBottom: 30
    }
});
