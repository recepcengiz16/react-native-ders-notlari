import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CreateScreen from './screens/CreateScreen';
import ShowScreen from './screens/ShowScreen';
import { Provider } from './context/BlogContext';
import { TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import EditScreen from './screens/EditScreen';
import { EvilIcons } from '@expo/vector-icons';


const Stack = createNativeStackNavigator();


//header right da index sayfasında sağda demek burada da sağda + iconu yani ekleme iconu mevcut
export default function App() {
  return ( //providerı kapsayıcı olarak yazdık çünkü data alışverişinde her sayfada kullanılabilmesi için
    <Provider> 
      <NavigationContainer>
        <Stack.Navigator  screenOptions={{ headerTitle : `Foster'ın Hayali Dostlar Mekanı` }}>
          
          <Stack.Screen name="Index" component={HomeScreen} options={({navigation})=>({
            headerRight:()=>(
              <TouchableOpacity onPress={()=>navigation.navigate("Create")}>
                  <AntDesign name="plus" size={24} color="black" />
              </TouchableOpacity>
            )
          })} />    
          
          <Stack.Screen name="Create" component={CreateScreen} />    
          <Stack.Screen name="Show" component={ShowScreen} 
            options={({navigation,route})=>({
              headerRight:()=>(
                <TouchableOpacity onPress={()=>navigation.navigate("Edit",{id:route.params.id})}>
                    <EvilIcons name="pencil" size={34} color="black" />
                </TouchableOpacity>
              )
            })}
          
          />    
          <Stack.Screen name="Edit" component={EditScreen} />    

        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


