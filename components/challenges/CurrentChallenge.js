import { View, Text, StyleSheet, Image , TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function CurrentChallenge({ data, setDisplayModal, setSelectedChallenge }) {

    const navigation = useNavigation();
    
    return(
        <View style={styles.container}>
            <Text style={styles.title}>LE CHALLENGE DU MOIS</Text>
            <TouchableOpacity
                style={styles.currentChallenge}
                onPress={() => {
                    setSelectedChallenge(0)
                    setDisplayModal(true)
                }}
                >
                <Image style={styles.challengePic} resizeMode="cover" source={{uri: data.data.picture}}/>
            </TouchableOpacity>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: 20
    },
    currentChallenge: {
        width: '100%',
        marginTop: 7,
        height: 147,
        alignSelf: 'center',
        borderRadius: 5
    },
    challengePic: {
        flex: 1
    },
    title: {
        fontSize: 12,
        fontWeight: '500',
        color: "#444444"
    }
})