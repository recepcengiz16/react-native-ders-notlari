import { StyleSheet, View,Button,FlatList } from 'react-native'
import React from 'react'

export default function ColorChangeScreen() {
  return (
    <View>
        <Button title='Kutu Ekle' onPress={()=>{
        setColors([...colors,randomColor()]) //burada colors dizisini aynen alıp, daha sonra eklenecek olduğunda randomColor ile yap manasında. setColors([...colors, randomColor()]) ifadesi, mevcut colors dizisinin kopyasını oluşturarak ve bu kopyaya randomColor() fonksiyonunun ürettiği rastgele bir renk ekleyerek yeni bir dizi oluşturur. Sonrasında, bu yeni diziyi setColors fonksiyonu aracılığıyla state'e atar.
        }} />

        <View style={{height:80,width:80,backgroundColor:item,marginVertical:20}} />
     
  </View>
  )
}

const styles = StyleSheet.create({})