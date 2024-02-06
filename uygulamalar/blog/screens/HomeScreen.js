import { StyleSheet, Text, View,FlatList,Button } from 'react-native'
import React,{useContext} from 'react'
import {Context} from '../context/BlogContext'
import { Feather } from '@expo/vector-icons';


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
          <View style={styles.row}>
            <Text>{item.title}</Text>
            <Feather name="trash" size={24} color="black" />
          </View>
        )
      }}
      keyExtractor={item=>item.title}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  row:{
    flexDirection:"row",
    justifyContent:"space-between",
    borderTopWidth:1
  }
})