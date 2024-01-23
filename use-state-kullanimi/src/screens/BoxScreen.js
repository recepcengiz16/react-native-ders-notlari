import { StyleSheet, Text, View,Button,FlatList } from 'react-native'
import React,{useState} from 'react'

export default function BoxScreen() {
    const [colors, setColors] = useState([]);
    const randomColor = ()=>{
        const red=Math.floor(Math.random()*256);
        const green=Math.floor(Math.random()*256);
        const blue=Math.floor(Math.random()*256);
        return `rgb(${red},${green},${blue})`;
    }
  return (
    <View>
      <Button title='Kutu Ekle' onPress={()=>{
         setColors([...colors,randomColor()]) //burada colors dizisini aynen alıp, daha sonra eklenecek olduğunda randomColor ile yap manasında. setColors([...colors, randomColor()]) ifadesi, mevcut colors dizisinin kopyasını oluşturarak ve bu kopyaya randomColor() fonksiyonunun ürettiği rastgele bir renk ekleyerek yeni bir dizi oluşturur. Sonrasında, bu yeni diziyi setColors fonksiyonu aracılığıyla state'e atar.
      }} />

      <FlatList
      data={colors}
      renderItem={({item})=>{
        return <View style={{height:80,width:80,backgroundColor:item,marginVertical:20}} />
      }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})