import{ Image, ScrollView, StyleSheet, Text, View }from 'react-native';

import { styles, colors } from '../styles/styles';

import React from 'react';




export default function ElevatedCards() {
    return (
        <View>
            <Text style={styles.headingText}>
                Cards with images!
            </Text>

            <ScrollView style={{ marginBottom: 60 }} >
                <View style={localStyles.container}>
                    <View style={localStyles.mainCard}>
                        <Image 
                            source={{ uri: 'https://i0.wp.com/tripnroll.net/wp-content/uploads/2023/09/giappone.jpg?fit=1300%2C865&ssl=1' }}
                            style={localStyles.cardPicture}
                        />

                        <Text style={localStyles.cardTextHeader}>
                            Tokyo
                        </Text>

                        <Text style={localStyles.cardTextBody}>
                            It always rains in Tokyo, but it is a beautiful city.
                        </Text>


                        <Text style={localStyles.cardTextSubtitle}>
                            What can you do in Tokyo?
                        </Text>

                        <Text style={localStyles.cardTextBody}>
                            Pretty much everything, from shopping to eating sushi.
                        </Text>
                        
                    </View>
                </View>

                <View style={localStyles.container}>
                    <View style={localStyles.mainCard}>
                        <Image 
                            source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/1200px-New_york_times_square-terabass.jpg' }}
                            style={localStyles.cardPicture}
                        />

                        <Text style={localStyles.cardTextHeader}>
                            New York
                        </Text>

                        <Text style={localStyles.cardTextBody}>
                            It is always sunny in New York, but it is a beautiful city.
                        </Text>


                        <Text style={localStyles.cardTextSubtitle}>
                            What can you do in NY?
                        </Text>

                        <Text style={localStyles.cardTextBody}>
                            Pretty much everything, from shopping to eating pizza.
                        </Text>
                        
                    </View>
                </View>

            </ScrollView>
        </View>
    )
}

const localStyles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        padding: 10,
        alignItems: "center",

    },

    mainCard: {
        width: "100%",
        height: 400,
        borderRadius: 20,
        backgroundColor: colors.background,
        elevation: 5,
    },

    cardPicture: {
        width: "100%",
        height: "40%",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        resizeMode: "cover",
    },

    cardTextHeader:{
        color: colors.textDark,
        fontSize: 20,
        fontWeight: "bold",
        margin: 5,
        textAlign: "left",
    },

    cardTextSubtitle:{
        color: colors.textDark,
        fontSize: 16,
        margin: 5,
        marginLeft: 8,
        textAlign: "left",
    },

    cardTextBody:{
        color: colors.textLight,
        fontSize: 14,
        margin: 5,
        marginLeft: 10,
        textAlign: "left",
    }


    
})

