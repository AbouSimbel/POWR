import { View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

export default function LeaveModal({ setDisplayLeaveModal }) {

    const navigation = useNavigation();

    //Fonction pour effacer le storage de la seance (sessionData)
    const removeSessionDataStorage = async () => {
        try {
          await AsyncStorage.removeItem('sessionData')
        } catch(e) {
          // remove error
        }
      }


    return(
        <View style={styles.blurredBackground}>
            <View style={{padding: 20, backgroundColor: 'white', width: '90%', borderRadius: 20, alignItems: 'center'}}>
           
                <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: "center"}}>Es-tu certain de vouloir quitter la séance ?</Text>

                <View style={{flexDirection: 'row', width: '100%', justifyContent:'space-around', marginTop: 40}}>
                    <TouchableOpacity
                        onPress={() => setDisplayLeaveModal(false)}
                        style={{height: 40, alignItems: 'center', justifyContent: 'center'}}
                    >
                        <Text style={{color: '#414141', fontSize: 16, fontWeight: 'bold'}}>Annuler</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress={() => {
                        removeSessionDataStorage();
                        navigation.navigate('Séances libres')}}
                    style={{height: 40, alignItems: 'center', justifyContent: 'center'}}
                    >
                        <Text style={{color: '#ff2f2f', fontSize: 16, fontWeight: 'bold'}}>Quitter</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    blurredBackground: {
        height: height,
        width: width,
        backgroundColor: '#00000099',
        position: 'absolute',
        zIndex: 999,
        alignItems: 'center',
        paddingTop: height*0.3
    }
});
