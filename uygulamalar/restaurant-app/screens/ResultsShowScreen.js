import { StyleSheet, Text, View,FlatList,Image } from 'react-native'
import React, { useEffect,useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import yelp from "../api/yelp"

export default function ResultsShowScreen({route}) {
    //bir safyaya parametre gönderdiğimizde route ile alıyoruz
    const id=route.params.id;
    const [result, setResult] = useState(null);

    const getResultDetails = async (id)=>{
        const response = await yelp.get(`${id}`);
        setResult(response.data);
    }

    useEffect(()=>{
        getResultDetails(id);
    },[]);

    if(!result) { return null ; }


  return (
    <View>
      
      <Text style={styles.title}>{result.name}</Text>
      <Text style={styles.phone}>{result.phone}</Text>

     <View style={styles.icon}>
        {
            result.is_closed ?  
            <AntDesign name="closecircleo" size={30} color="black" /> :  <MaterialIcons name="delivery-dining" size={30} color="black" />
        } 
     </View>

      <FlatList
        data={result.photos}
        renderItem={({item})=>{
                return (
                    <Image source={{uri:item}} style={styles.image} />
                )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    image: {
        height:200,
        margin:10,
        borderRadius:30
    },
    title:{
        alignSelf:"center",
        fontSize:25,
        marginVertical:10
    },
    phone:{
        alignSelf:"center",
        fontSize:20
    },
    icon:{
        alignSelf:"center"
    }
})