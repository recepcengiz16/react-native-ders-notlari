import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'

export default function BlogPostForm({onSubmit,initialValue,isEditable}) {

    const [title, setTitle] = useState(initialValue ? initialValue.title : "" );
    const [content, setContent] = useState( initialValue ? initialValue.content : "");

  return (
    <View style={styles.main}>
      <Text style={styles.label}>Başlığı Giriniz: </Text>
      <TextInput 
        style={styles.input}
        value={title}
        onChangeText={(title)=>setTitle(title)}
      />
      
      <Text style={styles.label}>İçeriği Giriniz: </Text>
      <TextInput
        style={styles.input}
        value={content}
        onChangeText={(content)=>setContent(content)}
      />

      <TouchableOpacity style={styles.buttonMain} onPress={()=>onSubmit(title,content)}>
          <View style={styles.buttonView}>
            {
              isEditable ?  <Text style={styles.buttonText}>Güncelle</Text> :  <Text style={styles.buttonText}>Kaydet</Text>
            }
          </View>
      </TouchableOpacity>

    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        marginTop:10
    },
    label:{
        fontSize:15,
        marginLeft:10
    },
    input:{
        borderWidth:1,
        margin:10,
        borderRadius:20,
        padding:5,
        fontSize:15,
        marginBottom:15
    },
    buttonMain:{
        padding:30
    },
    buttonView:{
        backgroundColor:"green",
        padding:5,
        alignItems:"center",
        justifyContent:"center",
        borderRadius:20
    },
    buttonText:{
        color:"white",
        fontSize:20
    }
})