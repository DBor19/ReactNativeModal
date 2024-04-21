import React from 'react';
import { View}  from 'react-native';
import {Partes} from './Partes';
import { StyleSheet, Text } from 'react-native';


export default function Jogo (){
  return (
    <View style={styles.MainContainer}>
      <Text style={styles.texto}>Escolha a Parte!!</Text>
      <Partes/>
    </View>
  )
};

const styles = StyleSheet.create(
  {
    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'yellow',
    }, 
    texto: {
      fontSize: 20,
      fontWeight: 'bold',
    }
  });