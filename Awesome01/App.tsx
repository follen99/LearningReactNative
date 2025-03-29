import React, { JSX } from 'react';

// importo alcuni componenti di react-native
import {
  View,         // per creare un layout
  Text,         // per visualizzare del testo
  SafeAreaView, // per evitare il problema della notch sugli smartphone
  StyleSheet,   // per gestire gli stili
  useColorScheme, // per gestire il tema chiaro/scuro
  Appearance, // per gestire il tema chiaro/scuro
} from "react-native";

function App(): JSX.Element {
  const colorScheme = useColorScheme();
  const isDarkMode = colorScheme === "dark"; // per sapere se il tema è scuro o chiaro
  const preferredAppearance = Appearance.getColorScheme(); // per sapere se il tema è scuro o chiaro

  return(
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.white : styles.black}> 
        schema colori: {colorScheme} {'\n'}
        tema preferito: {preferredAppearance} {'\n'}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  // possiamo usare questo stile per tutti i contenitori
  container: {
    flex: 1,  // per occupare tutto lo spazio disponibile
    alignItems: "center", // per centrare gli elementi orizzontalmente
    justifyContent: "center", // per centrare gli elementi verticalmente
  },

  textAlignment: {
    textAlign: "center", // per centrare il testo
  },

  white: {
    color: "white", // per il testo bianco
  },

  black: {
    color: "black", // per il testo bianco
  }
})

// esportiamo il componente per poterlo utilizzare in altri file
export default App;