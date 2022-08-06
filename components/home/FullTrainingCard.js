import { Image, StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;

export default function FullTrainingCard({ cardData }) {

 
    return(
        <Image source={{uri : cardData.picture}} style={styles.image} resizeMode='cover'/>
    );
};

const styles = StyleSheet.create({
    image: {
        height: 175,
        width: width*0.83,
        marginRight: 10,
        borderRadius: 3
    }
})