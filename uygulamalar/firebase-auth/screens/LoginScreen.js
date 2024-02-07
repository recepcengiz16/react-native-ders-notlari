import { StyleSheet, Text, View,KeyboardAvoidingView,TextInput, TouchableOpacity } from 'react-native'
import React,{useState,useEffect} from 'react'
import {auth} from "../firebase"
import { useNavigation } from '@react-navigation/native';

export default function LoginScreen() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); //secureTextEntry de şifreyi gizlemeye yarıyor 

    const navigation = useNavigation();

    useEffect(() => {
      
        auth.onAuthStateChanged(user=>{
            if (user) { //Eğer kullanıcı varsa
                navigation.navigate("Home");
            }
        })


    }, [])
    

    const handleLogin = ()=>{
        auth.signInWithEmailAndPassword(email,password).then(userCredentials =>{
            const user = userCredentials.user;
        })
        .catch((error)=>{
            alert(error.message);
        })
        ;
    }


    const handleSignUp = ()=>{
        auth.createUserWithEmailAndPassword(email,password).then(userCredentials => {
            const user = userCredentials.user;
        })
        .catch((error)=>{
            alert(error.message);
        })
        ; //auth üzerinden email ve password ile kayıt olmayı sağlıyor firebase e
    }

  return (//text inputa tıklayınca klavye textinputların üzerine gelmesin otomatik kaydırma yapsın diye var KeyboardAvoidingView
    <KeyboardAvoidingView
        style={styles.container}
        behavior='padding' //paddinge göre otomatik ayarlama yapıyor behavior da padding yazınca.
    >
        <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder='E Mail' value={email} onChangeText={(newValue)=>setEmail(newValue)} />
            <TextInput style={styles.input} placeholder='Şifre'  value={password} onChangeText={(newValue)=>setPassword(newValue)} secureTextEntry/> 
        </View>

        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Giriş Yap</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button,styles.outlineButton]} onPress={handleSignUp}>
                <Text style={styles.outlineButtonText}>Kayıt Ol</Text>
            </TouchableOpacity>
        </View>

    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    inputContainer:{
        width:"75%"
    },
    input:{
        backgroundColor:"white",
        padding:10,
        margin:5,
        borderRadius:15
    },
    buttonContainer:{
        width:"50%",
        marginTop:20
    },
    button:{
        backgroundColor:"#00bfff",
        padding:15,
        alignItems:"center",
        borderRadius:10,
        marginBottom:10
    },
    buttonText:{
        color:"white",
        fontSize:15
    },
    outlineButton:{
        backgroundColor:"#ff3030"
    },
    outlineButtonText:{
        color:"white",
        fontSize:15    
    }
})