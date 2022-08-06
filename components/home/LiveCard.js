import { View, StyleSheet, Text, TouchableOpacity, Image, ImageBackground, Dimensions } from 'react-native';
import membersIcon from '../../assets/icons/membersIcon.png'

const width = Dimensions.get('window').width;

export default function LiveCard({ cardData }) {

    const date_start = new Date(cardData.date_start.toDate());
    const end_time = new Date(cardData.date_end.toDate());

    return(
        <TouchableOpacity
            style={styles.container}
            >
        <ImageBackground resizeMode='cover' style={styles.imageBackground} imageStyle={styles.imageBackgroundStyle} source={{uri:cardData.picture}}>

        <View style={styles.members}>
            <Image source={membersIcon}/>
            <Text style={styles.membersText}>{cardData.members} participants</Text>
        </View>

        <View style={styles.liveInfos}>
            <View style={styles.liveInfosLeft}>
                <Text style={styles.coacher}>Avec {cardData.coacher}</Text>
                <TouchableOpacity
                    style={styles.button}
                    >
                    <Text style={styles.buttonText}>Je m'inscris !</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.liveInfosRight}>
                <Text>{cardData.date_debut}</Text>
            </View>

        </View>

        </ImageBackground>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 180,
        width: width*0.8,
        marginRight: 10
    },
    imageBackground: {
        flex: 1
    },
    imageBackgroundStyle : {
        borderRadius: 3
    },
    membersText: {
        fontSize: 12,
        color: 'white',
        marginLeft: 7,
        fontWeight: '500'
    },
    members: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 22,
        backgroundColor: "#00000099",
        position: 'absolute',
        right: 4,
        top: 4,
        paddingHorizontal: 10,
        borderRadius: 2
    },
    liveInfos: {
        height: 48,
        width: '100%',
        backgroundColor: '#00000099',
        position: 'absolute',
        bottom: 0,
        flexDirection: "row",
        paddingVertical: 4,
        paddingHorizontal: 7,
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3
    },
    coacher: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold'
    },
    button: {
        height: 20,
        width: 105,
        backgroundColor: '#2FFFB2',
        borderRadius: 2,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 3
    },
    buttonText: {
        fontSize: 12,
        color: '#212121',
        fontWeight: '500'
    },
    liveInfosRight: {
        backgroundColor: '#00000099',
        flex:2,
        borderRadius: 5
    },
    liveInfosLeft: {
        flex:3
    }
})