import { View, Text, Image, StyleSheet, Modal, Dimensions } from 'react-native';
import { Video, AVPlaybackStatus } from 'expo-av';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;


export default function ChallengeDetails({ data }) {
    return (
        <Modal visible>
            <View style={styles.main}>
                <Video
                    style={styles.video}
                    source={{
                        uri: data.videoPresentation,
                    }}
                    useNativeControls={false}
                    resizeMode="cover"
                    isLooping
                    shouldPlay
                />
                <Text>{data.title}</Text>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    main: {
        height: height,
        width: width
    }
});
