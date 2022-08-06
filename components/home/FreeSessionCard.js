import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

const width = Dimensions.get('window').width;


export default function FreeSessionCard({ cardData }) {
    return(
        <TouchableOpacity style={styles.main}>
            <View style={styles.titleBar}>
                <Text style={styles.title}>{cardData.title.toUpperCase()}</Text>
                <Text style={styles.category}>{cardData.category.toUpperCase()}</Text>
            </View>
            <Image style={styles.image} resizeMode='cover' source={{uri:cardData.picture}}/>

            <Text style={styles.equipments}>EQUIPEMENT REQUIS</Text>

            <View style={styles.equipmentsList}>
                {cardData.equipments.map(( equipment, index) => {
                    return(
                        <Text style={styles.equipmentLabel} key={index}>{equipment.toUpperCase()}</Text>
                    )
                })}
            </View>


            <View>

            </View>

        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    main: {
        width: width*0.85,
        marginRight: 10
    },
    image: {
        height: 180,
        width: width*0.85,
        borderBottomLeftRadius: 3,
        borderBottomRightRadius: 3
    },
    titleBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: "#444444",
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3,
        height: 21,
        alignItems: 'center',
        paddingHorizontal: 3,
        borderTopLeftRadius: 3,
        borderTopRightRadius: 3
    },
    equipmentLabel: {
        color: 'white',
        backgroundColor: '#444444',
        marginRight: 5,
        paddingHorizontal: 10,
        paddingVertical: 2,
        fontSize: 12,
        fontWeight: '600'
    },
    title: {
        color: 'white',
        fontSize: 12,
        fontWeight: '700'
    },
    category: {
        paddingHorizontal: 10,
        backgroundColor: "#2FDAFF",
        fontSize: 12,
        fontWeight: '500'
    },
    equipments: {
        marginVertical: 3,
        fontSize: 10,
        fontWeight: '600',
    },
    equipmentsList: {
        flexDirection: 'row'
    
    }
})