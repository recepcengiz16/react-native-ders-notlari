//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import CoursesScreen from './src/screens/CoursesScreen';

const Stack = createNativeStackNavigator();

export default function App() {

  //React navigation ile sayfalar arası geçiş yapabiliyoruz. reactnavigation.org sitesini incelemelisin. npm install @react-navigation/native ilk bunu kuruyoruz sonra da npm install @react-navigation/native-stack bunu kurmamız lazım. Daha sonra da ek olarak npx expo install react-native-screens react-native-safe-area-context bunu da kurmamız lazım

  //react native cross platformdur ve çalışma mantığı işletim sistemi üzerine kurulu js motoru tarafından direk kodlar iletilir işletim sistemine. Yani arada bir köpri var gibi düşünebilirsin. Native de ise uygulama da bir aksiyon aldığında direk işletim sistemine gider ve orada derlenir
  
  const message="Javascript";
  const courses = [
    {name:"Angular",id:1}, //liste içerisinde dönerken vue js deki gibi bir key tanımlamamız lazım ya burada da aynı mantık var. O yüzden id propertysini de ekliyorum
    {name:"Vue Js",id:2},
    {name:"React Js",id:3},
    {name:"React Native",id:4},
    {name:"C#",id:5}
  ];

  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="AnaSayfa" component={HomeScreen} />
        <Stack.Screen name="Kurslarım" component={CoursesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
  
  // return ( //parantez olmadan nasıl çalışır. Şu şekilde <View>  bunu returnun yanına aynı satırına almak lazım, yani kapsayıcıyı

  // <View style={styles.container}>
     
  //     {/* JSX, bir JavaScript uzantısıdır ve React tarafından anlaşılır bir şekilde işlenir. JSX içinde HTML benzeri etiketler kullanarak, React veya React Native uygulamalarında görünen bileşenleri tanımlamak daha kolay ve anlaşılır hale gelir.  */}

  //     {/* View componentini kapsayıcı div mantığında düşünebiliriz. */}


  //     {/* text komponenti text ifadeleri yazabilmek için */}
  //     {/* 
  //     <Text>Hello World</Text>
  //     */}

      
  //     {/* dinamik olarak js ifadelerini vermek için tek süslü parantez */}
  //     {/* 
  //     <Text style={styles.title}>React Native Öğreniyorum</Text>  
  //     */}
      
  //     {/* inline olarak css vermek istiyorsak o da çift süslü parantez ile */}
  //     {/*
  //      <Text style={{fontSize:60,marginBottom:50}}>merhaba</Text>
  //     */}


  //     {/* tek süslü parantez ile de js değişkenlerine erişebiliyorum.  */}
  //     {/* 
  //     <Text>{message}</Text> 
  //     */}
      

  //     {/* select optionda vue js de döndüğüm gibi düşünebilirsin yani bir liste içinde döndüğümü düşün listeyi göstermek için var flatlist select gibi değil ama, data dediğim liste istiyor benden, v-for mantığı da renderItem oluyor burada. */}
  //     {/* <FlatList 
  //     data={courses}
  //     renderItem={({item})=> {
  //       return <Text> {item.name} </Text>
  //     }}
  //     keyExtractor={(item)=>item.id} //vue js deki gibi key hangisi key itemdaki id. item da liste içindeki her bir elemanı temsil ediyor
  //     //horizontal yatay olarak listeler. horizontal={true} arasında fark yok kısaltması direk ismi
  //     //showsHorizontalScrollIndicator={false} dersen horizontaldaki scroolbar kaybolmuş oluyor
  //     /> */}

  //   <NavigationContainer />

   
   


  // </View>
  // );
}

//cssleri de inline olarak ya da stylesheet ile tanımlayabiliyoruz

const styles = StyleSheet.create({ //stylesheet ile de css oluşturmayı sağlıyoruz. O style a erişirken de style.container diyerek erişebiliyoruz. Camelcase ile style propertylerini oluşturuyoruz
  container: {
    flex: 1, //comple bütün ekranı kaplamasını sağlıyorum flex:1 diyerek view componentine
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    //marginVertical:10 yukarıdan aşağıya margin değeri verir.
    //padding:5 verdiğim arka plan ile content arasına boşluk vermek için
  },
  title:{
    fontSize:50,
  }
});
