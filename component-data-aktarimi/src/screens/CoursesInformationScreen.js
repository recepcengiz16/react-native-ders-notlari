import { ScrollView, StyleSheet} from 'react-native'
import React from 'react'
import Information from '../../components/Information'

export default function CoursesInformation() {
    return (
      <ScrollView> 
        {/* normal view de ekranı aşağı kaydıramıyorsun. scrollview ile kaydırmana olanak sağlanmış oluyor. */} 
        <Information title="Bootstrap Eğitimi" imageSource={require('../../assets/bootstrap.png')} desc="Kapsamlı Bootstrap Eğitimi" /> 
        {/* resim verirken requireile yapmak lazım */}
        <Information title="React Eğitimi" imageSource={require('../../assets/react.png')} desc="Kapsamlı React Eğitimi" />
        <Information title="Vue Eğitimi" imageSource={require('../../assets/vue.jpg')} desc="Kapsamlı Vue Eğitimi" />
      </ScrollView>
  )
}

const styles = StyleSheet.create({})