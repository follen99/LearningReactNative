import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Platform, TextInput } from 'react-native';
import { KeyboardAvoidingView, TouchableOpacity, Keyboard, ScrollView, SafeAreaView } from 'react-native';
import {useState} from 'react';

// importo il singolo task che viene visualizzato nella home
import Task from './components/Task';

export default function App() {
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  // effettuiamo il log del task
  const handleAddTask = () => {
    if(task){
      // aggiunge il nuovo task all'array dello state taskItems
      setTaskItems([...taskItems, task])
      setTask(null);  // pulisco il testo
    }
  }
  
  // eliminiamo il task
  const completeTask = (index) => {
    let itemsCopy = [...taskItems];
    itemsCopy.splice(index, 1); // elimina un elemento dall'indice fornito
    setTaskItems(itemsCopy);
  }

  return (
    <View style = {styles.container}>
      <View style={styles.tasksWrapper}>
      {/* task di oggi*/}
      
        <Text style={styles.sectionTitle}>Task di oggi</Text>


        <View style = {styles.scrollViewContainer}>
          <ScrollView style={styles.items}>
            {/** qui è dove andranno visualizzati i task */}
            
            {/*<Task text = {'task 1'}/>
            <Task text = {'task 2'}/>
            <Task text = {'task 3'}/>*/}

            {/** iteriamo sulla collezione di task e visualizziamo ogni task */}
            {
              taskItems.map((item, index) =>
                {
                  return (
                    <TouchableOpacity key = {index} onPress={() => completeTask(index)}>
                      <Task text = {item}></Task>
                    </TouchableOpacity>
                  )
                }
              )
            }

          </ScrollView>
        </View>

      </View>

      {/** aggiungere un task */}
      <KeyboardAvoidingView 
          keyboardVerticalOffset={20}
          behavior={Platform.OS === "ios" ? "padding" : "height"} 
          style={styles.writeTaskWrapper}>

        {/** con setTask impostiamo il testo dello stato */}
        <TextInput style={styles.textInput} onSubmitEditing = {() => handleAddTask()} placeholder={'Aggiungi un task'} value = {task}  onChangeText = {text => setTask(text)}></TextInput>

        {/** questo è il nostro button di add,
         * quando avviene un tocco, viene chiamata la funzione handleAddTask
         */}
        <TouchableOpacity onPress={() => handleAddTask()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>

          </View>

        </TouchableOpacity>
      </KeyboardAvoidingView>

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
    fontSize: 48,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
    padding: 5,
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textInput: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: '#FFF',
    borderRadius: 60,

    shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 5,
  },
  shadowOpacity: 0.34,
  shadowRadius: 6.27,

  elevation: 10,
  },
  addWrapper: {
    paddingVertical: 15,
    paddingHorizontal: 15,

    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  addText: {

  },

  scrollViewContainer: {
    height: '100%',
  },
});
