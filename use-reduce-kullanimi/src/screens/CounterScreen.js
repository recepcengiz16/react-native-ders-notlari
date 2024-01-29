import { StyleSheet, Text, View,Button } from 'react-native'
import React, { useReducer } from 'react'

//useReducer, React Native veya React projelerinde durum yönetimi için kullanılan bir hook'tur. Bu hook, özellikle karmaşık durum yönetim durumlarında veya birçok durum değişikliğiyle başa çıkmanın gerektiği durumlarda useState'e alternatif olarak kullanılabilir.

// reducer: Reducer fonksiyonu, mevcut durumu ve bir eylemi alır, ardından bu eyleme göre yeni bir durumu döndürür.

// useReducer(reducer, { count: 0 }): useReducer hook'u, birinci parametre olarak reducer fonksiyonunu, ikinci parametre olarak ise başlangıç durumunu alır ve bir dizi döndürür. Bu dizi, mevcut durumu ve dispatch fonksiyonunu içerir.

//state.count: Mevcut durumun içindeki sayacın değerini temsil eder.

//dispatch: Reducer fonksiyonuna eylem göndermek için kullanılan bir fonksiyondur.

const reducer = (state,action)=>{
    //type ve payload action içerisinde tutuluyor. Burada da state i güncelleme işlemi yapılıyor. state burada {count:0} objesi
    console.log(action);

    switch (action.type) {
        case 'increment':
            return { ...state , count:state.count + action.payload } // yani burada state in içeriğini kopyalayıp buraya koyuyor sonra da state içindeki count propertysini ezip actiondaki payload değeri ile topluyor.         
        
        case 'decrement':
            return { ...state , count:state.count - action.payload }
        
        default:
            return state;
    }
}


export default function CounterScreen() {

    const [state,dispatch]=useReducer(reducer,{count:0});

  return (
    <View>
      <Text> Sayaç: {state.count} </Text>

      <Button title='Artır' onPress={()=>{
        dispatch({type:'increment', payload:1}) //type increment olunca 1 artırma işlemi yapıcaz. dispatch ile de o actionu verdiğimiz fonksiyon.
      }} />

      <Button title='Azalt' onPress={()=>{
        dispatch({type:'decrement', payload:1}) //type increment olunca 1 artırma işlemi yapıcaz
      }} />

    </View>
  )
}

const styles = StyleSheet.create({})