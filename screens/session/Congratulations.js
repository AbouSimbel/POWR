import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import IsGoodSession from '../../components/session/congratulations/IsGoodSession';
import PowrRate from '../../components/session/congratulations/PowrRate';
import { useState } from 'react';
import TopText from '../../components/session/congratulations/TopText';

export default function Congratulations() {

    const navigation = useNavigation();
    const [isGoodSession, setIsGoodSession] = useState(null);
    const [rate, setRate] = useState(0);

    return(
        <View style={styles.main}>
            <TopText/>
            <IsGoodSession setIsGoodSession={setIsGoodSession}/>
            <PowrRate rate={rate} setRate={setRate}/>
            <TouchableOpacity
            style={styles.finishButton}
                onPress={() => navigation.navigate('Root',{ screen: 'Home'})}
                >
                <Text style={styles.finishText}>TERMINER SANS NOTER</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex:1,
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        backgroundColor: '#242424'
    },
    finishButton: {
        alignSelf: 'flex-end'
    },
    finishText: {
        color: '#F3F3F3',
        fontWeight: 'bold',
        marginRight: 10,
        color: "#2FFFB2"
    }
});
