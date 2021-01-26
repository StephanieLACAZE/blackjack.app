import React, {useState} from'react';
import {StyleSheet, Text, View} from 'react-native';
import Etape from './components/Etape';



export default function App(){

  const[idEtape, setIdEtape] = useState(1)
  return (
    <View >
      <Etape id = {idEtape} setId={setIdEtape}/>
    </View>
  )
}


































































