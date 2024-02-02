import { StyleSheet, Text, View,FlatList } from 'react-native'
import React,{useContext} from 'react'
import BlogContext from '../context/BlogContext'

export default function HomeScreen() {

  const {data,addBlogPost}=useContext(BlogContext); //value değerini blogcontexdeki gönderdiğim value değerinden alıyorum useContextt içerisinde

  

  return (
    <View>
      <Text>HomeScreen </Text>
      <FlatList
      data={data}
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