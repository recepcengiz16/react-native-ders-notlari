import { StyleSheet, Text, View } from 'react-native'
import React,{useContext} from 'react'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

export default function CreateScreen({navigation}) {

  const {addBlogPost} = useContext(Context); 

  return (
    <View>
     <BlogPostForm
      isEditable={false}
      onSubmit={(title,content)=>{
        addBlogPost(title,content,()=>navigation.navigate("Index"))
     }} />
    </View>
  )
}

const styles = StyleSheet.create({})