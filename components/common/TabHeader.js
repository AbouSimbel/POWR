import { View, Text, Image, StyleSheet } from "react-native";
import defaultUser from '../../assets/images/defaultUser.png';
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function TabHeader() {

    const insets = useSafeAreaInsets();

    return(

        <View style={{width: '100%', backgroundColor: 'white', paddingTop: insets.top }}>

        <View style={[styles.container, {marginTop: 30, marginBottom: 10 }]}>
            <Text style={styles.text}>Bonjour Kylian !</Text>
            <Image style={styles.userPicture} source={defaultUser}/>
        </View>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '90%',
        alignSelf: 'center'
    },
    userPicture: {
        height: 35,
        width: 35
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: "#414141"
    }
});