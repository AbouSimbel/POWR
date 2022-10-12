import { View, TouchableOpacity, ScrollView, StyleSheet, Text, ImageBackground, Alert } from 'react-native';
import { selectSession } from '../../../middleWares/sessions';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function CategorySlider({ catData }) {

    const navigation = useNavigation();

    // Au clique sur la card, déclancher un fonction pour aller vers details de la séance. Cette fonction doit mettre la data de la seance en storage.
    const handleSessionSelection = async (session) => {
        try {
            const strData = JSON.stringify(session);
            await AsyncStorage.setItem('sessionData', strData);
            navigation.navigate('Session', {screen:'PlaySessionMain'});
          } catch(error) {
            Alert(error);
          }
           
    } 

    
    return (
        <View style={{ paddingLeft: '5%', marginTop: 24 }}>
            <View style={{ flexDirection: 'row', width: '95%', justifyContent: 'space-between' }}>
                <Text style={{ fontSize: 14, fontWeight: '600', color: "#414141" }}>{catData.category}</Text>
                <Text style={{ fontSize: 12, fontWeight: '600', color: '#18C07A' }}>Voir tout</Text>
            </View>

            <ScrollView horizontal style={{ marginTop: 10 }}
                showsHorizontalScrollIndicator={false}
            >

                {catData.data.map((session, index) => {
                    return (
                        <TouchableOpacity
                            onPress={handleSessionSelection(session)}
                            key={index}
                            style={{ backgroundColor: '#f8f8f8', height: 135, width: 220, marginRight: 17, borderRadius: 3, justifyContent: 'flex-end' }}
                        >
                            <ImageBackground imageStyle={{ borderRadius: 3 }} style={{ flex: 1, borderRadius: 5 }} source={{ uri: session.picture }} resizeMode='cover'>
                                <View style={{ position: 'absolute', bottom: 13, left: 10 }}>
                                    <Text style={{ fontSize: 14, color: 'white', fontWeight: '600', marginBottom: 5 }}>{session.title}</Text>
                                    <Text style={{ fontSize: 12, color: 'white', fontWeight: '500' }}>{session.session_duration} minutes</Text>
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>
                    )
                })}

            </ScrollView>


        </View>
    );
};

const styles = StyleSheet.create({

});
