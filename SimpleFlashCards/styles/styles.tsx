import { StyleSheet } from 'react-native';

const colors = {
    textDark: "#283618 ",
    textLight: "#606C38",
    background: "#FEFAE0",
    primary: "#BC6C25",
    secondary: "#DDA15E",
};

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
    },
});

export { styles, colors };