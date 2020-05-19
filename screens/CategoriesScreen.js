import React from 'react';
import {StyleSheet, FlatList} from 'react-native'
import CategoryGridTile from '../components/CategoryGridTiles';
import {CATEGORIES} from '../data/dummy-data';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const CategoriesScreen = props => {
    const {navigation} = props;
    navigation.setOptions({
        headerLeft: (props) => {
            return (<HeaderButtons HeaderButtonComponent={HeaderButton}>
                <Item title="Menu" iconName="ios-menu" onPress={() => {navigation.toggleDrawer()}} iconSize={32}/>
            </HeaderButtons>);
        }
    })

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