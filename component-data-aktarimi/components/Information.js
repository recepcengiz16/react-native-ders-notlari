import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

export default function Information({title,desc,imageSource}) { //normalde (props) yazıp aşağıda props.title diyerek de erişebilirsin ya da js destractive yapısı var ya obje notasyonunda yapıyorsun
  return (
    <View>
      <Image source={imageSource} style={styles.img}></Image>
      <View style={styles.descTitle}>
        <Text style={styles.title}>{title}</Text>
        <Text>{desc}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    img:{
        width:'100%',
        paddingVertical:20,
        
    },
    descTitle:{
        alignItems:"center",
        justifyContent:"center",
        paddingVertical:20
    },
    title:{
        fontSize:30
    }
})