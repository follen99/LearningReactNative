import react from "react";
import {View, Text, StyleSheet} from 'react-native';
import { Button, Touchable, TouchableHighlight, TouchableOpacity } from "react-native";
import { TouchableWithoutFeedback } from "react-native-web";

/**
 * 
 * @param {*} props gli argomenti da visualizzare
 * @returns la view
 */
const Task = (props) => {
    return(
        // visualizzo il testo passato come argomento
        
            <View style = {styles.item} onPress={() => console.log("click rilevato!")}>
                <View style = {styles.itemLeft}>
                    {/*<TouchableOpacity style = {styles.square}></TouchableOpacity>
                    
                    <Button title="" style={styles.square} onPress={() => console.log("click rilevato!")}></Button>

                    <Text style = {styles.itemText}>{props.text}</Text>*/}

                    <TouchableOpacity style={styles.square}></TouchableOpacity>

                    <Text style = {styles.itemText}>{props.text}</Text>
                </View>

                <View style = {styles.circular}></View>
            </View>
    
    )
}



/**
 * gli stili grafici del componente
 */
const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 10,
    },
    itemText: {
        maxWidth: '80%'
    },
    circular: {
        width: 16,
        height: 16,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5
    },

});

export default Task;    // in questo modo può essere referenziato in altri files