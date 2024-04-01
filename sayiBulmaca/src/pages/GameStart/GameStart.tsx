import { StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import styles from "./GameStart.style";
import CustomButton from '../../components/CustomButton';

export default function GameStart(): React.JSX.Element {

  const resetHandler = () => {

  }

  const confirmHandler = () => {
    
  }

  return (
    <View style={styles.container}>
      <Text>Sayı Tahmin Uygulaması</Text>
      <View style={styles.card}>
        <TextInput style={styles.input} keyboardType='number-pad' maxLength={2} />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <CustomButton onPress={resetHandler}>Temizle</CustomButton>
          </View>
          <View style={styles.buttonContainer}>
            <CustomButton onPress={confirmHandler}>Onayla</CustomButton>
          </View>
        </View>
      </View>
    </View>
  );
}