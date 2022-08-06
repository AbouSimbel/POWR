import { View, Text, StyleSheet, Modal, TouchableOpacity, Platform } from 'react-native';
import { Constants } from 'expo-constants';
import ChallengeVideo from './ChallengeVideo';
import ChallengeInfos from './ChallengeInfos';
import ChallengeStartButton from './ChallengeStartButton';


export default function ConfirmSessionModal({ displayModal, setDisplayModal, data }) {


    return(
        <Modal
            style={styles.modal}
            visible={displayModal}
            >
            <View  style={styles.main}>
                <ChallengeVideo setDisplayModal={setDisplayModal} videoPresentation={data.data.video_presentation}/>
                <ChallengeInfos data={data.data}/>
                <ChallengeStartButton setDisplayModal={setDisplayModal} data={data}/>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    main: {
        flex:1
    }
})