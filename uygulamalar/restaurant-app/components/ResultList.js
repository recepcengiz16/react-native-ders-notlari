import { StyleSheet, Text, View,FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import ResultDetail from './ResultDetail'

export default function ResultList({title,result}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
      horizontal
      data={result}
      showsHorizontalScrollIndicator={false}
      renderItem={({item})=>{
        return (
            <TouchableOpacity>
                <ResultDetail result={item} />
            </TouchableOpacity>
        )
      }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginBottom:10
    },
    title:{
        fontSize:18,
        fontWeight:"bold",
        marginLeft:15,
        marginBottom:5
    }
})