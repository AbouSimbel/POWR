import { Modal, View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function LeaveModal({ displayLeaveModal, setDisplayLeaveModal }) {

    const navigation = useNavigation();

    const handleLeaveSession = async() => {
            try {
                await AsyncStorage.removeItem('sessionData');
            }
            catch(exception) {
                return false;
            }
            setDisplayModal(false);
            navigation.navigate('Sessions');
        }
    
    return(
        <Modal
            style={styles.modal}
            visible={displayLeaveModal}
            transparent
          >
            <View style={styles.centeredView}>
                <View style={[styles.container, {blurRadius: 9, backgroundColor: "white", width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center'}]}>
                    <View style={[styles.container, {backgroundColor: "black", width: '90%', height: 300, padding: 20}]}>
                                <Text style={styles.title}>QUITTER LA SEANCE</Text>
                                <Text style={styles.text}>
                                    ES-TU CERTAIN DE VOULOIR QUITTER LA SEANCE ? 
                                    TA PROGRESSION NE SERA PAS SAUVEGARDÉE
                                </Text>

                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                    style={styles.cancelButton}
                                    onPress={() => setDisplayModal(false)}
                                    >
                                    <Text style={styles.cancelText}>ANNULER</Text>
                                </TouchableOpacity>
                                
                                <TouchableOpacity
                                    onPress={handleLeaveSession}
                                     style={styles.leaveButton}
                                    >
                                    <Text style={styles.leaveText}>QUITTER</Text>
                                </TouchableOpacity>
                            </View>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    centeredView:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        alignItems: 'center',
        borderRadius: 10,
        height: 300,
        justifyContent: 'space-between'
    },
    title : {
        color: 'white',
        fontSize: 20,
        fontWeight: '600'
    },
    text: {
        color: 'white',
        fontSize: 14,
        fontWeight: '500'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent:'space-around',
        width: '100%'
    },
    cancelButton: {
        height: 35,
        borderRadius: 45,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    cancelText: {
        color: 'red',
        fontSize: 16,
        fontWeight: '500'
    },
    leaveText: {
        fontSize: 14,
        fontWeight: '600'
    },
    leaveButton: {
        height: 35,
        borderRadius: 45,
        backgroundColor: '#2FFFB2',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 20
    }
});
