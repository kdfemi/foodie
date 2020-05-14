import React from 'react';
import MealList from '../components/MealList';
import {MEALS} from '../data/dummy-data';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const FavoritesScreen = props => {
    const {navigation, route} = props;
    navigation.setOptions({
        title: 'Your Favorites',
        headerLeft: (props) => {
            return(
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title="Menu" iconName="ios-menu" onPress={() => {navigation.toggleDrawer()}} iconSize={32}/>
                </HeaderButtons>
            );
        }
    });
    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2')
    return (
        <MealList listData={favMeals} navigation={navigation}/>
    );
}

export default FavoritesScreen;