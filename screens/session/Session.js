import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import MainCountDown from '../../components/common/MainCountDown';
import LoopComponent from '../../components/session/components/LoopComponent';
import RecoveryTimeComponent from '../../components/session/components/RecoveryTimeComponent';
import RestartModal from '../../components/common/RestartModal';
import LeaveModal from '../../components/common/LeaveModal';
import Congratulations from './Congratulations';

export default function SessionMain({ navigation }) {

  const [trData, srtTrData] = useState(null);
  const [step, setStep] = useState(-1);
  const [isLoading, setIsLoading] = useState(true);

  const [displayModal, setDisplayModal] = useState(false);
  const [displayRestartModal, setDisplayRestartModal] = useState(false);
  
    useEffect(() => {
        const getSessionData = async () => {
            try {
              const jsonValue = await AsyncStorage.getItem('sessionData')
              const data = JSON.parse(jsonValue);
              setIsLoading(false)
            } catch(e) {
              // error reading value
            }
          }
          getSessionData();
    }, []);


    const trainingData = [
        { type: "loop" ,
          video: "https://player.vimeo.com/progressive_redirect/playback/720600603/rendition/540p/file.mp4?loc=external&signature=33371b0c8b8c9f1c4585564139691a4935b527a6f80a57d3e38044c0cd044c05",
          duration: 30,
          exercice_name: "Step Over"
        },
        { type: "restTimer" ,
          duration: 15
        },
        { type: "loop" ,
        video: "https://player.vimeo.com/progressive_redirect/playback/720600603/rendition/540p/file.mp4?loc=external&signature=33371b0c8b8c9f1c4585564139691a4935b527a6f80a57d3e38044c0cd044c05",
        duration: 30,
        exercice_name: "Step Over"
      },
      { type: "restTimer" ,
        duration: 15
      },
      { type: "loop" ,
      video: "https://player.vimeo.com/progressive_redirect/playback/720600603/rendition/540p/file.mp4?loc=external&signature=33371b0c8b8c9f1c4585564139691a4935b527a6f80a57d3e38044c0cd044c05",
      duration: 30,
      exercice_name: "Step Over"
        },
        { type: "restTimer" ,
        duration: 15
        },
             { type: "loop" ,
          video: "https://player.vimeo.com/progressive_redirect/playback/720600603/rendition/540p/file.mp4?loc=external&signature=33371b0c8b8c9f1c4585564139691a4935b527a6f80a57d3e38044c0cd044c05",
          duration: 30,
          exercice_name: "Step Over"
        }
    ] 

    return isLoading ? (
      <Text>Loading...</Text>
    ) : (step === -1) ? 
    (
      <MainCountDown duration={5} step={step} setStep={setStep}/>
    ) : (step === trainingData.length) ? (
      <Congratulations/>
    ) : (
      <View style={styles.componentContainer}>
       {displayModal && <LeaveModal setDisplayModal={setDisplayModal}/>}
       {displayRestartModal && <RestartModal setDisplayRestartModal={setDisplayRestartModal}/>}


        {trainingData[step].type === 'loop' ?
        <LoopComponent displayModal={displayModal} displayRestartModal={displayRestartModal} setDisplayModal={setDisplayModal} setDisplayRestartModal={setDisplayRestartModal} step={step} setStep={setStep} trainingData={trainingData[step]}/> :
        trainingData[step].type === 'restTimer' ? 
        <RecoveryTimeComponent displayModal={displayModal} displayRestartModal={displayRestartModal} setDisplayModal={setDisplayModal} setDisplayRestartModal={setDisplayRestartModal} step={step} setStep={setStep} trainingData={trainingData[step]}/> :
        null
        }
      </View>
    ) 
};

const styles = StyleSheet.create({
    componentContainer: {
      height: '100%'
    }
});
