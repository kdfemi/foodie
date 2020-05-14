import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import MealItem from './MealItem';


const MealList = props => {
    const renderMealItem = itemData => {
        return (
            <MealItem title={itemData.item.title} onSelectMeal={() => {
                props.navigation.navigate('MealDetail', {
                    mealId: itemData.item.id
                });
            }}
            duration={itemData.item.duration}
            image={itemData.item.imageUrl}
            complexity={itemData.item.complexity}
            affordability={itemData.item.affordability}/>
        );
    }

return (
    <View style={styles.list}>
    <FlatList data={props.listData} renderItem={renderMealItem}
    keyExtractor={(item, index) => item.id} style={{width: '100%'}}/>
    </View>
);
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    }
})

export default MealList;