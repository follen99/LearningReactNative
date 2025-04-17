import {View} from "react-native";
import NoteModel from "../model/NoteModel";
import {Card, Text} from "react-native-paper";

export default function FocusNote(/*{note}: {note: any}*/) {
  // const { note } = route.params;

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {/*<Card style={{ width: '100%' }}>
        <Card.Content>
          <Text variant="titleLarge" style={{ marginBottom: 10 }}>
            {note.title}
          </Text>
          <Text variant="bodyMedium">
            {note.content}
          </Text>
        </Card.Content>
      </Card>*/}
    </View>
  );
}