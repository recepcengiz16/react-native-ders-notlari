import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

export default function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Ana Sayfa</Text>
      <Button
        title="Şifre Sayfasına Git"
        
        onPress={() => navigation.navigate('Şifre')}
      />
    </View>
  )
}

const styles = StyleSheet.create({})