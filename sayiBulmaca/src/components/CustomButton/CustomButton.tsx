import { Text, View, Pressable } from 'react-native'
import React from 'react';
import styles from "./CustomButton.style"

export default function CustomButton({children}): React.JSX.Element {
  return (
    <View style={styles.buttonContainer}>
      <Pressable
        style={({pressed})=> pressed ? [styles.buttonInnerContainer,styles.pressed] : styles.buttonInnerContainer}>
        <Text style={styles.btnText}>{children}</Text>
      </Pressable>
    </View>
  )
}
