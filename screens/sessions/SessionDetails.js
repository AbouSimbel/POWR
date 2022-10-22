import { View, Text, Image, ScrollView, StyleSheet, ImageBackground, TouchableOpacity, StatusBar } from 'react-native';
import backIcon from '../../assets/icons/back.png';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function SessionDetails({ route }) {

    const data = route.params.session

    const insets = useSafeAreaInsets();
    const navigation = useNavigation();


    const handleSessionSelection = async () => {
        try {
            const strData = JSON.stringify(data);
            await AsyncStorage.setItem('sessionData', strData);
            navigation.navigate('Session', {name : 'SessionMain'});
          } catch(error) {
            Alert(error);
          }  
    } 

    // A tranformer en data
    


    console.log("******************************************************************")
    console.log("******************************************************************")
    console.log("******************************************************************")
    console.log("******************************************************************")
    console.log("******************************************************************")
    console.log("******************************************************************")
    console.log("******************************************************************")
    console.log("SESSION *****************************************************************")
    console.log(data.description)




    
    
    
    // {
    //     title: "Over the balls",
    //     picture: "https://firebasestorage.googleapis.com/v0/b/powr-f34aa.appspot.com/o/FREE_SESSIONS%2FTECHNIC%2FRESISTANCE_BAND_DRILL%2FPICTURE%2Fovertheball.jpeg?alt=media&token=c8a05dce-cc80-44d6-bf30-d088d21a4f03",
    //     duration: 30,
    //     description: {
    //         text: "Cette séance composée de 3 exercices te permettra de travailler tes passements de jambes et tes touches de balle.",
    //         atHome: true,
    //         gain: ["+ dribble", "+ conduite de balle"]
    //     },
    //     equipments: [{
    //         name: 'Ballon',
    //         picture: "https://firebasestorage.googleapis.com/v0/b/powr-f34aa.appspot.com/o/EQUIPMENTS%2FBALL%2Fball.png?alt=media&token=9ac6cbbd-39e8-441a-b501-57f1c0b0d2aa",
    //         optional: false
    //     }, {
    //         name: 'Petite bande de resistance',
    //         picture:"https://firebasestorage.googleapis.com/v0/b/powr-f34aa.appspot.com/o/EQUIPMENTS%2FRESISTANCE_BANDS%2Fresistance-bands.jpeg?alt=media&token=0432bb8a-5aec-43bb-9035-052848a534ea",
    //         optional: true
    //     }
    //     ],
    //     ex_list: [{
    //         name: "Over",
    //         picture: "https://firebasestorage.googleapis.com/v0/b/powr-f34aa.appspot.com/o/EXERCICES_LIST%2FTEST%2Fex_list_test.png?alt=media&token=62f96d53-9ab8-42e6-aa77-4050467732f7",
    //         duration: 30,
    //         series: 3
    //     }, {
    //         name: "Across",
    //         picture: "https://firebasestorage.googleapis.com/v0/b/powr-f34aa.appspot.com/o/EXERCICES_LIST%2FTEST%2Fex_list_test.png?alt=media&token=62f96d53-9ab8-42e6-aa77-4050467732f7",
    //         duration: 30,
    //         series: 3
    //     }, {
    //         name: "Inside",
    //         picture: "https://firebasestorage.googleapis.com/v0/b/powr-f34aa.appspot.com/o/EXERCICES_LIST%2FTEST%2Fex_list_test.png?alt=media&token=62f96d53-9ab8-42e6-aa77-4050467732f7",
    //         duration: 30,
    //         series: 3
    //     }
    //     ]
    // };

    StatusBar.setBarStyle('light-content', true);


    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>

            <TouchableOpacity
            style={{height: 30, width: 30, backgroundColor: "#00000060", position: 'absolute', marginTop: 2, top: insets.top, zIndex: 9, borderRadius: 40, left: 20, justifyContent: 'center', alignItems: 'center'}}
            onPress={() => navigation.navigate('Les séances')}
            >
                <Image source={backIcon} resizeMode='contain' style={{alignItems: 'center', justifyContent: 'center', height: 20}}/>
            </TouchableOpacity>

            <StatusBar translucent backgroundColor="transparent" />

            <ScrollView style={styles.mainContainer}>

                <View style={styles.top}>
                    <ImageBackground style={{ height: 216, width: '100%' }} imageStyle={{}} source={{ uri: data.picture }}>
                        <View style={{flex: 1, backgroundColor: "#00000050"}}>
                        <Text style={{ position: 'absolute', bottom: 20, left: 22, color: 'white', fontSize: 28, fontWeight: '700' }}>{data.title}</Text>
                        </View>
                    </ImageBackground>
                </View>

                <View style={styles.descriptionContainer}>

                    <Text style={{ fontSize: 24, fontWeight: '700', marginBottom: 16 }}>Description</Text>

                    <View style={{ marginBottom: 15 }}>

                        <Text><Text style={{ fontWeight: '600' }}>Temps d'entraînement : </Text>{data.session_duration} minutes</Text>

                    </View>

                    <Text style={{ fontSize: 12 }}>{data.description.text}</Text>
                    {data.description.atHome && <Text style={{ fontSize: 12 }}>Réalisable à la maison.</Text> }

                    <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                        {data.description.focus.map((gain, index) => {
                            return (
                                <View key={index} style={{height: 20, justifyContent: 'center', backgroundColor: "blue", borderRadius: 10, marginRight: 7, paddingHorizontal: 10}}>
                                    <Text style={{ fontSize: 12, fontWeight: '700', color: "white" }} key={index}>{gain}</Text>
                                </View>
                            )
                        })}
                    </View>

                    <View style={{ flexDirection: 'column', marginVertical: 16 }}>

                        <Text style={{ fontWeight: '600', marginBottom: 10 }}>Equipements : </Text>

                        {data.equipments.map((equipment, index) => {
                            return (
                                <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 5, flexWrap: 'wrap' }}>
                                    <Image imageStyle={{ borderRadius: 5 }} style={{ width: 30, height: 30, marginRight: 10, borderRadius: 5 }} source={{ uri: equipment.picture }} />
                                    <Text>{equipment.name}</Text>{equipment.optional ? <Text style={{ color: 'grey'}}> - facultatif</Text> : null}
                                </View>
                            )
                        })}
                    </View>
                </View>

                <View style={{ borderBottomColor: '#00000030', borderBottomWidth: 1, height: 0 }} />

                <View style={styles.exListContainer}>
                    <Text style={{ fontWeight: '800', marginBottom: 10 }}>Liste des exercices :</Text>

                    {data.ex_list.map((ex, index) => {
                        return (
                            <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ paddingHorizontal: 20, paddingVertical: 15 }}>
                                    <Image source={{ uri: ex.picture }} style={{ height: 40, width: 40 }} />
                                </View>

                                <View>
                                    <Text style={{ fontWeight: '700' }}>{ex.name}</Text>
                                    <Text style={{ fontSize: 10 }}>{ex.duration} secondes</Text>
                                </View>

                                {/* <View style={{ marginLeft: 'auto', paddingHorizontal: 15 }}>
                                    <Text style={{ fontSize: 18, fontWeight: '600', color: "#a1a1a1" }}>x {ex.series}</Text>
                                </View> */}
                            </View>
                        )
                    })}
                </View>

            </ScrollView>
            <View style={{marginBottom: insets.bottom, alignItems: 'center', paddingVertical: 20, backgroundColor:'#FFFFFF00'}}>
                <TouchableOpacity
                    onPress={handleSessionSelection}
                    style={{height: 45, width: '60%', backgroundColor: "#18C07A", alignItems: 'center', justifyContent: 'center', borderRadius: 45}}
                >
                    <Text style={{fontSize: 18, color: 'white', fontWeight: '700'}}>Commencer</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
    },
    descriptionContainer: {
        width: '90%',
        alignSelf: 'center',
        paddingVertical: 16
    },
    exListContainer: {
        paddingVertical: 16,
        width: '90%',
        alignSelf: 'center'
    }
});
