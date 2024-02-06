import { StyleSheet, Text, View } from 'react-native'
import React,{useContext} from 'react'
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm'

export default function CreateScreen() {

  const {addBlogPost} = useContext(Context); 

  return (
    <View>
     <BlogPostForm onSubmit={(title,content)=>{
        addBlogPost(title,content)
     }} />
    </View>
  )
}

const styles = StyleSheet.create({})