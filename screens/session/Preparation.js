import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, Dimensions, StatusBar, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import Constants from 'expo-constants';
import PreparationTitleBar from '../../components/session/preparation/PreparationTitleBar';
import LeaveModal from '../../components/common/LeaveModal';
import PreparationBody from '../../components/session/preparation/PreparationBody';
import NextButton from '../../components/session/preparation/NextButton';

const height = Dimensions.get('screen').height;
const width = Dimensions.get('screen').width;

const statusbarHeight = StatusBar.currentHeight;

export default function Preparation() {

    const [preparationData, setPreparationData] = useState([]);
    const [prepaCounter, setPrepaCounter] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [displayModal, setDisplayModal] = useState(false);

    useEffect(() => {
        const getSessionData = async () => {
            try {
              const jsonValue = await AsyncStorage.getItem('sessionData');
              const data = JSON.parse(jsonValue);
              console.log("la data => ", jsonValue)
              setPreparationData(data.preparation);
              setIsLoading(false);
            } catch(e) {
              //error reading value;
            }
          }
          getSessionData();
    }, []);

    return isLoading ? (
        <Text>Loading...</Text>
    ) : (
        <View style={styles.main}>

        <LeaveModal displayModal={displayModal} setDisplayModal={setDisplayModal}/>

            <StatusBar/>


           <ImageBackground style={styles.prepaPicture} resizeMode='cover' source={{uri: preparationData[prepaCounter].picture}}>
    
            <PreparationTitleBar setDisplayModal={setDisplayModal}/>
            <PreparationBody text={preparationData[prepaCounter].text} textPosition={preparationData[prepaCounter].textPosition}/>

            <NextButton preparationDataLength={preparationData.length} prepaCounter={prepaCounter} setPrepaCounter={setPrepaCounter}/>

           </ImageBackground>
        </View>
    );
};

const styles =  StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    prepaPicture: {
       height: height,
       width: width
    }
});
