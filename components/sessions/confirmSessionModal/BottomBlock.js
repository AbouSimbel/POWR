import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


export default function BottomBlock({ data, setDisplayModal }) {

    const navigation = useNavigation();

    const handleStartSession = async (value) => 
    {
        try {
          const strData = JSON.stringify(data);
          await AsyncStorage.setItem('sessionData', strData);
          setDisplayModal(false);
          navigation.navigate('Session', { screen: 'Preparation'});
        } catch (error) {
          Alert(error);
        }
      }

    return(
        <View style={styles.bottomSection}>
          
        <Text style={styles.bottomText}>MATERIEL REQUIS</Text>
        <ScrollView horizontal style={styles.equipmenstBlock}>
            { data.equipments.map((equipment, index) => {
                return(
                    <View key={index} style={styles.equipmentCard}>
                        <Image style={styles.equipmentImage} resizeMode='cover' source={{uri : equipment.picture}}/>
                        <Text style={styles.equipmentText}>{equipment.name.toUpperCase()}</Text>
                    </View>
                )
            })}
        </ScrollView>

        <TouchableOpacity
            onPress={handleStartSession}
            style={styles.startButton}
            >
            <Text style={styles.startText}>COMMENCER CETTE SEANCE</Text>
        </TouchableOpacity>
    </View>
    );
};

const styles = StyleSheet.create({
    bottomSection: {
        position: 'absolute',
        bottom: 0,
        padding: 10,
        zIndex: 2,
        width: '100%'
    },
    bottomText: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 10,
        marginLeft: 15
    },
    equipmenstBlock: {
        width: '100%',
        marginLeft: 15
    },
    equipmentCard: {
        width: 90,
        marginRight: 21
    },
    equipmentImage: {
        height: 90,
        width: 90,
        borderRadius: 10
    },
    equipmentText: {
      fontSize: 10,
      color: 'white',
      marginTop: 5,
      fontWeight: '500'
    },
    startButton: {
        height: 49,
        width: '90%',
        alignSelf: 'center',
        borderWidth: 1,
        borderColor: "#2FFFB2",
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        marginVertical: 20
    },
    startText: {
        color: '#2FFFB2',
        fontSize: 20,
        fontWeight: 'bold'
    },
})