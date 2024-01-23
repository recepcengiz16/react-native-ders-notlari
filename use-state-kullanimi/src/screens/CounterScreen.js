import { StyleSheet, Text, View,Button } from 'react-native'
import React, { useState } from 'react'

export default function CounterScreen() {
   
    const [counter,setCounter]=useState(0); //kısacası counter bir değer ve setcounter de bu değeri güncelleyen bir fonks. ,usestate de counter a ilk değeri verir.
    /*
    Bu bir React fonksiyon bileşeninde kullanılan bir useState örneğidir. useState, React'in fonksiyon bileşenlerinde yerel durumu (state) yönetmek için kullanılan bir hook'tur. İlgili satır şu şekildedir:

    Bu satırın anlamı şu şekildedir:  const [counter,setCounter]=useState(0); 

    counter: Bu, durumu temsil eden değişkenin adıdır. Bu örnekte, sayacın değerini temsil eder.
   
    setCounter: Bu, durumu güncellemek için kullanılacak olan fonksiyonun adıdır. setCounter fonksiyonu, yeni bir değer alarak counter'ı günceller ve bileşenin yeniden render edilmesini tetikler.
   
    useState(0): Bu, useState hook'unun ilk çağrısıdır. 0, başlangıç değerini temsil eder. Yani, counter'ın başlangıç değeri 0 olarak ayarlanır.
   
    Bu şekilde kullanılan useState hook'u, bir fonksiyon bileşeninin içinde bir durumu takip etmek ve bu durumu güncellemek için kullanılır. Örneğin, bir sayacın değerini arttırmak veya azaltmak gibi durum değişiklikleri için useState kullanılır.
     */

  return (
    <View style={styles.content}>
       <Button title='Artır' onPress={()=>{
        setCounter(counter+1); //counterı 1 artırıp değerini güncelliyor. direk işleme tabi tuttuk burada, başka bir yerde tanımlı değil direk parantezin içinde değerini güncelliyoruz.
       }} />
       <Button title='Azalt' onPress={()=>{
        setCounter(counter-1)
       }} />
       <Text>{counter}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    content:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})