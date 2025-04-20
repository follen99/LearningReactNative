import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from "../screens/HomeScreen";
import AddNoteScreen from "../screens/AddNoteScreen";
import FocusNote from "../screens/FocusNote";
import Entry from "../screens/Entry";

import RegisterScreen from "../screens/accounts/RegisterScreen";
import LoginScreen from "../screens/accounts/LoginScreen";

// Stack navigator
export type RootStackParamList = {
  Notes: undefined;
  AddNoteScreen: undefined;
  FocusNote: undefined;
  RegisterScreen: undefined;
  LoginScreen: undefined;
  Entry: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Entry">
        <Stack.Screen name="Entry" component={Entry}/>
        <Stack.Screen name="Notes" component={HomeScreen}/>
        <Stack.Screen name={"AddNoteScreen"} component={AddNoteScreen}/>
        <Stack.Screen name={"FocusNote"} component={FocusNote}/>

        <Stack.Screen name={"RegisterScreen"} component={RegisterScreen}/>
        <Stack.Screen name={"LoginScreen"} component={LoginScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  )
}