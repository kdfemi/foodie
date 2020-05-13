import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

import {CATEGORIES, MEALS} from '../data/dummy-data';
import { FlatList } from 'react-native-gesture-handler';
import MealItem from '../components/MealItem';

const CategoryMealScreen = props => {
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
    const {categoryId} = props.route.params;
    const selecetedCategory = CATEGORIES.find(cat => cat.id === categoryId)
    props.navigation.setOptions({
        title: selecetedCategory.title
    });
    const displayedMeals = MEALS.filter( meal => meal.categoryIds.indexOf(categoryId) >= 0);
    return (
        <View style={styles.screen}>
            <FlatList data={displayedMeals} renderItem={renderMealItem}
            keyExtractor={(item, index) => item.id} style={{width: '100%'}}/>
        </View>
    ); 
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10
    }
});

export default CategoryMealScreen;