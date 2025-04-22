import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet, Button } from "react-native";
import { NavigationProp } from "../navigation/types";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function HomeScreen() {
    const navigation = useNavigation<NavigationProp>();

    const handleLogout = async () => {
        try {
            await AsyncStorage.removeItem("jwtToken"); // Rimuovi il token
            navigation.reset({
                index: 0,
                routes: [{ name: "EntryScreen" }], // Reindirizza alla schermata di ingresso
            });
        } catch (error) {
            console.error("Error during logout:", error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                You are logged in! Welcome to "FindMyBox"!
            </Text>

            <TouchableOpacity style={styles.button} onPress={handleLogout}>
                <Text style={styles.buttonText}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 30,
        color: '#333',
    },

    subtitle: {
        fontSize: 16,
        fontWeight: 'normal',
        textAlign: 'center',
        marginBottom: 30,
        color: '#333',
    },

    buttonContainer: {
        width: '100%',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#007BFF',
        padding: 15,
        borderRadius: 8,
        marginBottom: 15,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});