import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function GradientBar() {
    return(
        <View style={styles.container}>
             <LinearGradient
            // Background Linear Gradient
            colors={['transparent', 'rgba(0,0,0,1)']}
            style={styles.background}
            /> 
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 30,
        width: '100%',
        position: 'absolute',
        left:0,
        bottom: 0,
        zIndex: 999999
    },
    background: {
        height: '100%',
    }
})