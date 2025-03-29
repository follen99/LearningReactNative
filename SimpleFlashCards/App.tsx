/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import ImagesCards from './components/ImagesCards';


function App(): React.JSX.Element {
  return (
    <SafeAreaView style={{ paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0 }}>
      <ScrollView>
        <StatusBar barStyle="dark-content" />
        <FlatCards />

        <ElevatedCards />

        <ImagesCards />

      </ScrollView>
    </SafeAreaView>

  )
}


const styles = StyleSheet.create({
  defaultSafeArea: {
    flex: 1, // Occupa tutto lo schermo
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0, // Aggiunge spazio sopra su Android
    backgroundColor: 'white', // Puoi cambiare colore in base alla tua UI
  },
});

export default App;
