import { View, StyleSheet, Text, Platform } from "react-native";
import FilterBar from "../../components/sessions/FilterBar";
import { useState, useEffect } from 'react';
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";
import SessionsList from "../../components/sessions/SessionsList";
import ConfirmSessionModal from "../../components/sessions/confirmSessionModal/ConfirmSessionModal";
import * as NavigationBar from 'expo-navigation-bar';

export default function TrainingSessions({ navigation }) {

    const [filter, setFilter] = useState(null); 
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [displayModal, setDisplayModal] = useState({display:false, dataIndex: null});

    (Platform.OS === 'android' && displayModal) && NavigationBar.setBackgroundColorAsync("black");
    
    //Requete vers la collection seances libres.
    useEffect(() => {
        const getData = async() => {
            try {
                let sessionsCol = collection(db, "freesessions");
                filter && (sessionsCol = query(collection(db, "freesessions"), where('category', "==", filter)));
                const sessionsSnapshot = await getDocs(sessionsCol);
                const newData = [];
                sessionsSnapshot.forEach((doc) => { 
                    newData.push(doc.data())
                });
                   setData(newData);
                   setIsLoading(false);
            }catch(error) {
                console.log(error)
            }
        }
        getData();
    }, [filter]);

    return isLoading ? (
        <Text>Loading...</Text>
    ) : (
        <>
        { displayModal.display ? (
            <ConfirmSessionModal data={data[displayModal.dataIndex]} setDisplayModal={setDisplayModal}/>
           ) : (
        <View style={styles.main}>
            <FilterBar filter={filter} setFilter={setFilter}/>
            <SessionsList displayModal={displayModal} setDisplayModal={setDisplayModal} data={data}/>
        </View>
           )}
        </>
    )};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    gotoButton: {
        marginTop: 30,
        backgroundColor: '#2FFFB2'
    }
});
