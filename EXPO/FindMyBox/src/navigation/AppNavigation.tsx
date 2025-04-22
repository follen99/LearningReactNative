import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// ### View Imports ###
import EntryScreen from "../screen/EntryScreen";
import RegisterScreen from "../screen/accounts/RegisterScreen";
import LoginScreen from "../screen/accounts/LoginScreen";

import HomeScreen from "../screen/HomeScreen";

const Stack = createNativeStackNavigator();


export default function App() {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="EntryScreen">
            <Stack.Screen name="EntryScreen" component={EntryScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />

            <Stack.Screen name="HomeScreen" component={HomeScreen} />
        </Stack.Navigator>
        </NavigationContainer>
    );
}