import{ Image, ScrollView, StyleSheet, Text, View }from 'react-native';

import { styles, colors } from '../styles/styles';

import React from 'react';




export default function ElevatedCards() {
    return (
        <View>
            <Text style={styles.headingText}>
                Cards with images!
            </Text>

            <View style={styles.container}>
                <View style={[localStyles.card, styles.importantCard]}>
                    <Text style={localStyles.imageCardText}>
                        Tokyo
                    </Text>

                    <Image
                        source={{uri: "https://tinyurl.com/3wd2ykm9"}}
                        style={localStyles.cardImage}
                    />
                </View>
            </View>
        </View>
    )
}

const localStyles = StyleSheet.create({
    imageCardText:{
        flex: 1,
        justifyContent: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },

    card:{
        width: 200,
        height: 150,
        borderRadius: 15,
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
    },

    cardImage: {
        width: "90%",
        height: 100,
        borderRadius: 15,
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
    },
})

