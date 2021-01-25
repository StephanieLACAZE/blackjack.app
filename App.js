import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet,View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



import Header from './components/Header';
import Navbar from './components/Navbar'
import Page2 from './components/table';





export default function App() {

const [titrePage, setTitrePage] = useState("Home");



const [page, setPage] =useState("table");
const handlePress = function (){
  setPage ("table 1")
}




return (
<View style ={styles.container}>
  <Header title = "BLACKJACK APP"/>
  <Header title = {titrePage}/>
  <View style = {styles.main}>
    <View style= {styles.button}>
      <Button title= "Play!" color = "#11993" onPress={handlePress}/>
    </View>
  </View>
  <StatusBar style ="auto"/>
  </View>

);
}
const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#BBD2E1",
    alignItems: "center",
    justifyContent: 'flex-start',
  },
  main: {
    marginTop:20,
  },
  button : {
    margin:20,
    alignItems: "center",
  },

  page:{},
})
