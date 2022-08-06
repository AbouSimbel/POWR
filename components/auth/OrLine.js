import { View, Text, StyleSheet } from 'react-native';


export default function OrLine() {
    return(
        <View style={styles.lineBlock}>
        <View style={styles.line}/>
        <Text style={styles.lineText}>ou</Text>
        <View style={styles.line}/>
    </View>
    );
};

const styles = StyleSheet.create({
    lineBlock: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15
    },
    line: {
        height: 1,
        backgroundColor: '#898989',
        width: '35%'
    },
    lineText: {
        width: '10%',
        color: '#323232',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16
    }
})
