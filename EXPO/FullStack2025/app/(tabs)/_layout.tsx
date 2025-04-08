import React from 'react'
import {Image, ImageBackground, StyleSheet, Text, View} from "react-native";
import {Tabs} from "expo-router";
import {images} from "@/constants/images";
import {useTranslation} from "react-i18next";
import {icons} from "@/constants/icons";

/**
 * IMPORTANTE: per usare una costante come componente, bisogna dichiarare
 * la costante usando la prima lettera maiuscola, altrimenti non viene!
 * @constructor
 */
const TabIcon = ({focused, icon, title}: any) => {
  if (focused){
    return (
        <ImageBackground
            // uso dalle costanti le immagini presenti in assets
            // e specifico quale immagine voglio
            source={images.highlight}
            className="flex flex-row w-full flex-1 min-w-[112px] min-h-14 mt-4 justify-center items-center rounded-full overflow-hidden"
        >
          <Image source={icon} tintColor={"#151312"} className={"size-5"}/>

          <Text className={"text-secondary text-base font-bold ml-2"}>
            {/* uso le costanti per le traduzioni */}
            {title}
          </Text>

        </ImageBackground>
    )
  }else {
    return (
        <View className={"size-full justify-center items-center mt-4 rounded-full"}>
          <Image source={icon} tintColor={"#bfb6b2"} className={"size-5"}/>
        </View>
    )
  }

}

/**
 * Layout per i tab
 */
const _Layout = () => {
  return (
      // Dichiariamo un layout per i tab
      <Tabs
          screenOptions={{
            tabBarShowLabel: false,
            tabBarItemStyle: {
              width: '100%',
              height: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            },
            tabBarStyle:{
              backgroundColor: '#0f0d23',
              borderRadius: 50,
              marginHorizontal: 20,
              marginBottom: 36,
              height: 52,
              position: 'absolute',
              overflow: 'hidden',
              borderWidth: 1,
              borderColor: '#0f0d23',
            }
          }}
      >


        {/*Tab 1: Home*/}
        <Tabs.Screen
            name="index"
            options={{
              title: 'Home',
              headerShown: false,

              tabBarIcon: ({focused}) => (
                  <TabIcon
                    focused={focused}
                    icon={icons.home}
                    title={"Home"}
                  />
              ),
            }}
        />

        {/*Tab 1: Search*/}
        <Tabs.Screen
            name="search"
            options={{
              title: 'Search',
              headerShown: false,

              tabBarIcon: ({focused}) => (
                  <TabIcon
                      focused={focused}
                      icon={icons.search}
                      title={"Search"}
                  />
              ),
            }}
        />

        {/*Tab 1: Saved*/}
        <Tabs.Screen
            name="saved"
            options={{
              title: 'Saved',
              headerShown: false,

              tabBarIcon: ({focused}) => (
                  <TabIcon
                      focused={focused}
                      icon={icons.save}
                      title={"Saved"}
                  />
              ),
            }}
        />

        {/*Tab 1: Profile*/}
        <Tabs.Screen
            name="profile"
            options={{
              title: 'Profile',
              headerShown: false,

              tabBarIcon: ({focused}) => (
                  <TabIcon
                      focused={focused}
                      icon={icons.person}
                      title={"Profile"}
                  />
              ),
            }}
        />
      </Tabs>
  )
}

export default _Layout

const styles = StyleSheet.create({

});