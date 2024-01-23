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
        //renderItem prop'undaki fonksiyon, her eleman için çağrıldığında o elemanı temsil eden bir nesne alır. Bu nesne, genellikle süslü parantez içine alınarak nesnenin özelliklerine daha kolay erişim sağlar. Bu nedenle, renderItem={({ item }) => ...} şeklinde kullanılır. renderItemdan kaynaklanan bir şey yani bu
        keyExtractor={(item)=>item.id} 
        />
    </View>
  )
}

const styles = StyleSheet.create({})