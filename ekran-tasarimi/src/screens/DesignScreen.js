import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function DesignScreen() {
  return (
    <View style={styles.mainView}>
        {/* <View style={{width:50,height:50,backgroundColor:"red"}} /> */}

        <Text style={styles.mainTextOne}> 1 </Text>
        
        <Text style={styles.mainTextTwo}> 2 </Text>
        
        <Text style={styles.mainTextThree}> 3 </Text>


    </View>
  )
}

const styles = StyleSheet.create({

    //child componente kendi kendine hizalama yapmak istediğimizde alignSelf ten yararlanabilirim.

    mainView:{
        //flexDirection:"row" webde display flex default olarak row dur ama react nativede default olarak column dur. bundan alignitems ve justifyContent de etkileniyor. Kapsayıcıda hizalama yapıyor  
        
        //alignItems normalde webde dikey hizalamadır ama react nativede yatay hizalama yapıyor.
        //justifyContent react nativede dikey hizalama yapıyor
        
        borderWidth:1,
        borderColor:"black",
        margin:20,
        borderRadius:10,
        height:740
        //alignItems:"flex-start", 
    },
    mainTextOne:{
        borderWidth:1,
        borderColor:"red",
        margin:30,
        padding:10,
        borderRadius:5,
        //position:"absolute" kapsayıcıya göre konumlandırma yapıyor. Hangi kapsayıcısı varsa yani bir üst parentı neyse ona göre hizalıyor
        // top:0, bu 4 ü de position absolute da her taraftan 0 boşluk verecek bunu kapsayan divin genişliği ve yüksekliği gibi olacak
        // bottom:0,
        // left:0,
        // right:0


        //alignSelf:"flex-end" bu da kendi kendine hizalatıyor. yani sadece bu etkileniyor
        //flex:4 //verirken bootstrap de 12 ya burada da 10. flex 4 deyince %40 gibi düşün. Bunu hep 10 a tamamlayacak gibi düşün. Dağtımı flex:2, diğer flexlere de 2 ve 1 verirsek %40 %40 %20 olur bu seferde.
    },
    mainTextTwo:{
        borderWidth:1,
        borderColor:"red",
        margin:30,
        padding:10,
        borderRadius:5,
        //flex:5
    },
    mainTextThree:{
        borderWidth:1,
        borderColor:"red",
        margin:30,
        padding:10,
        borderRadius:5,
        //flex:1 //mesela yukarıdaki mainlerde flex yazmadık geldik en sonki elementin main cssine yazdık. Üstlerde flex olmayacak ya bundan dolayı kalan boşluğu da buradaki flex kapatacak. Boş alana flex atayınca orayı da flex kapatıyor 
    }
})