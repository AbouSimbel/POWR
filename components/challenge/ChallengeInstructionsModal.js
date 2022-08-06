import { View, Text, Modal, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const { height, width } = Dimensions.get('window');

export default function ChallengeInstructionsModal({ displayModal, setDisplayModal }) {
    return(
        <Modal visible={displayModal} transparent>
            <View style={styles.modal}>
                <View style={styles.container}>

                    <View style={styles.instructionsList}>
                            <View style={styles.instructionNumber}>
                                <Text style={{fontSize: 16, fontWeight: '500'}}>1</Text>
                            </View>
                        <Text style={styles.instruction}>Installe ton téléphone sur un support ou demande à un ami de te filmer.</Text>
                            <View style={styles.instructionNumber}>
                                <Text style={{fontSize: 16, fontWeight: '500'}}>2</Text>
                            </View>   
                        <Text style={styles.instruction}>Lorsque tu es prêt, lance le challenge.</Text>
                        <Text style={styles.instructionBis}>Le challenge se lancera après un compte à rebours de 8 secondes, ça te laissera le temps de te positionner</Text>
                            <View style={styles.instructionNumber}>
                                <Text style={{fontSize: 16, fontWeight: '500'}}>3</Text>
                            </View>
                        <Text style={styles.instruction}>Effectue le challenge face à la camera</Text>
                        <Text style={styles.instructionBis}>L'enregistrement est programmé pour durer 10 secondes</Text>

                        <Text style={styles.nb}>N'hésite pas à utiliser les conseils et les options en bas de l'écran !</Text>
                    </View>


                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={()=> setDisplayModal(false)}
                        >
                        <Text style={{color: 'blue'}}>FERMER</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        height: height,
        width: width,
        backgroundColor: '#00000099'
    },
    container: {
        width: '90%',
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 20,
        paddingVertical: 10,
        alignItems: 'center'
    },
    closeButton: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 25,
        borderRadius: 10,
        height: 35,
        alignSelf:'center',
        marginTop: 30
    },
    instructionsList: {
        width: '100%' 
    },
    instruction: {
        marginTop: 7,
        width: '95%',
        alignSelf: 'center',
        textAlign: 'center'
    },
    instructionBis: {
        fontSize: 10,
        color: '#444444',
        alignSelf: 'center',
        textAlign: 'center'
    },
    instructionNumber: {
        height: 30,
        width: 30,
        borderColor: '#444444',
        borderWidth: 1,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        marginTop: 20
    },
    nb: {
        marginTop: 30,
        fontSize: 12,
        alignSelf: 'center',
        textAlign: 'center'
    }
});
