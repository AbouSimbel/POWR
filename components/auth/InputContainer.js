import { View, Text, StyleSheet, TextInput } from 'react-native';


export default function InputContainer({ text, type, secureTextEntry, required, value, setValue }) {
    return(
        <View style={styles.container}>
 
            <TextInput
                style={styles.input}
                type={type}
                secureTextEntry={secureTextEntry}
                required={required}
                value={value}
                onChangeText={text => setValue(text)}
                placeholder={text}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '85%',
        height: 60,
        backgroundColor: '#F7F8F9',
        marginTop: 15,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
        justifyContent: 'center',
        borderColor: "#E8ECF4",
        borderWidth: 1
    },
    text: {
        fontSize: 12,
        fontWeight: '500',
        color: "#444444"
    },
    input: {
        
    }
})