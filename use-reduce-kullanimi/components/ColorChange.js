import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

export default function ColorChange({color,onIncrease,onDecrease}) { //burada increase ve decrease i vue js deki emit gibi düşünebilirsin
  return (
    <View>
      <Text> {color}: </Text>
      <Button title={`${color} artır`} onPress={()=>onIncrease()} />
      <Button title={`${color} azalt`} onPress={()=>onDecrease()} />
    </View>
  )
}

const styles = StyleSheet.create({})