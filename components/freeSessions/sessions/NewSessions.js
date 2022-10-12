import { View, Image, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions, ImageBackground } from "react-native";

const width = Dimensions.get('screen').width;

export default function NewSessions({ newSessions }) {

    console.log("GFDVGFCVFDCVGFDCVFDCVGFDCVGFCVG")
    console.log(newSessions[0].great_picture)  



    return(
        <View style={styles.container}>
            <Text style={styles.text}>Les nouvelles séances</Text>

    
        <ScrollView horizontal pagingEnabled style={{marginTop: 12}}>



            {newSessions.map((newSession, index) => {

                const image = { uri: "https://firebasestorage.googleapis.com/v0/b/powr-f34aa.appspot.com/o/FREE_SESSIONS%2FTECHNIC%2FRESISTANCE_BAND_DRILL%2FPICTURE%2Fovertheball.jpeg?alt=media&token=c8a05dce-cc80-44d6-bf30-d088d21a4f03" }

                return(
                    <View style={{width: width, height: 152 }} key={index}>
                        <ImageBackground style={{flex: 1}} source={image} resizeMode='cover'>

                            <TouchableOpacity
                                    style={styles.newSessionCard}
                                    >
                                <View style={styles.textContainer}>
                            
                                            <Text style={{marginBottom: 7, fontSize: 18, fontWeight: '900', color: 'white'}}>{newSession.title}</Text>
                                            <View style={styles.cat_duration}>
                                                <Text style={{fontSize: 14, color: 'white', fontWeight: '600'}}>{newSession.category}</Text>
                                                <Text style={{fontSize: 14, color: 'white', fontWeight: '600'}}> - </Text>
                                                <Text style={{fontSize: 14, color: 'white', fontWeight: '600'}}>Durée minutes</Text>
                                            </View>
                                </View>
                            </TouchableOpacity>

                        </ImageBackground>
                    </View>    
                )
            })}

        </ScrollView>

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        alignSelf: 'center'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        color: "#414141",
        width: '90%',
        alignSelf: 'center'
    },
    newSessionCard: {
        height: 152,   
        paddingVertical: 15,
        paddingHorizontal: 20,
        justifyContent: 'flex-end',
        width: '100%'
    },
    cat_duration: {
        flexDirection: 'row'
    },
    textContainer: {
       
    }
});
