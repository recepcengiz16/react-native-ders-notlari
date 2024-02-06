import { StyleSheet, Text, View,FlatList,Button,TouchableOpacity } from 'react-native'
import React,{useContext} from 'react'
import {Context} from '../context/BlogContext'
import { Feather } from '@expo/vector-icons';


export default function HomeScreen({navigation}) {

  const {state,addBlogPost,deleteBlogPost}=useContext(Context); //value değerini blogcontexdeki gönderdiğim value değerinden alıyorum useContextt içerisinde

  return (
    <View>
      {/* <Button title='Ekle' onPress={addBlogPost}/> */}
      <FlatList
      data={state}
      renderItem={({item})=>{
        return (
          <TouchableOpacity onPress={()=>navigation.navigate("Show",{id:item.id})}>
              <View style={styles.row}>
                <Text style={styles.title}>{item.title}</Text>
                <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
                  <Feather name="trash" size={24} color="black" />
                </TouchableOpacity>
              </View>
          </TouchableOpacity>
        )
      }}
      keyExtractor={(item)=>item.id}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  row:{
    flexDirection:"row",
    justifyContent:"space-between",
    borderTopWidth:1,
    paddingHorizontal:10,
    paddingVertical:20,
    borderColor:"gray"
  },
  title:{
    fontSize:18
  }
})