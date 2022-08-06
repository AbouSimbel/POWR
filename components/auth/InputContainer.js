import { View, Text, StyleSheet, TextInput } from 'react-native';


export default function InputContainer({ text, type, secureTextEntry, required, value, setValue }) {
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{text}</Text>
            <TextInput
                style={styles.input}
                type={type}
                secureTextEntry={secureTextEntry}
                required={required}
                value={value}
                onChangeText={text => setValue(text)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '80%',
        height: 60,
        backgroundColor: '#F6F5F5',
        marginTop: 10,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    text: {
        fontSize: 12,
        fontWeight: '500',
        color: "#444444"
    },
    input: {
        marginTop: 5
    }
})