import { StyleSheet, Text, View,FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import ResultDetail from './ResultDetail'
import {useNavigation} from "@react-navigation/native"


export default function ResultList({title,result}) {
    const navigation=useNavigation();
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
      horizontal
      data={result}
      showsHorizontalScrollIndicator={false}
      renderItem={({item})=>{
        console.log("item",item)
        return (
            <TouchableOpacity onPress={ () => navigation.navigate("ResultsShow",{id:item.id})}>
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
        marginVertical:15
    },
    title:{
        fontSize:18,
        fontWeight:"bold",
        marginLeft:15,
        marginBottom:5
    }
})