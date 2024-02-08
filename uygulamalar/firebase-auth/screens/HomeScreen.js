import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { auth } from '../firebase';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {

  const handleSignOut = ()=>{
      const navigation = useNavigation();
      auth.signOut().then(()=>{
          navigation.navigate("Home");
      }).catch((error)=>{
          console.log(error.messsage)
      })
  }


  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity style={styles.button} onPress={handleSignOut}>
        <Text style={styles.buttonText}>Çıkış Yap</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  button:{
    backgroundColor:"#00bfff",
    padding:15,
    alignItems:"center",
    borderRadius:10,
    marginBottom:10,
    width:"40%",
    marginTop:10
  },
  buttonText:{
      color:"white",
      fontSize:15
      
  },
})