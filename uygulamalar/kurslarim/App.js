import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';
import { useState } from 'react';
import CourseInput from './components/CourseInput';

export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false)
  
  const startModal = ()=>{
    setModalIsVisible(true);
  }

  const endModal = ()=>{
    setModalIsVisible(false);
  }

  const addCourse = (courseTitle)=>{

    endModal();

  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button title='Kurs Ekle' color="purple" onPress={startModal} />

        <CourseInput visible={modalIsVisible} onAddCourse={addCourse} onCancel={endModal}/>
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
