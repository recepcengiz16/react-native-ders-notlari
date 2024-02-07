import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { Context } from '../context/BlogContext'
import BlogPostForm from "../components/BlogPostForm"

export default function EditScreen({route}) {

    const {state} = useContext(Context);

    const blogPost = state.find((blogPost)=>blogPost.id === route.params.id );

  return (
    <View>
      <BlogPostForm initialValue={{title:blogPost.title,content:blogPost.content}}/>
    </View>
  )
}

const styles = StyleSheet.create({})