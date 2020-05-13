import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealScreen from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import Colors from '../constants/Colors';
import { Platform, Text } from 'react-native';
const Stack = createStackNavigator();

const MealsNavigator = () => {
return (
    <NavigationContainer >
        <Stack.Navigator initialRouteName="Categories" screenOptions={{
               headerStyle: {
                backgroundColor: Platform.OS === 'android'? Colors.primaryColor : ''
            },
            headerTintColor: Platform.OS === 'android'? 'white' : Colors.primaryColor,
            headerBackTitle: 'Back',
            
        }} >
            <Stack.Screen name="Categories" component={CategoriesScreen} options={{
                title: 'Meal Categories'}} />
            <Stack.Screen name="CategoryMeals" component={CategoryMealScreen}/>
            <Stack.Screen name="MealDetail" component={MealDetailScreen} options={{
                headerRight: props => <Text>Hello</Text>
            }}/>
        </Stack.Navigator>
    </NavigationContainer>
);
}

export default MealsNavigator;
