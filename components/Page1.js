
import React from'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Page1(){
    return <View>
        <Text>
            COUCOU
        </Text>
    </View>
}
const tables =[
    "table1",
    "table1",
    "table1", ];
 const textes = tables.map(function(table){
     console.log("iteration table",table)

    return <Text>{table}</Text>
 }) 