import { View, TouchableOpacity, StyleSheet, Image, Text } from 'react-native';
import flipIcon from '../../assets/icons/ar-camera.png';
import flashIcon from '../../assets/icons/flash.png';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CameraType } from 'expo-camera';
import closeIcon from '../../assets/icons/white-cross.png';
import { useNavigation } from '@react-navigation/native';


export default function CameraOptions({ type, setType, width, challengeData }) {

    const navigation = useNavigation();
    const insets = useSafeAreaInsets();

    return(
        <View style={[styles.buttonsContainer, {width: width, marginTop: insets.top+15}]}>


                <TouchableOpacity
                    style={[styles.button]}
                    //Retirer la data dans le storage. (l'item challenge)
                    onPress={() => navigation.navigate('Root')}
                    >
                    <Image resizeMode='contain' style={styles.closeIcon} source={closeIcon} />
                </TouchableOpacity>

                <View style={styles.titleContainer}>
                  <Text style={styles.title}>{challengeData.title}</Text>
                </View>


        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setType(type === CameraType.back ? CameraType.front : CameraType.back);
          }}>
          <Image resizeMode='contain' style={styles.flipIcon} source={flipIcon}/>
        </TouchableOpacity>

        {/* {type === CameraType.back && <TouchableOpacity
          style={styles.button}
          onPress={() => {
            setFlash(Camera.Constants.FlashMode.off ? Camera.Constants.FlashMode.on : Camera.Constants.FlashMode.off)
          }}>
          <Image resizeMode='contain' style={styles.flipIcon} source={flashIcon}/>
        </TouchableOpacity>} */}
      </View> 
    );
};

const styles = StyleSheet.create({
 buttonsContainer: {
      width: 50,
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 15
    },
    button: {
      height: 40,
      width: 40,
      borderRadius: 5,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#00000099',
    },
    flipIcon: {
      height: 25,
      width:25
    },
    closeIcon: {
      height: 15
    },
    title: {
      color: 'white'
    }
})
