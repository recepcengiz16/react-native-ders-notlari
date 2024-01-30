import { StyleSheet, Text, View,TextInput } from 'react-native'
import React,{useState} from 'react'

export default function PasswordScreen() {
    const [password, setPassword] = useState("");
  
    return (
    <View style={styles.main}>
      <Text>Şifre Giriniz: </Text>
      <TextInput 
        style={styles.input}
        autoCapitalize='none' 
        autoCorrect={false}
        value={password} //onchange ile passwordun yeni değeri elde edilmiş oluyor ve ekrana basarken de value ile yeni değeri alıyoruz
        onChangeText={(newValue)=>{setPassword(newValue)}}
      /> 
      {password.length < 6 ? (<Text>Şifre en az 6 karakter olmalıdır.</Text>) : null}
      {/* 
      autoCapitalize='none': textboxa yazarken otomatik büyük harfle başlıyor, otomatik büyük harfle başlamasını kapattım autocapitalize='none' ile
      autoCorrect={false} => bu da telefonda bir şey yazarken tahmin çıkıyor ya onu kapatıyor
      
      */}
    </View>
  )
}

const styles = StyleSheet.create({
    main:{
        margin:10
    },
    input:{
        borderColor:"black",
        borderWidth:1,
        padding:5
    }
})