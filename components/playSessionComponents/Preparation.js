import {View, TouchableOpacity, StyleSheet, Text, Image, Dimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useState } from 'react';
import back_arrow from '../../assets/icons/back_arrow.png';
import close from '../../assets/icons/close.png';
import LeaveModal from './LeaveModal';


export default function Preparation({ data, setStep, step }) {
    
    const insets = useSafeAreaInsets();

    const [prepaStep, setPrepaStep] = useState(0);
    const [displayLeaveModal, setDisplayLeaveModal] = useState(false);

    // Faire le bouton pour Quitter

    
    return(
        <View style={[styles.mainContainer]}>
            { displayLeaveModal && <LeaveModal setDisplayLeaveModal={setDisplayLeaveModal}/>}

            <View style={{height: '70%', width: '100%'}}>
                <Image resizeMode='cover' style={{flex: 1}} source={{uri: data.pictures[0].picture}}/>

                <TouchableOpacity
                    onPress={() => setDisplayLeaveModal(true)}
                    style={{backgroundColor: 'white', position: 'absolute', top: 10, right: 10, borderRadius: 12, height: 41, width: 41, justifyContent: 'center', alignItems: 'center', backgroundColor: "#FFFFFF"}}
                    >
                    <Image style={{height: 18, width:  18}} source={close}/>
                </TouchableOpacity>
            </View>

            <View style={{alignItems: 'center', paddingTop: 6, flex:1, justifyContent: 'space-between' }}>
                <Text style={{color: "#5c5c5c", fontSize: 24, fontWeight: 'bold'}}>Préparation</Text>
                <View style={{}}>
                    <Text style={{fontSize: 20, fontWeight: '700', textAlign: 'center', paddingHorizontal: 40 }}>{data.pictures[prepaStep].text}</Text>

                </View>

                {/* PREVIOUS BUTTON */}
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '90%'}}>
                    <TouchableOpacity 
                        disabled={prepaStep === 0 && true}
                        onPress={() => prepaStep !== 0 && setPrepaStep(prepaStep - 1)}
                        style={{height: 51, width: 51, borderWidth: 1, borderColor: '#E8ECF4', borderRadius: 12, alignItems: 'center', justifyContent: 'center'}}>
                        <Image source={back_arrow} style={prepaStep === 0 &&{opacity: 0.2}}/>
                    </TouchableOpacity>

                <View style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
                    {data.pictures.map((picture, index) => {
                        return(
                            <View key={index} style={{height: 16, width: 16, borderColor: "grey", borderWidth: 1, borderRadius: 16, justifyContent: 'center', alignItems: 'center', marginHorizontal: 6}}>
                               {prepaStep === index && <View style={{height: 10, width: 10, backgroundColor: "#18C07A", borderRadius: 10}}/>}
                            </View>
                        )

                    })}
                </View>

                {/* NEXT BUTTON */}
              { (prepaStep !== data.pictures.length - 1) ?  (
                  <TouchableOpacity 
                    onPress={() =>{ setPrepaStep(prepaStep + 1)}}
                  style={{height: 51, width: 51, borderWidth: 1, borderColor: '#E8ECF4', borderRadius: 12,  alignItems: 'center', justifyContent: 'center'}}>
                        <Image style={{ transform: [{scaleX: -1}]}} source={back_arrow}/>
                  </TouchableOpacity>
              ) : (
                <TouchableOpacity 
                onPress={() =>{ setStep(step+1)}}
              style={{height: 51, width: 51, backgroundColor: "#18C07A", borderRadius: 12,  alignItems: 'center', justifyContent: 'center'}}>
                   <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>Go !</Text>
              </TouchableOpacity>
              )
            }
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1, 
        paddingBottom: 25
    }
});
