import { StyleSheet, Text, View } from 'react-native'
import React,{useContext} from 'react'
import BlogContext from '../context/BlogContext'

export default function HomeScreen() {

  const value=useContext(BlogContext); //value değerini blogcontexdeki gönderdiğim value değerinden alıyorum useContextt içerisinde

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})