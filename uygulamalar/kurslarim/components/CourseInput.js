import { StyleSheet, Text, View,Modal,Image,TextInput,Button } from 'react-native'
import React,{useState} from 'react'

export default function CourseInput({visible,onAddCourse,onCancel}) {

    const [enteredCourseText, setEnteredCourseText] = useState("")

    const addCourseHandler = ()=>{
        onAddCourse(enteredCourseText);
        setEnteredCourseText("");
    }


  return (
    <Modal
        animationType="slide"       
        visible={visible}
      >
        <View style={styles.inputContainer}>
          <Image source={require("../assets/images/hogwarts.jpg")} style={styles.image} />
          <TextInput 
            placeholder='Yeni Kurs Ekle'
            style={styles.textInput}
            value={enteredCourseText}
            onChangeText={(newValue)=>setEnteredCourseText(newValue)}
            
          />
          <View style={styles.buttonContainer}>
            
            <View style={styles.button}>
                    <Button title='İptal Et' color="red" onPress={onCancel}></Button>
            </View>  
            <View style={styles.button}>
                    <Button title='Ekle' color="green" onPress={addCourseHandler}></Button>
            </View>
            
          </View>
        </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
    inputContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#cdc9c9",
        padding:10
    },
    image:{
        width:200,
        height:200,
        borderRadius:95,
        margin:20
    },
    textInput:{
        borderWidth:1,
        width:"90%",
        padding:5,
        margin:20,
        borderRadius:15,
        backgroundColor:"#eed8ae",
        borderColor:"#eed8ae"
    },
    buttonContainer:{
        flexDirection:"row"
    },
    button:{
        width:100,
        marginHorizontal:10
    }
})