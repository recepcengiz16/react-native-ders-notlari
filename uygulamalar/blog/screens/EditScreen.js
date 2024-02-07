import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../context/BlogContext'
import BlogPostForm from "../components/BlogPostForm"

export default function EditScreen({route}) {

    const {state,editBlogPost} = useContext(Context);
    const id=route.params.id;
    const blogPost = state.find((blogPost)=>blogPost.id === route.params.id );

  return (
    <View>
      <BlogPostForm 
        isEditable={true} 
        initialValue={{title:blogPost.title,content:blogPost.content}}
        onSubmit={(title,content)=>{
          editBlogPost(id,title,content,()=>navigation.navigate("Index"))
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})