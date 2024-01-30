import { StyleSheet, Text, View,TextInput } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';

export default function SearchBar() {
  return (
    <View>
      <AntDesign name="search1" size={24} color="black" />
      <TextInput style={{borderColor:"black",borderWidth:1}} />
    </View>
  )
}

const styles = StyleSheet.create({})