import { StyleSheet, Text, View,FlatList,Button } from 'react-native'
import React,{useContext} from 'react'
import {Context} from '../context/BlogContext'

export default function HomeScreen() {

  const {state,addBlogPost}=useContext(Context); //value değerini blogcontexdeki gönderdiğim value değerinden alıyorum useContextt içerisinde

  return (
    <View>
      <Text>HomeScreen </Text>
      <Button title='Ekle' onPress={addBlogPost}/>
      <FlatList
      data={state}
      renderItem={({item})=>{
        return (
          <Text>{item.title}</Text>
        )
      }}
      keyExtractor={item=>item.title}
      />
    </View>
  )
}

const styles = StyleSheet.create({})