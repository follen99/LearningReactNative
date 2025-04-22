import { Alert, View, StyleSheet } from "react-native";
import { Card, Text, Button } from "react-native-paper";
import { NavigationProp, useFocusEffect, useIsFocused, useNavigation, useRoute } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { RootStackParamList } from "../navigation/AppNavigator";
import { useCallback, useEffect, useState } from "react";

const BASE_SERVICE_URI = "http://10.0.2.2:5000/api/notes";


export default function FocusNote({ route, navigation }: any) {
  const { note } = route.params as { note: any } || {};

  const [stateTitle, setTitle] = useState(note.title);
  const [stateContent, setContent] = useState(note.content);
  const isFocused = useIsFocused();


  console.log("NOTE: ", note);

  useEffect(() => {
    if (isFocused && route.params?.updatedNote) {
      console.log("NOTE: ", route.params.updatedNote);
      setTitle(route.params.updatedNote.title);
      setContent(route.params.updatedNote.content);
    }

  }, [isFocused]);

  if (!note) {
    Alert.alert(
      "Error",
      "Note not found.",
      [
        {
          text: "Go Back",
          onPress: () => navigation.goBack(),
        },
      ],
      { cancelable: false }
    );
    return null;
  }

  const deleteNote = () => {
    AsyncStorage.getItem('jwtToken')
      .then(token => {
        if (!token) {
          Alert.alert("Error", "User not authenticated.");
          return;
        }

        fetch(`${BASE_SERVICE_URI}/${note._id}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`, // Include il token JWT
            'Content-Type': 'application/json',
          },
        })
          .then(response => {
            if (!response.ok) {
              return response.text().then(errorMessage => {
                throw new Error(errorMessage);
              });
            }
            return response.json();
          })
          .then(() => {
            Alert.alert("Success", "Note deleted successfully.");
            navigation.goBack(); // Torna alla schermata precedente
          })
          .catch(error => {
            console.error('Error deleting note:', error);
            Alert.alert("Error", "Error deleting note: " + error.message);
          });
      })
      .catch(error => {
        console.error('Error retrieving JWT Token:', error);
        Alert.alert("Error", "Error retrieving authentication token.");
      });
  };

  return (
    <View style={styles.container}>
      <Card style={{ width: '100%' }}>
        <Card.Content>
          <Text variant="titleLarge" style={{ marginBottom: 10 }}>
            {stateTitle}
          </Text>
          <Text variant="bodyMedium">
            {stateContent}
          </Text>
        </Card.Content>
      </Card>

      <View style={{ marginTop: 20, width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
        {/* Bottone per eliminare la nota */}
        <Button
          mode="contained"
          style={styles.deleteButton}
          onPress={() =>
            Alert.alert(
              "Confirm Delete",
              "Are you sure you want to delete this note?",
              [
                { text: "Cancel", style: "cancel" },
                { text: "Delete", style: "destructive", onPress: deleteNote },
              ]
            )
          }
        >
          Delete Note
        </Button>

        <Button
          mode="contained"
          style={styles.editButton}
          onPress={() => navigation.navigate("EditNoteScreen", { note })}
        >
          Edit Note
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  deleteButton: {
    marginTop: 20,
    backgroundColor: 'red',
  },

  editButton: {
    marginTop: 20,
    backgroundColor: 'green',
  },
});