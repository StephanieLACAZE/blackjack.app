import React from 'react';
import { StyleSheet, View, Button,TextInput } from 'react-native';

export default function Navbar(props) {
   
    
   
   return <View style={styles.navbar}>
<Button title="Page 1"onPress={props.onPress1}/>
<Button title="Page 2"onPress={props.onPress2}/>
<Button title="Page 3"onPress={props.onPress3}/>






</View>
}

const styles = StyleSheet.create({
navbar: {
    height: 40,
    width: '100%',
    backgroundColor: '#0055ff',
    flexdirection :"row",
    justifyContent:"space-around",
},






})