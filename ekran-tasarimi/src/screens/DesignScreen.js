import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function DesignScreen() {
  return (
    <View>
       <View style={{width:50,height:50,backgroundColor:"red"}} />

        <Text style={styles.mainText}> Layout </Text>


    </View>
  )
}

const styles = StyleSheet.create({
    mainView:{
        borderWidth:1,
        borderColor:"black",
        margin:20,
        borderRadius:10
    },
    mainText:{
        borderWidth:1,
        borderColor:"red",
        margin:30,
        padding:10,
        borderRadius:5
    }
})