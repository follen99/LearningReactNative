import React from "react";
import {
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View
}from "react-native";

const colors = {
    textDark: "#283618 ",
    textLight: "#606C38",
    background: "#FEFAE0",
    primary: "#BC6C25",
    secondary: "#DDA15E",
}

function FlatCards() {
    return (
        <View>
            <Text style={styles.headingText}>
                You cannot scroll this view
            </Text>

            <View style={styles.container}>
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
            </View>

        </View>
    )

}

// questa funzione serve per creare lo stile dei componenti
// è presente anche nella cartella ../styles/styles.tsx
const styles = StyleSheet.create({
    headingText: {
        color: colors.textDark,
        fontSize: 20,
        fontWeight: "bold",
    },

    container: {
        flex: 1,
        flexDirection: "row",
    },

    card: {
        width: 150,
        height: 100,
        borderRadius: 15,
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
    },

    importantCard: {
        backgroundColor: colors.primary,
    },

    secondaryCard: {
        backgroundColor: colors.secondary,
    },

    infoCard: {
        backgroundColor: colors.textLight,
    },

    cardText: {
        color: colors.textDark,
        fontSize: 16,
        fontWeight: "bold",
        margin: 4,
        textAlign: "center",
    }
});
export default FlatCards;