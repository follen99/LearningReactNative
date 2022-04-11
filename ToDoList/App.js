import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

// importo il singolo task che viene visualizzato nella home
import Task from './components/Task';

export default function App() {
  return (
    <View style = {styles.container}>
      <View style={styles.tasksWrapper}>
      {/* task di oggi*/}
      
      <Text style={styles.sectionTitle}>Task di oggi</Text>


      <View style={styles.items}>
        {/** qui è dove andranno visualizzati i task */}
        <Task text = {'task 1'}/>
        <Task text = {'task 2'}/>
        <Task text = {'task 3'}/>

      </View>

    </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',

  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  }
});
