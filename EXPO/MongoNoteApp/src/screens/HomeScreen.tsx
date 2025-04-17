import {Button, View, Text} from "react-native";
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
      console.log("STAMPA:" + BASE_SERVICE_URI + '/')
      fetch(BASE_SERVICE_URI + '/')
      .then(response => response.json())
      .then(data => setNotes(data))
      .catch(error => console.error('Error fetching notes:', error));
    }
  }, [isFocused]);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <NotesList notes={notes}/>

      <Button title={"Add Note"} onPress={() => navigation.navigate(AddNoteScreen)}></Button>
    </View>
  );
}