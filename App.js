import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Fonts from 'expo-font';
import {AppLoading} from 'expo';

import MealsNavigator from './navigations/MealsNavigator'


const fetchFonts = () => {
  console.log('Called')
  console.log('Called')
  console.log('Called')
  console.log('Called')
  Fonts.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  })
}

export default function App() {

  const [fontLoaded, setFontLoaded] = useState(false);
  if(fontLoaded === false) {
  console.log('Entered')
    return <AppLoading startAsync={fetchFonts}  onFinish={setFontLoaded(true)}/>
  }
  return (
    <MealsNavigator/>
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
