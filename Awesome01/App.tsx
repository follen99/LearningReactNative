import React from "react";

// importo alcuni componenti di react-native
import {
  View,         // per creare un layout
  Text,         // per visualizzare del testo
  SafeAreaView, // per evitare il problema della notch sugli smartphone
  Button,
  Alert
} from "react-native";

function App() {
  /**
   * utilizziamo JSX per creare un layout
   * jsx non è ne html ne xml, è un linguaggio di markup derivato da javascript
   * Ogni tag aperto deve essere chiuso.
   */
  const myView = <SafeAreaView style={{justifyContent: "center", flex: 1}}>
    <View style={{backgroundColor: "red", alignItems: "center", padding: 20, margin: 20}}>
      <Text>
        Hello World! This is my first React Native App.
      </Text>

      <Button
        title="Click me!"
        onPress={buttonClicked}
        accessibilityLabel=""
      />
    </View>
  </SafeAreaView>

  // ritorniamo il layout creato, altrimenti non viene visualizzato nulla.
  return myView;
}

function buttonClicked() {
  Alert.alert("Button clicked!", "You clicked the button!", [
    {text: "OK", 
      onPress: () => {},
      style: "default"
    },
  ]);
}

export default App;