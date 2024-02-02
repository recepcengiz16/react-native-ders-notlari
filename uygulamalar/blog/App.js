import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CreateScreen from './screens/CreateScreen';
import { BlogProvider } from './context/BlogContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return ( //blogproviderı kapsayıcı olarak yazdık çünkü data alışverişinde her sayfada kullanılabilmesi için
    <BlogProvider> 
      <NavigationContainer>
        <Stack.Navigator  screenOptions={{ headerTitle : `Foster'ın Hayali Dostlar Mekanı` }}>
          <Stack.Screen name="Index" component={HomeScreen} />    
          <Stack.Screen name="Create" component={CreateScreen} />    
        </Stack.Navigator>
      </NavigationContainer>
    </BlogProvider>
  );
}


