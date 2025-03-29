import{ 
    Image, 
    ScrollView, 
    StyleSheet, 
    Text, 
    TouchableOpacity, 
    View 
}from 'react-native';


import React, { useState } from 'react';


export default function Buttons() {
    /**
     * useState è un hook di React che permette di gestire lo stato dei componenti
     * quando si usa useState, si crea una variabile di stato e una funzione per aggiornarla
     * setCount è una funzione asincrona!
     */
    var [count, setCount] = useState(0);

    // funzione che viene chiamata quando si preme il bottone
    const onPressHandler = () => {
        if (count >= 10) {
            console.log("You reached the maximum number of presses!");
            setCount(0);
            return;
        }
        console.log("Button pressed! Count: " + count);
        setCount(count + 1);
    }

    return (
        <View>
            <Text style={styles.headingText}>
                This view has a set of different buttons
            </Text>

            <View style={styles.container} >
                <View>
                    <Text style={{textAlign: "center"}}>
                        You pressed the button {count} time{count > 1 ? 's' : ''}
                    </Text>

                    <TouchableOpacity style={styles.buttonStyle} onPress={onPressHandler}>
                        <Text>
                            Press me!
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },

    headingText: {
        color: "#283618",
        fontSize: 20,
        fontWeight: "bold",
        marginLeft: 10,
    },

    buttonStyle: {
        width: 150,
        height: 50,
        borderRadius: 15,
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#BC6C25",
        elevation: 5,
    },
})

