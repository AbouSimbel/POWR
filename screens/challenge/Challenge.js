import { View, StyleSheet, Text, Alert } from 'react-native';
import CameraChallenge from '../../components/challenge/CameraChallenge';
import InteractionsBar from '../../components/challenge/InterationsBar/InteractionsBar';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ChallengeInstructionsModal from '../../components/challenge/ChallengeInstructionsModal';
import { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import ChallengeValidation from '../../components/challenge/challengeValidation/ChallengeValidation';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Challenge() {

    const insets = useSafeAreaInsets();
    const [displayModal, setDisplayModal ] = useState(true);
    const isFocused = useIsFocused();
    const [recordedVideo, setRecordedVideo] = useState(null);
    const [challengeData, setChallengeData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            try {
                const jsonValue = await AsyncStorage.getItem('challengeData');
                setChallengeData(JSON.parse(jsonValue));
                setIsLoading(false);
            } catch(error) {
                Alert.alert(error);
            }
        }
        getData();
    }, [])


    return !recordedVideo ? (
       <View style={[styles.main, {paddingBottom: insets.bottom}]}>
        <ChallengeInstructionsModal displayModal={displayModal} setDisplayModal={setDisplayModal}/> 
       { isFocused && <CameraChallenge setRecordedVideo={setRecordedVideo} recordedVideo={recordedVideo} challengeData={challengeData}/> }    
       </View>
    ) : isLoading ? (
        <Text>Loading...</Text>
    ) : (
        <ChallengeValidation recordedVideo={recordedVideo} done={challengeData.data.done} challengeId={challengeData.id} setRecordedVideo={setRecordedVideo}/>
    )
};

const styles = StyleSheet.create({
    main: {
        flex:1, 
        backgroundColor: 'black'
    },
    buttons: {
        height: 60,
        backgroundColor: 'white',
        width: '100%'
    }
});
