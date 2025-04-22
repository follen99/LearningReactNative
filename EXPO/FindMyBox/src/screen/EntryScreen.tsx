import { useNavigation, useRoute } from "@react-navigation/native";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NavigationProp } from "../navigation/types";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
const BASE_SERVICE_URI = "http://10.0.2.2:5000/api/accounts";

export default function EntryScreen() {
  const route = useRoute();
  const navigation = useNavigation<NavigationProp>();

  useEffect(() => {
    const checkToken = async () => {
        try {
            const token = await AsyncStorage.getItem("jwtToken");
            if (token) {
                const response = await fetch(`${BASE_SERVICE_URI}/validate-token`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });

                const data = await response.json();
                if (response.ok) {
                    // Token valido, naviga alla schermata principale
                    navigation.reset({
                        index: 0,
                        routes: [{ name: "HomeScreen" }],
                    });

                } else {
                    await AsyncStorage.removeItem("jwtToken"); // Rimuovi token non valido
                }
            }
        } catch (error) {
            console.error("Error validating token:", error);
        }
    };

    checkToken();
}, []);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome to "FindMyBox"!
      </Text>

      <Text style={styles.subtitle}>
        This app will help you manage your boxes and their contents.
        {"\n"}
        Please register or login to continue.
      </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.buttonText}>Register</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
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