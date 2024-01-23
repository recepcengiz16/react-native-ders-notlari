import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Information({title,desc,imageSource}) { //normalde (props) yazıp aşağıda props.title diyerek de erişebilirsin ya da js destractive yapısı var ya obje notasyonunda yapıyorsun
  return (
    <View>
      <Text>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})