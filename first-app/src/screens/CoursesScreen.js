import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'


export default function CoursesScreen() {

  const courses = [
    {name:"Angular",id:1}, 
    {name:"Vue Js",id:2},
    {name:"React Js",id:3},
    {name:"React Native",id:4},
    {name:"C#",id:5}
  ];




  return (
    <View>
       <FlatList 
        data={courses}
        renderItem={({item})=> {
          return <Text> {item.name} </Text>
        }}
        keyExtractor={(item)=>item.id} 
        />
    </View>
  )
}

const styles = StyleSheet.create({})