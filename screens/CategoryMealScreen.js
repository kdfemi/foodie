import React from 'react';
import { useSelector} from 'react-redux';
import {CATEGORIES} from '../data/dummy-data';
import MealList from '../components/MealList';
import { View, StyleSheet } from 'react-native';
import DefaultText from '../components/DefaultText';

const CategoryMealScreen = props => {

    const {categoryId} = props.route.params;
    const selecetedCategory = CATEGORIES.find(cat => cat.id === categoryId)
    props.navigation.setOptions({
        title: selecetedCategory.title
    });
    const availableMeals = useSelector(state => state.meals.filteredMeals);
    const displayedMeals = availableMeals.filter( meal => meal.categoryIds.indexOf(categoryId) >= 0);
    if(displayedMeals.length === 0 )
        return <View style={styles.content}>
            <DefaultText>No meals, maybe check your filters?</DefaultText>
        </View>
    return (
     <MealList listData={displayedMeals} navigation={props.navigation}/>
    ); 
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
export default CategoryMealScreen;