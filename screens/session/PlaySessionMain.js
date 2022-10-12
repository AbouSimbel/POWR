import { View, TouchableOpacity, Text, StyleSheet, StatusBar } from 'react-native';
import Preparation from '../../components/playSessionComponents/Preparation';
import { useEffect, useState } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import ReadyTimer from '../../components/playSessionComponents/ReadyTimer';
import LoopVideo from '../../components/playSessionComponents/LoopVideo';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function PlaySessionMain({ navigation }) {

    const insets = useSafeAreaInsets();
    const [step, setStep] = useState(0);

    StatusBar.setBarStyle('dark-content');
  
    const [trainingData, setTrainingData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getSessionData = async () => {
            try {
              const jsonValue = await AsyncStorage.getItem('sessionData');
              const data = JSON.parse(jsonValue);
              console.log('data dans le useEffect');
              console.log(data.sessionData)
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

    { step >= trainingData.length ? <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}><TouchableOpacity onPress={() => navigation.navigate('Séances libres')}><Text>TERMINER</Text></TouchableOpacity></View>  :
    (trainingData[step].type === 'preparation')? <Preparation data={trainingData[step]} setStep={setStep} step={step}/> : 
    (trainingData[step].type === 'readyTimer') ? <ReadyTimer data={trainingData[step]} setStep={setStep} step={step}/> :
    (trainingData[step].type === 'loop_video') ? <LoopVideo data={trainingData[step]} setStep={setStep} step={step}/> :
    null
    }
</View>
)};
