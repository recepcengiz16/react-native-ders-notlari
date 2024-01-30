import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ExampleScreen() {
  return (
    <View style={styles.main}>
       <View style={styles.first}></View>
       <View style={styles.second}></View>
       <View style={styles.third}></View>
       <View style={styles.fourth}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        width:'100%',
        height:'100%'
    },
    first:{
        width:'25%',
        height:'25%',
        backgroundColor:"red"
    },
    second:{
        width:'25%',
        height:'25%',
        backgroundColor:"blue",
        position:"absolute",
        top:0,
        right:0
    },
    third:{
        width:'25%',
        height:'25%',
        backgroundColor:"purple",
        position:"absolute",
        bottom:0,
        left:0
    },
    fourth:{
        width:'25%',
        height:'25%',
        backgroundColor:"yellow",
        position:"absolute",
        bottom:0,
        right:0
    }
})