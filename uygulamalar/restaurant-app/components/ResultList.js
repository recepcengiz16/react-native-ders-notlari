import { StyleSheet, Text, View,FlatList, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ResultList({title,result}) {
  return (
    <View>
      <Text>{title}</Text>
      <FlatList
      data={result}
      renderItem={({item})=>{
        return (
            <TouchableOpacity>
                
            </TouchableOpacity>
        )
      }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})