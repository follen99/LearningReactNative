import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CalculatorScreen from '../screens/CalculatorScreen';
import AboutScreen from '../screens/AboutScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Calculator">
          <Stack.Screen name="Calculator" component={CalculatorScreen}/>
          <Stack.Screen name="About" component={AboutScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}
