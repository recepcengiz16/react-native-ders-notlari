import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text>App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container : {
    flex:1
  }
})