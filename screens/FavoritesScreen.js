import React from 'react';
import MealList from '../components/MealList';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

import {useSelector} from 'react-redux'
import { View, Text, StyleSheet} from 'react-native';
import DefaultText from '../components/DefaultText';
const FavoritesScreen = props => {
    const {navigation, route} = props;
    const favMeals = useSelector(state => state.meals.favoriteMeals);
    if(favMeals.length === 0 || !favMeals) {
        return (
            <View style={styles.content}>
                <DefaultText>No favorite meals found. Start adding some!</DefaultText>
            </View>
        );
    }
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
    return (
        <MealList listData={favMeals} navigation={navigation}/>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default FavoritesScreen;