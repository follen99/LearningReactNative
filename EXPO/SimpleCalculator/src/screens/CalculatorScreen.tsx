import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from "../constants/theme";
import * as assert from "node:assert";

export default function CalculatorScreen({navigation}: { navigation: any }): JSX.Element {
  const numbersButtons = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9'],
  ];

  const operatorsButtons = ['+', '-', '*', '/'];

  // dichiarazione di variabili che possono cambiare
  const [display, setDisplay] = useState('0');
  const [operand, setOperand] = useState<number | null>(null);
  const [operator, setOperator] = useState<string | null>(null);

  /**
   * Usato per gestire il click sui numeri
   *
   * @param button Il numero premuto
   */
  const pressButton = (button: string) => {
    console.log(`Pressed ${button}`);
    if (display === '0') {
      setDisplay(button);
    }
    else {
      setDisplay(display + button);
    }
  }

  const pressOperator = (operation: any) => {
    setOperand(parseFloat(display))
    setOperator(operation)
    setDisplay('0');
  }

  const calculate = () => {
    const num = parseFloat(display);
    switch (operator) {
      case '+':
        setDisplay(((operand ?? 0) + num).toFixed(4).toString());
        break;
      case '-':
        setDisplay(((operand ?? 0) - num).toFixed(4).toString());
        break;
      case '*':
        setDisplay(((operand ?? 0) * num).toFixed(4).toString());
        break;
      case '/':
        setDisplay(((operand ?? 0) / num).toFixed(4).toString());
        break;
    }
    setOperand(null);
    setOperator(null);
  }
  return (
      <View>
        <View style={styles.display}>
          <Text style={styles.displayText}>
            {display}
          </Text>
        </View>

        <View style={{ flexDirection: 'row' }}>
          {/* Sezione dei numeri */}
          <View style={{ flex: 3 }}>
            {numbersButtons.map((row, rowIndex) => (
                <View key={rowIndex} style={styles.row}>
                  {row.map((button, buttonIndex) => (
                      <TouchableOpacity
                          key={buttonIndex}
                          style={styles.button}
                          onPress={() => pressButton(button)}
                      >
                        <Text style={styles.buttonText}>{button}</Text>
                      </TouchableOpacity>
                  ))}
                </View>
            ))}
            <View style={styles.row}>
              <TouchableOpacity
                  style={styles.button}
                  onPress={() => pressButton('0')}
              >
                <Text style={styles.buttonText}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity
                  style={styles.accentButton}
                  onPress={() => setDisplay('0')} // Gestione per 'AC'
              >
                <Text style={styles.accentButtonText}>AC</Text>
              </TouchableOpacity>

              <TouchableOpacity
                  style={styles.accentButton}
                  onPress={calculate} // Gestione per '='
              >
                <Text style={styles.accentButtonText}>=</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Sezione degli operatori */}
          <View style={{ justifyContent: 'space-around' }}>
            {operatorsButtons.map((operator, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.button}
                    onPress={() => pressOperator(operator)}
                >
                  <Text style={styles.buttonText}>
                    <MyIcon icon={operator}/>
                  </Text>
                </TouchableOpacity>
            ))}
          </View>
        </View>





      </View>
  );
}

const MyIcon = ({icon} : {icon : string}) => {
  if (icon == "+") {
    return (
        <Text style={styles.buttonText}>+</Text>
    )
  }
  switch (icon) {
    case "+":
      return (
          <Text style={styles.buttonText}>+</Text>
      )
    case "-":
      return (
          <Text style={styles.buttonText}>-</Text>
      )
    case "*":
      return (
          <Text style={styles.buttonText}>*</Text>
      )
    case "/":
      return (
          <Text style={styles.buttonText}>/</Text>
      )
    default:
      return (
          <Text style={styles.buttonText}>?</Text>
      )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },


  display: {
    fontSize: 24,
    marginBottom: 20,
    color: colors.text,
  },
  grid: {
    width: '80%',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    margin: 5,
    padding: 15,
    backgroundColor: colors.primary,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  accentButton: {
    flex: 1,
    margin: 5,
    padding: 15,
    backgroundColor: colors.accent,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  accentButtonText: {
    color: colors.primary,
    fontSize: 18,
    fontWeight: 'bold',
  },

  buttonText: {
    color: colors.text,
    fontSize: 18,
  },
  displayText: {
    fontSize: 48,
    color: colors.primary,
    textAlign: 'right',
    padding: 20,
    backgroundColor: colors.background,
    borderRadius: 10,
    width: '100%',
  },

  operatorsContainer: {
    flex: 1,
    justifyContent: 'space-around', // Spaziatura uniforme tra i tasti
    alignItems: 'center',           // Centra i tasti orizzontalmente
    flexDirection: 'column',        // Disposizione verticale
    marginLeft: 10,                 // Margine per separare i tasti dal resto
  },

})