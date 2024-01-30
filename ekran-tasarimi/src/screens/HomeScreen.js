import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Ekran Tasarımı')}
      />
    </View>
  )
}

const styles = StyleSheet.create({})