import { StyleSheet, Text, View,Modal,Image,TextInput,Button } from 'react-native'
import React from 'react'

export default function CourseInput({visible}) {
  return (
    <Modal
        animationType="slide"       
        visible={visible}
      >
        <View style={styles.centeredView}>
          <Image source={require("../assets/images/hogwarts.jpg")} style={{width:200,height:200}} />
          <TextInput 
            placeholder='Yeni Kurs Ekle'
            
          />
          <View style={styles.modalView}>
            <View>

            </View>
           
          </View>
        </View>
      </Modal>
  )
}

const styles = StyleSheet.create({})