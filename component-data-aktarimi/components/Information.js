import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function Information({title,desc,imageSource}) { //normalde (props) yazıp aşağıda props.title diyerek de erişebilirsin ya da js destractive yapısı var ya obje notasyonunda yapıyorsun
  return (
    <View>
      <Image source={imageSource} style={{height:200,width:200}}></Image>
      <Text>{title}</Text>
      <Text>{desc}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})