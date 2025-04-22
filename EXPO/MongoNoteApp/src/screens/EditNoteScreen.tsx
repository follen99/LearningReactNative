import AsyncStorage from "@react-native-async-storage/async-storage";
import { CommonActions } from "@react-navigation/native";
import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { TextInput, Button } from "react-native-paper";


const BASE_SERVICE_URI = "http://10.0.2.2:5000/api/notes";

export default function EditNoteScreen({ route, navigation }: any) {
    const { note } = route.params;

    // Usa lo stato per gestire i valori di input
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);

    const updateNote = () => {
        if (!title || !content) {
            Alert.alert("Error", "Please fill in both title and content fields.");
            return;
        }

        AsyncStorage.getItem('jwtToken')
            .then(token => {
                if (token) {
                    console.log('JWT Token:', token);
                    // You can use the token here, e.g., include it in the fetch headers
                    fetch(`${BASE_SERVICE_URI}/${note._id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${token}`,
                        },
                        body: JSON.stringify({
                            title: title,
                            content: content,
                        }),
                    })
                        .then(response => {
                            if (!response.ok) {
                                return response.text().then(errorMessage => {
                                    throw new Error(errorMessage);
                                });
                            }
                            return response.json();
                        })
                        .then(() => {;
                            const updatedNote = { ...note, title, content };
                            navigation.dispatch(
                                CommonActions.reset({
                                  index: 1,
                                  routes: [
                                    { name: 'Notes' }, // prima schermata nello stack
                                    { name: 'FocusNote', params: { note: updatedNote } }, // quella attiva
                                  ],
                                })
                              );
                        })
                        .catch(error => {
                            console.error('Error adding note:', error);
                            Alert.alert('Error', 'Error adding note: ' + error.message);
                        });
                } else {
                    console.warn('No JWT Token found');
                }
            })
            .catch(error => console.error('Error retrieving JWT Token:', error));
    };

    return (
        <View style={styles.container}>
            <TextInput
                label="Title"
                value={title}
                onChangeText={setTitle}
                style={styles.input}
            />
            <TextInput
                label="Content"
                value={content}
                onChangeText={setContent}
                multiline
                style={styles.input}
            />
            <Button mode="contained" onPress={updateNote} style={styles.button}>
                Save Changes
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        marginBottom: 20,
    },
    button: {
        marginTop: 20,
    },
});