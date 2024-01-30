import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function DesignScreen() {
  return (
    <View>
       <View style={{width:50,height:50,backgroundColor:"red"}} />

        <Text style={styles.mainText}> 1 </Text>
        
        <Text style={styles.mainText}> 2 </Text>
        
        <Text style={styles.mainText}> 3 </Text>


    </View>
  )
}

const styles = StyleSheet.create({
    mainView:{
        //flexDirection:"row" webde display flex default olarak row dur ama react nativede default olarak column dur. bundan alignitems ve justifyContent de etkileniyor. Kapsayıcıda hizalama yapıyor  
        
        //alignItems normalde webde dikey hizalamadır ama react nativede yatay hizalama yapıyor.
        //justifyContent react nativede dikey hizalama yapıyor
        //flexDirection:"row"
        
        borderWidth:1,
        borderColor:"black",
        margin:20,
        borderRadius:10,
        alignItems:"flex-start", 
    },
    mainText:{
        borderWidth:1,
        borderColor:"red",
        margin:30,
        padding:10,
        borderRadius:5
    }
})