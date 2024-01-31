import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

export default function ResultsShowScreen({route}) {
    //bir safyaya parametre gönderdiğimizde route ile alıyoruz
    const id=route.params.id;

    useEffect()
  return (
    <View>
      <Text>ResultsShowScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})