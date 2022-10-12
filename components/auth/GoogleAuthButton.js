import { Text, Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import googleIcon from '../../assets/icons/google.png';
import facebookIcon from '../../assets/icons/facebook.png';
import appleIcon from '../../assets/icons/apple.png'

export default function GoogleAuthButton() {
    return(
        <View style={styles.socialsAuth}>

            <TouchableOpacity
                style={styles.socialAuthButton}
            >
                <Image resizeMode='contain' style={styles.socialsAuthIcon} source={facebookIcon}/>
            </TouchableOpacity>


            <TouchableOpacity
             style={styles.socialAuthButton}
             ><Image resizeMode='contain' style={styles.socialsAuthIcon} source={googleIcon}/></TouchableOpacity>


            <TouchableOpacity
             style={styles.socialAuthButton}
             ><Image resizeMode='contain' style={styles.socialsAuthIcon} source={appleIcon}/></TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    socialsAuth: {
        flexDirection: 'row',
        width: '85%',
        justifyContent: 'space-between',
    },
    socialAuthButton: {
        height: 56,
        width: '30%',
        borderRadius: 10,
        borderColor: '#E8ECF4',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    socialsAuthIcon: {
        height: 24
    },

});