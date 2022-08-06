import { TouchableOpacity, View, Text, Image, StyleSheet, Dimensions } from "react-native";

const width = Dimensions.get('window').width;

export default function SessionsListElement({ data, setDisplayModal, index }) {

    return(
        <TouchableOpacity
            style={styles.container}
            onPress={() => setDisplayModal({display: true, dataIndex: index})}
            >
                <View style={styles.titleBar}>
                    <Text style={styles.title}>{data.title.toUpperCase()}</Text>
                    <View style={styles.categoryLabel}>
                        <Text style={styles.category}>{data.category.toUpperCase()}</Text>
                    </View>
                </View>
                <Image resizeMode="cover" source={{uri: data.picture}} style={styles.image}/>
                <Text style={styles.equipments}>EQUIPEMENTS REQUIS</Text>
                <View style={styles.equipmentsContainer}>
                    {data.equipments.map((equipment, index) => {
                        return(
                            <View key={index} style={styles.equipmentLabelContainer}>
                                <Text style={styles.equipmentLabel}>{equipment.name.toUpperCase()}</Text>
                            </View>
                        )
                    })}
                </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 267,
        width: width,
        paddingVertical: 10,
        marginBottom: 14,
        backgroundColor: 'white'
    },
    titleBar: {
        backgroundColor: '#272727',
        height: 22,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 6,
        justifyContent: 'space-between'
    },
    title: {
        color: 'white',
        fontSize: 10,
        fontWeight: 'bold'
    },
    categoryLabel: {
        height: 18,
        justifyContent: 'center',
        paddingHorizontal: 6,
        backgroundColor: '#2FDAFF',
        borderRadius: 2
    },
    category: {
        color: '#444444',
        fontSize: 10,
        fontWeight: 'bold'
    },
    image: {
        height: 180,
        width: width
    },
    equipments: {
        fontSize: 10,
        fontWeight: '600',
        color: '#444444',
        paddingLeft: 6,
        paddingVertical: 4
    },
    equipmentsContainer: {
        flexDirection: 'row',
        paddingLeft: 6
    },
    equipmentLabelContainer: {
        height: 21,
        backgroundColor: "#444444",
        borderRadius: 2,
        paddingHorizontal: 10,
        justifyContent: 'center',
        marginRight: 2
    },
    equipmentLabel: {
        fontSize: 10,
        fontWeight: '500',
        color: 'white'
    }
});
