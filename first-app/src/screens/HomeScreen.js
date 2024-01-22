import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

export default function HomeScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Şu an ana sayfadasınız  </Text>
        <Button
          title="Kurslara git"
          onPress={() => navigation.navigate('Kurslarım')}
        />
      </View>
    );
  }

const styles = StyleSheet.create({})