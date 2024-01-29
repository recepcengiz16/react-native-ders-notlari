import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

export default function HomeScreen({navigation}) {
  return (
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <Text> Ana Sayfa </Text>
      <Button onPress={()=> navigation.navigate("Sayaç") } title='Sayaç' />
      <Button onPress={()=> navigation.navigate("Renk Değiştirme") } title='Renk Değiştirme' />
    </View>
  )
}

const styles = StyleSheet.create({})