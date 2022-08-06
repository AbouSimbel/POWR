import { View, Text, StyleSheet } from 'react-native';


export default function TopText() {
    return(
        <View style={styles.congratsBlock}>
            <Text style={{fontSize: 32,fontWeight: '500', color: 'white', marginBottom: 14}}>FELICITATIONS !</Text>
            <Text style={[styles.text, {marginBottom: 22, fontSize: 16}]}>Tu as été au bout de ta séance.</Text>
            <Text style={{fontWeight: '400', fontSize: 14, color: '#ECECEC', marginBottom: 10, fontStyle: 'italic'}}>“Dans le football comme dans l'horlogerie, le talent et l'élégance ne signifient rien sans rigueur et précision.”</Text>
            <Text style={styles.text}>LIONEL  <Text style={{color: '#2FFFB2'}}>MESSI</Text></Text>
           
        </View>
    );
};

const styles = StyleSheet.create({
    congratsBlock: {
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingTop: 30
    },
    text: {
        fontSize: 14,
        color: 'white',
        fontWeight: '600'
    }
})