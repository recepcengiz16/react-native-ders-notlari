import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Information from '../../components/Information'

export default function CoursesInformation() {
  return (
    <View>
        <Information title="Bootstrap Eğitimi" imageSource={require('../../assets/bootstrap.png')} desc="Kapsamlı Bootstrap Eğitimi" /> 
        {/* resim verirken requireile yapmak lazım */}
        <Information title="React Eğitimi" imageSource={require('../../assets/react.png')} desc="Kapsamlı React Eğitimi" />
        <Information title="Vue Eğitimi" imageSource={require('../../assets/vue.jpg')} desc="Kapsamlı Vue Eğitimi" />
       
    </View>
  )
}

const styles = StyleSheet.create({})