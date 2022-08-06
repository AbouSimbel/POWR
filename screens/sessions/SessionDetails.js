import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/firebase-config";


export default function SessionsDetails({ navigation }) {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    return(
        <View style={styles.main}>
            <Text>SESSIONS DETAILS</Text>
            <TouchableOpacity
                onPress={()=> navigation.navigate('Session', { screen: 'Session'})}
                style={styles.gotoButton}
                >
                <Text>COMMENCER UNE SEANCE</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    gotoButton: {
        marginTop: 30,
        backgroundColor: '#2FFFB2'
    }
});