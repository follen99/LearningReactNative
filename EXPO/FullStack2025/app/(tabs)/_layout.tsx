import React from 'react'
import {StyleSheet, Text, View} from "react-native";
import {Tabs} from "expo-router";

const _Layout = () => {
  return (
      // Dichiariamo un layout per i tab
      <Tabs>
        {/*Tab 1: Home*/}
        <Tabs.Screen
            name="index"
            options={{
              title: 'Home',
              headerShown: false,
            }}
        />

        {/*Tab 1: Search*/}
        <Tabs.Screen
            name="search"
            options={{
              title: 'Search',
              headerShown: false,
            }}
        />

        {/*Tab 1: Saved*/}
        <Tabs.Screen
            name="saved"
            options={{
              title: 'Saved',
              headerShown: false,
            }}
        />

        {/*Tab 1: Profile*/}
        <Tabs.Screen
            name="profile"
            options={{
              title: 'Profile',
              headerShown: false,
            }}
        />
      </Tabs>
  )
}

export default _Layout

const styles = StyleSheet.create({

});