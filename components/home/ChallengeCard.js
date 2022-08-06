import { Image, StyleSheet, TouchableOpacity, Dimensions, Text } from 'react-native';

const width = Dimensions.get('window').width;

export default function ChallengeCard({ cardData }) {


    return(
        <TouchableOpacity
            style={styles.container}
            >
            <Image style={styles.image} resizeMode='cover' source={{ uri : cardData.picture }}/>
            <Text style={styles.challengeTitle}>{cardData.title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        width: width - 20
    },
    image: {
        flex: 1,
        height: 147,
        marginBottom: 4,
        borderRadius: 3
    },
    challengeTitle: {
        fontSize: 12,
        fontWeight: '500',
        color: '#444444'
    }
});