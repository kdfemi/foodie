import React from 'react';
import {View, Text, StyleSheet, Button, FlatList, TouchableOpacity} from 'react-native'
import CategoryGridTile from '../components/CategoryGridTiles';
import {CATEGORIES} from '../data/dummy-data';


const CategoriesScreen = props => {
    const {navigation} = props;

    const renderGridItem = (itemData) => {
        return (
            <CategoryGridTile title={itemData.item.title} 
            color={itemData.item.color}
            onSelect={()=> navigation.navigate('CategoryMeals', {
                categoryId: itemData.item.id
            })}/>
        );
    }
    return (
        <FlatList data={CATEGORIES} numColumns={2} keyExtractor={(item, index) => item.id}
        renderItem={renderGridItem}/>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});

export default CategoriesScreen;