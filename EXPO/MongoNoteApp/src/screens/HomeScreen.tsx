import {Button, View, Text, StyleSheet} from "react-native";
import {useEffect, useState} from "react";

import NotesList from "../components/NotesList";
import {fetch} from "expo/fetch";
import AddNoteScreen from "./AddNoteScreen";
import { useIsFocused } from "@react-navigation/native";
const BASE_SERVICE_URI = "http://10.0.2.2:5000/api/notes";

export default function HomeScreen({navigation}: {navigation: any}) {
  const [notes, setNotes] = useState([]);
  const isFocused = useIsFocused();

  // Fetch notes from the API when the component mounts
  useEffect(() => {
    if (isFocused){
      /*
    L'indirizzo 10.0.2.2 è usato per accedere al localhost dell'emulatore Android.
     */
      console.log("FETCHING from:" + BASE_SERVICE_URI + '/')
      fetch(BASE_SERVICE_URI + '/')
      .then(response => response.json())
      .then(data => setNotes(data))
      .catch(error => console.error('Error fetching notes:', error));
    }
  }, [isFocused]);

  return (
    <View style={styles.list}>
      <Text>Home Screen</Text>
      <NotesList notes={notes} navigation={navigation}/>

      <Button title={"Add Note"} onPress={() => navigation.navigate(AddNoteScreen)}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  }
})