import React from 'react';
import {View, Text, StyleSheet} from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import HeaderButton from '../components/HeaderButton';

const FilterScreen = props => {
    const {navigation, route} = props;
    navigation.setOptions({
        title: 'Filter Meals',
        headerLeft: (props) => {
            return(
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title="Menu" iconName="ios-menu" onPress={() => {navigation.toggleDrawer()}} iconSize={32}/>
                </HeaderButtons>
            );
        }
    });
    return (
        <View style={styles.screen}>
            <Text>The Meal Filter Screen!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default FilterScreen;