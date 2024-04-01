import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import styles from "./CustomButton.style"

export default function CustomButton({children}): React.JSX.Element {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})