import {Button, View, Text} from "react-native";
import {useEffect, useState} from "react";

import NotesList from "../components/NotesList";
import {fetch} from "expo/fetch";

export default function HomeScreen({navigation}: {navigation: any}) {
  const [notes, setNotes] = useState([]);

  // Fetch notes from the API when the component mounts
  useEffect(() => {
    fetch('http://10.0.2.2:5000/api/notes/')
    .then(response => response.json())
    .then(data => setNotes(data))
    .catch(error => console.error('Error fetching notes:', error));
  }, []);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <NotesList notes={notes}/>
    </View>
  );
}