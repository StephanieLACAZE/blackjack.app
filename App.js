import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';



import Header from './components/Header'
import Navbar from './components/Navbar'
import Page1 from './components/Page1';
import Page2 from './components/Page2';
import Page3 from './components/Page3';



export default function App() {

  const [afficher, setAfficher] = useState(false);



  const handlePress = function () {
    setAfficher(!afficher)

  }



  return (
    <View style={styles.container}>
      <Header title="Blackjack app" />
      <View style={styles.body}>
        {afficher === true &&

          <Text>Coucou</Text>
        }

        <Button title={afficher === false ? "Afficher" : "Cacher"} onPress={handlePress} />
      </View>
      <StatusBar style="auto"/>
    </View>

  )}
