import {Alert, View} from "react-native";
import {Card, Text} from "react-native-paper";
import {useNavigation, useRoute} from "@react-navigation/native";

export default function FocusNote() {
  const route = useRoute();
  const navigation = useNavigation();
  const {note} = route.params as {note: any} || {};
  console.log("NOTE: ", note);

  if (!note) {
    // Mostra un messaggio di errore e torna indietro
    Alert.alert(
      "Error",
      "Note not found.",
      [
        {
          text: "Go Back",
          onPress: () => navigation.goBack(),
        },
      ],
      {cancelable: false}
    );
    return null; // Ritorna null per evitare di renderizzare il contenuto
  }

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Card style={{ width: '100%' }}>
        <Card.Content>
          <Text variant="titleLarge" style={{ marginBottom: 10 }}>
            {note.title}
          </Text>
          <Text variant="bodyMedium">
            {note.content}
          </Text>
        </Card.Content>
      </Card>
    </View>
  );
}