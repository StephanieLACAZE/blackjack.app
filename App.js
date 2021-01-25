import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet,View, Text, TextInput } from 'react-native';



import Header from './components/Header'
import Home from './components/Home';
import Table from './components/Table';
import Game from './components/Jouer';




export default function App() {

  const [page, setPage]= useState("");

  const handlePress1 =function(){
    setPage ("page_1")
  }
  const handlePress2= function(){
    setPage ("page_2")
  }
  const handlePress3= function() {
    setPage ("page_3")
  }
  const [value, onChangeText]= useState("");
  const [value2, setValue2]= useState("")
 
  const handlePress= function(){
        if(value)  value2
    
  }  

  return (
    <View style={styles.container}>
      <Header title="Blackjack app" />
      <View style={styles.body}>
      {page === "page_1" &&
        <Text>page 1</Text>}
      {page === "page_2"&&
       <Text>page 2</Text>}
      {page === "page_3"&&
        <Text>page 3</Text>}
      
      <Button title = {"Page 1" } onPress={handlePress1}/>
      <Button title = {"Page 2" } onPress={handlePress2}/>
      <Button title = {"Page 3" } onPress={handlePress3}/>    
      </View>
      <StatusBar style="auto"/>

        <Text>{value}</Text>
        <TextInput style={styles.subject}
        onChangeText = {text=>onChangeText(text)}
        value ={value} />
        <Button style={styles.bouton} title={"effacer"} onPress={handlePress}/>
    </View>
   
    
  )

}
  const styles = StyleSheet.create({
    body: {
      color: "red",
    },
    subject: {
      borderColor :"red",
      borderStyle: "solid",
      borderwidth: 10,
      height: 80,
    },
    bouton: {
      margin:10,
      width:20,
      heigth :20,
      backgroundColor:"purple",

    }

    
  })