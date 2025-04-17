import {FlatList, Text, TouchableOpacity, View} from "react-native";
import {Card} from "react-native-paper";
import FocusNote from "../screens/FocusNote.tsx";


const NotesList = ({ notes, navigation}) => {
  return (
      <FlatList
          data={notes}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate(FocusNote)}>
                <NoteCard item={item} />
              </TouchableOpacity>
          )}
          // contentContainerStyle={styles.container}
      />
  );
}

/**
 * Card for displaying a note
 * @param item              single note
 * @returns {JSX.Element}   rendered card
 * @constructor             none
 */
const NoteCard = ({ item }) => {
  return (
      <Card style={{margin: 10}}>
        <Card.Content>
          <Text variant="titleLarge">{item.title}</Text>
          <Text variant="bodyMedium">{item.content}</Text>
        </Card.Content>
      </Card>
  )
}


export default NotesList;