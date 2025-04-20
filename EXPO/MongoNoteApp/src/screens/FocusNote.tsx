import {View} from "react-native";
import {Card, Text} from "react-native-paper";
import {useRoute} from "@react-navigation/native";

export default function FocusNote() {
  const route = useRoute();
  const {note} = route.params as {note: any};
  console.log("NOTE: ", note);

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