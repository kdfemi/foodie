import React, { useState, useEffect, useCallback } from 'react';
import {View, Text, StyleSheet, Switch, Platform} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';
import Colors from '../constants/Colors';

const FilterSwitch = props => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch
            trackColor={{true: Colors.primaryColor}}
            value={props.state} onValueChange={props.onChange}
            thumbColor={Platform.OS === 'android'? Colors.primaryColor : ''}/>
        </View>
  
    );
};

const FilterScreen = props => {

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    const {navigation, route} = props;

    const saveFilters = useCallback(() => {
        const appliedFilter = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            isVegetarian: isVegetarian
        };
        console.log('SAVED')

    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

    useEffect(() => {
        navigation.setParams({
            save: saveFilters
        });
    }, [saveFilters])

    navigation.setOptions({
        title: 'Filter Meals',
        headerLeft: (props) => {
            return(
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title="Menu" iconName="ios-menu" 
                    onPress={() => {navigation.toggleDrawer()}} iconSize={32}/>
                </HeaderButtons>
            );
        },
        headerRight: (props) => {
            return(
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title="Save" iconName="ios-save"
                    onPress={() => {
                        route.params.save();
                    }} iconSize={32}/>
                </HeaderButtons>
            );
        }
    });

    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterSwitch label='Gluten-free' state={isGlutenFree} onChange={setIsGlutenFree}/>
            <FilterSwitch label='Lactose-free' state={isLactoseFree} onChange={setIsLactoseFree}/>
            <FilterSwitch label='Vegan' state={isVegan} onChange={setIsVegan}/>
            <FilterSwitch label='Vegetarian' state={isVegetarian} onChange={setIsVegetarian}/>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '80%',
        marginVertical: 15
    }
});

export default FilterScreen;