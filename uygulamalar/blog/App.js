import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import CreateScreen from './screens/CreateScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerTitle : `Foster'ın Hayali Dostlar Mekanı` }}>
        <Stack.Screen name="Create" component={CreateScreen} />    
        <Stack.Screen name="Home" component={HomeScreen} />    
      </Stack.Navigator>
    </NavigationContainer>
  );
}


