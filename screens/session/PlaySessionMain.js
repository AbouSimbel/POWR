import { View, TouchableOpacity, Text, StyleSheet, StatusBar } from 'react-native';
import Preparation from '../../components/playSessionComponents/Preparation';
import { useEffect, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ReadyTimer from '../../components/playSessionComponents/ReadyTimer';
import LoopVideo from '../../components/playSessionComponents/LoopVideo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LeaveModal from '../../components/playSessionComponents/LeaveModal';
import RestartModal from '../../components/playSessionComponents/RestartModal';
import VideoExerciceExplanation from '../../components/playSessionComponents/VideoExerciceExplanation';
import ExerciceLaps from '../../components/playSessionComponents/ExerciceLaps';



export default function PlaySessionMain({ navigation }) {

    const insets = useSafeAreaInsets();
    const [step, setStep] = useState(0);

    StatusBar.setBarStyle('dark-content');
  
    const [trainingData, setTrainingData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const [displayLeaveModal, setDisplayLeaveModal] = useState(false);
    const [displayRestartModal, setDisplayRestartModal] = useState(false);

    useEffect(() => {
        const getSessionData = async () => {
            try {
              const jsonValue = await AsyncStorage.getItem('sessionData');
              const data = JSON.parse(jsonValue);
              setTrainingData(data.sessionData);
              setIsLoading(false);
            } catch(e) {
              // error reading value
            }
          }
          getSessionData();
    }, []);


    return isLoading ? (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontSize: 26, fontWeight: 'bold'}}>Loading...</Text>
        </View>
    ) : (
<View style={{flex: 1, backgroundColor: 'white', paddingTop: insets.top, paddingBottom: insets.bottom}}>
    {/* <StatusBar translucent backgroundColor="transparent" /> */}

    {displayLeaveModal && <LeaveModal setDisplayLeaveModal={setDisplayLeaveModal}/>}
    {displayRestartModal && <RestartModal setStep={setStep} setDisplayRestartModal={setDisplayRestartModal}/>}

    { step >= trainingData.length ? <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}><TouchableOpacity onPress={() => navigation.navigate('Séances libres')}><Text>TERMINER</Text></TouchableOpacity></View>  :
    (trainingData[step].type === 'preparation')? <Preparation data={trainingData[step]} setStep={setStep} step={step}/> : 
    (trainingData[step].type === 'readyTimer') ? <ReadyTimer data={trainingData[step]} setStep={setStep} step={step}/> :
    (trainingData[step].type === 'loop_video') ? <LoopVideo data={trainingData[step]} setStep={setStep} step={step} displayLeaveModal={displayLeaveModal} setDisplayLeaveModal={setDisplayLeaveModal} displayRestartModal={displayRestartModal} setDisplayRestartModal={setDisplayRestartModal}/> :
    (trainingData[step].type === 'video_ex_presentation') ? <VideoExerciceExplanation data={trainingData[step]} setStep={setStep} step={step} displayLeaveModal={displayLeaveModal} setDisplayLeaveModal={setDisplayLeaveModal} displayRestartModal={displayRestartModal} setDisplayRestartModal={setDisplayRestartModal}/> :
    (trainingData[step].type === 'ex_laps') ? <ExerciceLaps data={trainingData[step]} setStep={setStep} step={step} displayLeaveModal={displayLeaveModal} setDisplayLeaveModal={setDisplayLeaveModal} displayRestartModal={displayRestartModal} setDisplayRestartModal={setDisplayRestartModal}/> :
    null
    }
</View>
)};
