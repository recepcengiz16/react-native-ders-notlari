import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function SearchBar() {
  return (
    <View style={styles.backGroundStyle}>
      <AntDesign style={styles.iconStyle} name="search1" size={30} color="black" />
      <TextInput style={styles.inputStyle} placeholder='Ara' autoCorrect={false} autoCapitalize='none' />
    </View>
  )
}

const styles = StyleSheet.create({
    backGroundStyle:{
        backgroundColor:"lightgray",
        margin:10,
        height:80,
        flexDirection:"row",
        alignItems:"center",
        borderRadius:40
    },
    iconStyle:{
        marginHorizontal:15
    },
    inputStyle:{
        flex:1,
        fontSize:18
    }
})