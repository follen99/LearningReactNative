import {StyleSheet, View, Text, Alert} from "react-native";
import {TextInput, Button} from "react-native-paper";
import {useState} from "react";
import {fetch} from "expo/fetch";
import { useNavigation } from "@react-navigation/native";
const BASE_SERVICE_URI = "http://10.0.2.2:5000/api/notes";

export default function AddNoteScreen() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const navigation = useNavigation();


  return (
    <View>
      <Text style={styles.title}>Add new note</Text>

      {/*<TextInput
          style={styles.noteMainText}
          placeholder="Note title"
          value={title}
          onChangeText={setTitle}
      />

      <TextInput
          style={styles.noteMainText}
          placeholder="Write your note here..."
          multiline
          value={content}
          onChangeText={setContent}
      />*/}

      <TextInput
          label={"Note title"}
          value={title}
          onChangeText={setTitle}
          numberOfLines={1}
          style={{
            margin: 10,
          }}
      />

      <TextInput
          label={"Note content"}
          value={content}
          onChangeText={setContent}
          multiline={true}
          style={{
            margin: 10,
          }}
      />

      <Button
          mode="contained"
          onPress={() => console.log('Pressed')}
          style={{margin: 10}}
          onPressOut={() => addNote(title, content, {navigation})}
      >
        Confirm
      </Button>
    </View>
  );
}

function addNote(title: string, content: string, {navigation}: {navigation:any} ) {
  if (!title || !content) {
    Alert.alert('Error', 'Please fill in both title and content fields.');
    return;
  }
  fetch(BASE_SERVICE_URI + "/", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: title,
      content: content,
      date: new Date(),
    }),
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to add note');
    }
    return response.json();
  })
  .then(() => {
    navigation.goBack();
  })
  .catch(error => {
    console.error('Error adding note:', error);
    Alert.alert('Error', 'Error adding note: ' + error.message);
  });
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    margin: 5,
  },

  noteMainText: {
    fontSize: 18,
    backgroundColor: "#969696",
    borderRadius: 20,
    elevation: 5,
    margin: 10,
    padding: 20,
  },

  confirmButton: {
    backgroundColor: "#6ae06a",
    borderRadius: 20,
    elevation: 5,
    margin: 10,
    padding: 20,
    alignItems: 'center',
  },

  confirmButtonText: {
    fontSize: 18,
    color: "#000000",
    fontWeight: 'bold',
    textAlign: 'center',
  }

})