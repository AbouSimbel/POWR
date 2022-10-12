import { View, StyleSheet, Text, TouchableOpacity, ScrollView, StatusBar } from "react-native";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import NewSessions from "../../components/freeSessions/sessions/NewSessions";
import CategorySlider from "../../components/freeSessions/sessions/CategorySlider";


export default function SessionsHome({ navigation }) {

    StatusBar.setBarStyle('dark-content');

    const [data, setData] = useState([{category: "Technique", data:[]},{category: "Vitesse", data: []}, {category: "Renforcement musculaire", data:[]}, {category: "Endurance", data:[]}]);
    const [isLoading, setIsLoading] = useState(true);

    // Récuperation des seances et on les dispatch entre NewSessions et le reste. 5 séances par catégorie et le reste ce sera "voir tout".

    useEffect(() => {
        const getData = async() => {
            const fsCol = collection(db, "freesessions");
            const fsSnapshot = await getDocs(fsCol);
            const newData = [...data];
            fsSnapshot.forEach((doc) => { 
              
                if(doc.data().category === 'Technique') {     
                        newData[0].data.push(doc.data());
                    } else if (doc.data().category === 'Vitesse') {
                        newData[1].data.push(doc.data());
                    } else if (doc.data().category === 'Renforcement musculaire') {
                        newData[2].data.push(doc.data());
                    } else if (doc.data().category === 'Endurance') {
                        newData[3].data.push();
                    }
                }
                );
                setData(newData);
                setIsLoading(false);
        };
        getData();
    }, []);

    const newSessions = [data[0].data[0]];


    return isLoading ? (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Loading ...</Text>
        </View>

    ) : (
        <ScrollView style={styles.main}>

<StatusBar translucent backgroundColor="transparent" />
           <NewSessions newSessions={newSessions}/>
           <View style={{borderBottomColor: '#d9d9d9', borderBottomWidth: 1, width: '90%', alignSelf: 'center', marginVertical: 15}}/>

            <Text style={{fontSize: 16, fontWeight: 'bold', width: '90%', alignSelf: 'center', marginTop: 5, color: "#414141"}}>Les séances par catégories </Text>

            {data.map((catData, index) => {
                return(
                    <CategorySlider catData={catData} key={index}/>
                )
            })}

            <View style={{height: 100}}/>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingTop: 16,
        backgroundColor: 'white'
    },
    gotoButton: {
        marginTop: 30,
        backgroundColor: '#2FFFB2'
    }
});