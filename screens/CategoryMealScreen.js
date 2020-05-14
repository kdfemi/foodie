import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

import {CATEGORIES, MEALS} from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealScreen = props => {

    const {categoryId} = props.route.params;
    const selecetedCategory = CATEGORIES.find(cat => cat.id === categoryId)
    props.navigation.setOptions({
        title: selecetedCategory.title
    });
    const displayedMeals = MEALS.filter( meal => meal.categoryIds.indexOf(categoryId) >= 0);
    return (
     <MealList listData={displayedMeals} navigation={props.navigation}/>
    ); 
}


export default CategoryMealScreen;