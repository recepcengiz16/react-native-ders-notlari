import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CreateScreen from './screens/CreateScreen';
import ShowScreen from './screens/ShowScreen';
import { Provider } from './context/BlogContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return ( //providerı kapsayıcı olarak yazdık çünkü data alışverişinde her sayfada kullanılabilmesi için
    <Provider> 
      <NavigationContainer>
        <Stack.Navigator  screenOptions={{ headerTitle : `Foster'ın Hayali Dostlar Mekanı` }}>
          <Stack.Screen name="Index" component={HomeScreen} />    
          <Stack.Screen name="Create" component={CreateScreen} />    
          <Stack.Screen name="Show" component={ShowScreen} />    
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}


