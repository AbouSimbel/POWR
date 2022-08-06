import { ScrollView, View, Text, StyleSheet } from "react-native";
import ChallengeCard from "./ChallengeCard";
import FreeSessionCard from "./FreeSessionCard";
import FullTrainingCard from "./FullTrainingCard";
import LiveCard from "./LiveCard";

export default function HomeCarousel({ categoryData }) {

    return(
        <View style={styles.container}>
            <Text style={styles.carouselTitle}>{categoryData.title}</Text>
            <ScrollView style={styles.carousel} horizontal pagingEnabled={true}>

                 {categoryData.data.data.map((cardData, index) => {
                    return(
                            categoryData.category === 'challenge' ? <ChallengeCard cardData={cardData} key={index}/> :
                            categoryData.category === 'freesessions' ? <FreeSessionCard cardData={cardData} key={index}/> :
                            categoryData.category === 'fulltrainings' ? <FullTrainingCard cardData={cardData} key={index}/> :
                            categoryData.category === 'lives' ? <LiveCard cardData={cardData} key={index}/> :
                            null
                    )}
                )}
            </ScrollView>
        </View>
    );
};

const styles =  StyleSheet.create({
    container: {
        marginTop: 30
    },
    carouselTitle: {
        marginBottom: 5,
        fontSize: 14,
        fontWeight: 'bold',
        color: "#212121"
    }
})