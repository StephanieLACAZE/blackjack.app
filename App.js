import React, {useState} from'react';
import {StyleSheet, Text, View} from 'react-native';
import Etape from './components/Etape';
import Fiche from './components/Fiche';



export default function App(){

  const[idResult,setIdResult]=useState(undefined)
  const[idEtape, setIdEtape] = useState(1)
  
  return (
    <View style={styles.container}>
      {idEtape !== undefined &&
        <Etape 
          id={idEtape}
          setId={setIdEtape}
          />
      }
      {idResult !== undefined &&
          <Fiche
            id={idResult}
            setId={setIdResult}
          />
      }
      
    </View>
 
  );
}
 
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey"
  }
}); 
  
  
  
  
  
  
  
  
  
  
  
  



































































