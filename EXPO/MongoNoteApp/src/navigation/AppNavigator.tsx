import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreen";
import AddNoteScreen from "../screens/AddNoteScreen";

// Stack navigator
const Stack = createNativeStackNavigator();

export default function AppNavigator(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Notes">
        <Stack.Screen name="Notes" component={HomeScreen}/>
        <Stack.Screen name={"AddNoteScreen"} component={AddNoteScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}