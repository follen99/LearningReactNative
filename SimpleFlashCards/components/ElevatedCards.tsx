import{ ScrollView, StyleSheet, Text, View }from 'react-native';

import { styles, colors } from '../styles/styles';

import React from 'react';




export default function ElevatedCards() {
    return (
        <View>
            <Text style={styles.headingText}>
                You can scroll this view
            </Text>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={[styles.card, styles.importantCard]}>
                    <Text style={styles.cardText}>
                        This is a flat card text
                    </Text>


                </View>

                <View style={[styles.card, styles.secondaryCard]}>
                    <Text style={styles.cardText}>
                        This is a not so important card
                    </Text>
                </View>

                <View style={[styles.card, styles.infoCard]}>
                    <Text style={styles.cardText}>
                        This is a dumb card
                    </Text>
                </View>
            </ScrollView>
            
        </View>
    )
}

