import { View, StyleSheet, Text, TouchableOpacity, ScrollView, StatusBar, SafeAreaView } from "react-native";
import BigPowr from "../../components/common/BigPowr";
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase-config';
import HomeCarousel from "../../components/home/HomeCarousel";

const statusBarHeight = StatusBar.currentHeight;


export default function HomeMain({ navigation }) {

    const [data, setData] = useState([{category: "lives", title: "LES PROCHAINS LIVES COACHING", data:[]},{category: "challenge", title:"CHALLENGE DE LA SEMAINE", data: []}, {category: "fulltrainings", title: "PREPA PHYSIQUES COMPLETES", data:[]}, {category: "freesessions", title: "NOUVELLES SEANCES LIBRES", data:[]}]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getData = async() => {
            const homeCol = collection(db, "home");
            const homeSnapshot = await getDocs(homeCol);
            const newData = [...data];
            homeSnapshot.forEach((doc) => { 
                if(doc.id === 'challenge') {     
                        newData[1].data = doc.data();
                    } else if (doc.id === 'freesessions') {
                        newData[3].data =doc.data();
                    } else if (doc.id === 'fulltrainings') {
                        newData[2].data = doc.data();
                    } else if (doc.id === 'lives') {
                        newData[0].data = doc.data();
                    }
                }
                );
                setData(newData);
                setIsLoading(false);
        };
        getData();
    }, []);


    return isLoading ? (
        <Text>Loading...</Text>
    ) : (
        <SafeAreaView style={styles.safeView}>
            <BigPowr/>   
        <ScrollView style={styles.main}>

            {data.map((categoryData, index) => {
                return(
                    <HomeCarousel key={index} categoryData={categoryData}/> 
                )
            })}

            <View style={{height: 60}}/>

        </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        paddingLeft: 10
    },
    gotoButton: {
        marginTop: 30,
        backgroundColor: '#2FFFB2'
    },
    safeView: {
        paddingTop: statusBarHeight,
        flex: 1
    }
});