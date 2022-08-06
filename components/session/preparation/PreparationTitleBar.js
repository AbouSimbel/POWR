import { View, Text, Image, StyleSheet, TouchableOpacity, Platform, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';
import closeIcon from '../../../assets/icons/white-cross.png'


export default function PreparationTitleBar({ setDisplayModal }) {

    const navigation = useNavigation();

    let statusBarHeight = '';

    if(Platform.OS === 'android') {
        statusBarHeight = StatusBar.currentHeight+20;
    } else {
        statusBarHeight = Constants.statusBarHeight;
    }

    return(
        <View style={[styles.container, { marginTop: statusBarHeight}]}>

            <View style={{width: 30}}/> 

            <View style={styles.titleContainer}>
                <Text style={styles.title}>PREPARATION</Text>
            </View>

            <TouchableOpacity
                style={styles.close}
                onPress={()=> setDisplayModal(true)}
                >
                <Image style={styles.closeIcon} resizeMode='contain' source={closeIcon}/>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    titleContainer:{
        height: 30,
        backgroundColor: '#00000099',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderRadius: 30
    },
    title: {
        color: 'white',
        fontSize: 14,
        fontWeight: 'bold'
    },
    close: {
        height: 30,
        width: 30,
        borderRadius: 30,
        backgroundColor: '#00000099',
        justifyContent: 'center',
        alignItems: 'center'
    },
    closeIcon: {
        height: 12
    }
})