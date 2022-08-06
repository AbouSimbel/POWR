import { View, Text, StyleSheet } from 'react-native';

export default function ChallengeInfos({ data }) {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.description}>{data.description}</Text>
            <Text style={styles.howManyDone}>{data.done} joueurs ont réussi ce challenge !</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        paddingVertical: 7,
        flex: 1
    },
    title: {
        fontWeight: 'bold',
        fontSize: 22
    },
    description: {
        width: '90%',
        fontSize: 12,
        marginVertical: 20
    },
    howManyDone: {
        width: '90%',
        fontSize: 14,
        fontWeight: '500'
    }
})