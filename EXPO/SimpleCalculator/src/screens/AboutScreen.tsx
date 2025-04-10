import React, {useState, useEffect, useCallback} from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {colors} from "../constants/theme";
import {useFocusEffect} from "@react-navigation/native";

export default function AboutScreen(): JSX.Element{
  const [nome, setNome] = useState('');
  const [cognome, setCognome] = useState('');

  const [nameFromDb, setNomeDb] = useState('');
  const [surnameFromDb, setCognomeDb] = useState('');

  // Recupera i dati salvati all'avvio
  /*
  useEffect viene eseguito quando il componente viene montato per la prima volta.
   */
  useFocusEffect(
      useCallback(() => {
        const loadData = async () => {
          try {
            const nomeSalvato = await AsyncStorage.getItem('nome');
            const cognomeSalvato = await AsyncStorage.getItem('cognome');
            if (nomeSalvato !== null) {
              setNome(nomeSalvato);
              setNomeDb(nomeSalvato);
            }
            if (cognomeSalvato !== null) {
              setCognome(cognomeSalvato);
              setCognomeDb(cognomeSalvato);
            }
          } catch (error) {
            console.log('Errore nel caricamento dati:', error);
          }
        };
        loadData();
      }, [])
  )

  // Salva i dati nel "DB"
  const salvaDati = async () => {
    try {
      await AsyncStorage.setItem('nome', nome);
      await AsyncStorage.setItem('cognome', cognome);

      setNomeDb(nome)
      setCognomeDb(cognome);
      Alert.alert('Successo', 'Dati salvati con successo!');
    } catch (error) {
      Alert.alert('Errore', 'Impossibile salvare i dati');
    }
  };

  return (
      <View style={styles.container}>
        <View style={{marginBottom: 20, alignItems: 'center'}}>
            <Text style={{fontSize: 24, fontWeight: 'bold'}}>Impostazioni</Text>
            <Text style={{fontSize: 16, color: '#666'}}>Modifica il tuo nome e cognome</Text>
        </View>

        <View style={{backgroundColor: colors.background, padding: 5, borderRadius: 8, marginBottom: 20}}>
          <Text style={styles.label}>Info:</Text>
          <Text style={styles.displayText}>Nome: {nameFromDb}</Text>
          <Text style={styles.displayText}>Cognome: {surnameFromDb}</Text>
        </View>

        <Text style={styles.label}>Nome:</Text>
        <TextInput
            style={styles.input}
            value={nome}
            onChangeText={setNome}
            placeholder="Inserisci il tuo nome"
        />

        <Text style={styles.label}>Cognome:</Text>
        <TextInput
            style={styles.input}
            value={cognome}
            onChangeText={setCognome}
            placeholder="Inserisci il tuo cognome"
        />

        <Button title="Salva" onPress={salvaDati} />
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  label: {
    fontSize: 18,
    marginTop: 12,
  },
  input: {
    height: 40,
    borderColor: '#aaa',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },

  displayText: {
    fontSize: 18,
    marginBottom: 10,
  },
});