import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const height = Dimensions.get("screen").height;
const width = Dimensions.get("screen").width;

export default function RestartModal({ setStep, setDisplayRestartModal }) {
    return(
        <View style={styles.blurredBackground}>
             <View style={{padding: 20, backgroundColor: 'white', width: '90%', borderRadius: 20, alignItems: 'center'}}>
           
           <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: "center"}}>Es-tu certain de vouloir recommencer la séance depuis le début ?</Text>

           <View style={{flexDirection: 'row', width: '100%', justifyContent:'space-around', marginTop: 40}}>
               <TouchableOpacity
                   onPress={() => setDisplayRestartModal(false)}
                   style={{height: 40, alignItems: 'center', justifyContent: 'center'}}
               >
                   <Text style={{color: '#414141', fontSize: 16, fontWeight: 'bold'}}>Annuler</Text>
               </TouchableOpacity>

               <TouchableOpacity
               onPress={() => {
                setDisplayRestartModal(false);
                setStep(0)}}
               style={{height: 40, alignItems: 'center', justifyContent: 'center'}}
               >
                   <Text style={{color: '#ff2f2f', fontSize: 16, fontWeight: 'bold'}}>Recommencer</Text>
               </TouchableOpacity>

           </View>
       </View>


        </View>
    )
};

const styles = StyleSheet.create({
    blurredBackground: {
        height: height,
        width: width,
        backgroundColor: '#00000099',
        position: 'absolute',
        zIndex: 999,
        alignItems: 'center',
        paddingTop: height*0.3
    }
});