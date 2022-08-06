import { View, StyleSheet, Text } from "react-native";


export default function LiveCoachingMain() {
    return(
        <View style={styles.main}>
            <Text>LIVE COACHING PAGE</Text>
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