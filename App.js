import React, {useState} from 'react';
import { StyleSheet, Text, View, StatusBar} from 'react-native';
import * as Fonts from 'expo-font';
import {AppLoading} from 'expo';
import MealsFavTabNavigator from './navigations/MealsNavigator'
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux'
import mealsReducer from './store/reducers/meals'

const rootReducer = combineReducers({
  meals: mealsReducer
})
const store = createStore(rootReducer);
const fetchFonts = () => {
  return Fonts.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);
  if(!fontLoaded) {
    return <AppLoading 
    startAsync={() => fetchFonts()}  onFinish={() => {setFontLoaded(true)}}/>
  }
  return (
    <Provider store={store}>
      <MealsFavTabNavigator/>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
