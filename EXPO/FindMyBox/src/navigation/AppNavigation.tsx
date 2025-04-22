import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// ### View Imports ###
import HomeScreen from "../screen/HomeScreen";
import RegisterScreen from "../screen/accounts/RegisterScreen";
import LoginScreen from "../screen/accounts/LoginScreen";

const Stack = createNativeStackNavigator();


export default function App() {
    return (
        <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </Stack.Navigator>
        </NavigationContainer>
    );
}