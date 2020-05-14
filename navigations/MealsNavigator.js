import React from 'react'
import { Platform, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {Ionicons} from '@expo/vector-icons';
import HeaderButton from '../components/HeaderButton';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoriteScreen from '../screens/FavoritesScreen';
import FilterScreen from '../screens/FilterScreen';

import Colors from '../constants/Colors';
const Stack = createStackNavigator();

const MealsNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Categories" screenOptions={stackNavigationSettings} >
            <Stack.Screen name="Categories" component={CategoriesScreen} options={{
                title: 'Meal Categories'}} />
            <Stack.Screen name="CategoryMeals" component={CategoryMealScreen}/>
            <Stack.Screen name="MealDetail" component={MealDetailScreen} options={{
                headerRight: props => 
                <HeaderButtons HeaderButtonComponent={HeaderButton}>
                    <Item title='Favorite' iconName='ios-star' onPress={() => console.log('Worked')}/>
                </HeaderButtons>
            }}/>
        </Stack.Navigator>
    );
};

const FavoriteStackNavigator = () => {
   return (
    <Stack.Navigator initialRouteName="Favorites" screenOptions={stackNavigationSettings}>
        <Stack.Screen name="Favorites" component={FavoriteScreen}/>
        <Stack.Screen name="MealDetail" component={MealDetailScreen}/>
    </Stack.Navigator>
    );
}

const FilterStackNavigator = () => {
    return (
        <Stack.Navigator  screenOptions={stackNavigationSettings}>
            <Stack.Screen name="Filter" component={FilterScreen} options={{title: 'Filter Meals'}}/>
        </Stack.Navigator>
        );
}

let Tab = createBottomTabNavigator();
if(Platform.OS === 'android') {
    Tab = createMaterialBottomTabNavigator();
}

const MealsFavTabNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="Meals" 
        tabBarOptions={{
            activeTintColor:  Colors.accentColor,
            labelStyle: {
                fontFamily: 'open-sans'
            }
        }}
        shifting={true}
        barStyle={{ backgroundColor: Colors.primaryColor }} 
        activeColor='white'
        >
            <Tab.Screen component={MealsNavigator} name="Meals" options={
                {
                    tabBarIcon: (props) => { 
                        return <Ionicons name="ios-restaurant" size={25} color={props.color}/>
                    },
                    tabBarLabel: Platform.OS === 'android'? <Text style={{fontFamily: 'open-sans'}}>Meals</Text> : 'Meals'
                }
            }/>
            <Tab.Screen component={FavoriteStackNavigator} name="Favorites" options={
                {
                    tabBarIcon: (props) => { 
                        return <Ionicons name="ios-star" size={25} color={props.color}/>
                    },
                    tabBarColor: Colors.accentColor
                }
            }/>
        </Tab.Navigator>
    );
}

const SideNav = createDrawerNavigator();
const MainNavigator = () => {
    return(
    <NavigationContainer>
        <SideNav.Navigator  drawerContentOptions={
            {activeTintColor: Colors.accentColor,
                labelStyle: {fontFamily: 'open-sans-bold'}
            }}>
            <SideNav.Screen name ="MealsFavs" component={MealsFavTabNavigator} 
            options={{}}/>
            <SideNav.Screen name ="Filter" component={FilterStackNavigator}/>
        </SideNav.Navigator>
    </NavigationContainer>
    );
}

const stackNavigationSettings = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android'? Colors.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android'? 'white' : Colors.primaryColor,
    headerBackTitle: 'Back',
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    }
}
export default MainNavigator;
