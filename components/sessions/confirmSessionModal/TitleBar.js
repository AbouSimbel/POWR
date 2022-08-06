import { View, TouchableOpacity, Text, StyleSheet, Image } from 'react-native';
import leftChevron from '../../../assets/icons/left-chevron.png';
import Constants from 'expo-constants';


const statusBarHeight = Constants.statusBarHeight;


export default function TitleBar({ title , setDisplayModal }) {

    
    return(
        <View style={[styles.titleBar,  {marginTop: statusBarHeight}]}>

        <TouchableOpacity
            style={styles.goBack}
            onPress={()=> setDisplayModal({display:false, dataIndex: null})}
            >
            <Image style={styles.backIcon} resizeMode="contain" source={leftChevron}/>
        </TouchableOpacity>

        <View style={styles.titleContainer}>
            <Text style={styles.title}>{title.toUpperCase()}</Text>
        </View>
        <View style={{width: 32}}/>
        </View>
    );
};

const styles = StyleSheet.create({
    titleBar: {
        position:'absolute',
        top: 0,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        zIndex: 9999,
        flexDirection: 'row',
        padding: 10
    },
    titleContainer: {
        backgroundColor: '#00000099',
        height: 35,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 35
    },
    title: {
        color: 'white',
        fontWeight: '500',
        fontSize: 14,
        color: '#2FFFB2'
    },
    goBack: {
        height: 35,
        width: 35,
        backgroundColor: '#00000099',
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center'
    },
    backIcon: {
        height: 25,
        marginRight: 3
    }
});


