import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { getAuth } from "firebase/auth";


export default function ProfilMain() {
    return(
        <View style={styles.main}>
            <Text>PROFIL PAGE</Text>
<TouchableOpacity
    style={{ height: 50, borderRadius: 10, backgroundColor: 'tomato', width: '60%', alignItems: 'center', justifyContent: 'center'}}
    onPress={() => getAuth().signOut()}
    >
    <Text>Deconnexion</Text>
</TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    gotoButton: {
        marginTop: 30,
        backgroundColor: '#2FFFB2'
    }
});