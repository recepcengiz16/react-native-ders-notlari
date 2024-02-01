import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import { useState } from 'react';

export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false)
  const startModal = ()=>{
    setModalIsVisible(true);
  }


  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button title='Kurs Ekle' color="purple" onPress={startModal} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop:50,
    paddingHorizontal:20
  },
});
