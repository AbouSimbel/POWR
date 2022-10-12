import { View, Text, StyleSheet } from 'react-native';


export default function OrLine() {
    return(
        <View style={styles.lineBlock}>
        <View style={styles.line}/>
        <Text style={styles.lineText}>Connexion avec</Text>
        <View style={styles.line}/>
    </View>
    );
};

const styles = StyleSheet.create({
    lineBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 35,
        marginBottom: 22,
        width: "85%"
    },
    line: {
        height: 1,
        backgroundColor: '#E8ECF4',
        flex:1
    },
    lineText: {
        color: '#6A707C',
        fontWeight: '500',
        textAlign: 'center',
        fontSize: 14,
        marginHorizontal: 15
    }
})
