import {FlatList, Text, StyleSheet} from "react-native";

const NotesList = ({ notes }) => {
  return (
      <FlatList
          data={notes}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
              <Text style={styles.note}>{item.title}</Text>
          )}
          contentContainerStyle={styles.container}
      />
  );
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  note: { padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' },
});

export default NotesList;