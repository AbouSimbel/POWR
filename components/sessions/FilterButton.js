import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function FilterButton({ button, filter, setFilter }) {
    return(
        <TouchableOpacity
            style={[styles.button, {backgroundColor: button.value === filter ? '#2FFFB2' : "#EDEBEB"}, button.value === filter && styles.selected ]}
            onPress={()=> {
                setFilter(button.value)
            }}
            >
            <Text style={[ styles.buttonText, {color: button.value === filter ? '#444444' : "#898989"}]}>{button.buttonText}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        height: 32,
        borderRadius: 32,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15,
        marginLeft: 6
    },
    buttonText: {
        fontSize: 10,
        color: "#898989",
        fontWeight: '600'
    },
    selected: {
        shadowOffset:{  width: 0,  height: 3 },
    shadowColor: 'grey',
    shadowOpacity: 0.25
    }
});