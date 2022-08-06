import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import likeIcon from '../../../assets/icons/like.png';
import dislikeIcon from '../../../assets/icons/dislike.png';


export default function IsGoodSession() {
    return(
        <View style={styles.container}>
            <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold', alignSelf: 'center'}}>As-tu apprécié cette séance ?</Text>

            <View style={styles.buttons}>
                <TouchableOpacity
                    style={[styles.button, {borderColor: "#FF2F2F", backgroundColor:'#FF2F2F20'}]}
                    >
                    <Image resizeMode='contain' style={styles.icon} source={dislikeIcon}/>
                    <Text style={[styles.buttonText, {color: '#FF2F2F'}]}>NON</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.button, {borderColor: "#2FFFB2", backgroundColor:'#2FFFB220'}]}
                    >
                    <Text style={[styles.buttonText, {color: '#2FFFB2'}]}>OUI</Text>
                    <Image resizeMode='contain' style={styles.icon} source={likeIcon}/>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#00000060',
      paddingVertical: 30,
      width: '95%',
      borderRadius: 20
    },
    buttons: {
        flexDirection: 'row',
        marginTop: 23,
        justifyContent:'space-around'
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        paddingHorizontal: 15,
        alignItems: 'center',
        justifyContent: 'space-around',
        borderWidth: 1,
        width: '40%',
        borderRadius: 10
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    icon: {
        height: 27
    }
});
