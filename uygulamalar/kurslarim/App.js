import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button,FlatList } from 'react-native';
import { useState } from 'react';
import CourseInput from './components/CourseInput';

export default function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false)
  const [courses, setCourses] = useState([])


  const startModal = ()=>{
    setModalIsVisible(true);
  }

  const endModal = ()=>{
    setModalIsVisible(false);
  }

  const addCourse = (courseTitle)=>{
    setCourses((currentCourses) => [...currentCourses,{
      text:courseTitle,id:Math.random().toString()
    }]);
    endModal();

  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button title='Kurs Ekle' color="purple" onPress={startModal} />

        <CourseInput visible={modalIsVisible} onAddCourse={addCourse} onCancel={endModal}/>

        <View>
           <FlatList
              data={courses}
              renderItem={({item})=>{
                return (
                  <View style={styles.courseItem}>
                      <Text style={styles.courseText}>{item.text}</Text>
                  </View>
                )
              }}
           />
        </View>

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

  courseItem:{
    backgroundColor:"#ffa54f",
    margin:10,
    borderRadius:5
  },

  courseText:{
    padding:8,
    color:"white"
  }
});
