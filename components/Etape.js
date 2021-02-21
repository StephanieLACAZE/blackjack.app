
import React, { useEffect,useState } from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';
import axios from "axios";


export default function Etape(props){
    const[etape, setEtape] = useState(undefined);

     useEffect(function(){
        axios.get("http://localhost:8000/question/" + props.id)  
        .then(function(reponse){ 
            setEtape (reponse.data); 
        })
     }, [props.id]);

     console.log("etape", etape);

     if (etape === undefined){
         return (<View style={StyleSheet.container}>
             <Text>En chargement...</Text>
            </View>
         )}
    return (<View style={StyleSheet.container}>
        
            <Text>{etape.title}</Text>

            {etape.nextProposals.map(function(nextProposalsData){
                return <Button title={nextProposalsData.content}onPress={function(){
                props.setId(nextProposalsData.nextStepId.id)
            }}/>
        })}
       
       </View>

     );
    }