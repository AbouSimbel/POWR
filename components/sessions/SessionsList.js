import { View, ScrollView, Text, StyleSheet } from 'react-native';
import FreeSessionCard from '../home/FreeSessionCard';
import SessionsListElement from './SessionsListElement';


export default function SessionsList({ data, setDisplayModal }) {
    return(
        <ScrollView style={styles.main}>
            {data.map((data, index) => {
                return(
                    <SessionsListElement index={index} key={index} data={data} setDisplayModal={setDisplayModal}/>
                )
            })}

        </ScrollView>
    );
};

const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: '#EDEBEB'
    }
})