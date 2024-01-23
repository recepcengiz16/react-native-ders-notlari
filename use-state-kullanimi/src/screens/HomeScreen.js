import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

export default function HomeScreen({navigation}) {
  return (
    <View style={styles.content}>
      <Text>Ana Sayfa</Text>

      <Button title='Sayaç' onPress={()=>navigation.navigate("Sayaç")} />
      <Button title='Kutu' onPress={()=>navigation.navigate("Kutu")} />
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