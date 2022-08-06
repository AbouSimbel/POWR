import { View, Text, StyleSheet} from 'react-native';
import CurrentChallenge from '../../components/challenges/CurrentChallenge';
import { useState, useEffect } from 'react';
import ConfirmChallengeModal from '../../components/challenges/confirmChallengeModal/ConfirmChallengeModal';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase-config';

export default function ChallengesMain() {

    const [displayModal, setDisplayModal] = useState(false);
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [selectedChallenge, setSelectedChallenge] = useState(0);

    useEffect(() => {
        const getData = async() => {
            const challCol = collection(db, "challenges");
            const homeSnapshot = await getDocs(challCol);
            const newData = [];
            homeSnapshot.forEach((doc) => {
                    const element = {id: doc.id, data: doc.data()}
                    newData.push(element);
                    console.log(data)
                });
                setData(newData);
                setIsLoading(false);
        };
        getData();
    }, []);

    return isLoading ? (
        <Text>Loading...</Text>
    ) : (
        <View style={styles.main}>

           <ConfirmChallengeModal displayModal={displayModal} setDisplayModal={setDisplayModal} data={data[selectedChallenge]}/>

            <CurrentChallenge data={data[0]} setDisplayModal={setDisplayModal} setSelectedChallenge={setSelectedChallenge}/>
            <View style={styles.line}/>
        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex:1,
        paddingHorizontal: 10
    },
    line: {
        width: '100%',
        borderBottomColor: "#CBCBCB",
        borderBottomWidth: 1,
        alignSelf: 'center',
        marginVertical: 15
    }
})