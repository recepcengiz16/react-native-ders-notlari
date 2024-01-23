import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.content}>
      <Text>Ana Sayfa</Text>

      <Button title='Sayaç' onPress={()=>navigation.navigate("Sayaç")} />
    </View>
  )
}

const styles = StyleSheet.create({
    content:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})