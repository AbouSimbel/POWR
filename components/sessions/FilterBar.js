import { StyleSheet, ScrollView, View } from 'react-native';
import FilterButton from './FilterButton';

export default function FilterBar({ filter, setFilter}) {

    const buttons =  [
        { buttonText: 'TOUTES CATEGORIES', value: null }, 
        { buttonText: 'TECHNIQUE', value: 'technique' }, 
        { buttonText: 'VITESSE', value: 'vitesse' }, 
        { buttonText: 'ENDURANCE', value: 'endurance' },
        { buttonText: 'RENFORCEMENT MUSCULAIRE', value: 'renforcement' }
    ];

    return(
        <View style={{height: 40, alignItems: 'center', marginTop: 20}}>
        <ScrollView horizontal style={styles.filtersContainer}>
           {buttons.map((button, index) => {
            return(
                <FilterButton 
                    button={button} 
                    key={index} 
                    index={index} 
                    filter={filter} 
                    setFilter={setFilter}
                    />
            )
           })}
        </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    filtersContainer: {

    }
});