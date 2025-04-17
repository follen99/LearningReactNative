import {FlatList, Text, View} from "react-native";
import {Card} from "react-native-paper";

/*const NotesList = ({ notes }) => {
  return (
      <FlatList
          data={notes}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
              <View>
                <Text>{item.title}</Text>
                <Text>{item.content}</Text>
              </View>
          )}
          // contentContainerStyle={styles.container}
      />
  );
}*/

const NotesList = ({ notes }) => {
  return (
      <FlatList
          data={notes}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
              <Card style={{margin: 10}}>
                <Card.Content>
                  <Text variant="titleLarge">{item.title}</Text>
                  <Text variant="bodyMedium">{item.content}</Text>
                </Card.Content>
              </Card>
          )}
          // contentContainerStyle={styles.container}
      />
  );
}


export default NotesList;