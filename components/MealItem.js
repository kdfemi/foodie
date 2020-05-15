import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, ImageBackground } from 'react-native';
import DefaultText from './DefaultText';


const MealItem = props => {
    return (
        <View style={styles.mealItem}>
        <TouchableOpacity onPress={props.onSelectMeal}>
            <View>
                <View style={{...styles.mealRow, ...styles.mealHeader}}>
                    <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
                <DefaultText style={styles.title} numberOfLines={1}>{props.title}</DefaultText>
                </ImageBackground>
                </View>    
                <View style={{...styles.mealRow, ...styles.mealDetail}}>
                    <DefaultText>{props.duration}m</DefaultText>
                    <DefaultText>{props.complexity.toUpperCase()}</DefaultText>
                    <DefaultText>{props.affordability}</DefaultText>
                </View>
            </View>
        </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden'
    },
    mealRow: {
        flexDirection: 'row',
        
    },
    mealHeader: {
        height: '85%'
    },
    mealDetail: {
        height: '15%',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
        textAlign: 'center'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    }
});

export default MealItem;