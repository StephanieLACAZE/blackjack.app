import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function Header(props) {
    return (
        <View style={styles.header}>
        <Text style={styles.appTitle}>
            {props.title}
        </Text>
      </View> 
    
    );
}

const styles = StyleSheet.create({
    container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'flex-start',
        },
        header: {
          backgroundColor : "blue",
          width : "100%",
          height: 50,
          justifyContent:"center",
          alignItems:"center",
        },
        appTitle: { 
        color:"white",
        fontWeight:"bold",
        },

    });
      