import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from './Screens/WelcomeChef';
import Menu from './Screens/SecondScreen';
import { Icon } from 'react-native-screens';
import List from './Screens/Thirdscreen';
import Filter from './Screens/Fourthscreen';


const stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "blue",
        tabBarInactiveTintColor: "#000000fe",
        tabBarStyle: {
          justifyContent: "center",
          alignItems: "center",
          borderColor: "black",
          borderWidth: 1,
          borderRadius: 10,
          backgroundColor: "#43df43fe"
        }
      }}
    >
      <Tab.Screen name="Welcome" component={Stacknavigator} options={{ tabBarButton: () => null }} />
      <Tab.Screen name="Menu" component={Menu} />
      <Tab.Screen name="List" component={List} options={{ tabBarButton: () => null }} />
      <Tab.Screen name="Filter" component={Filter} />
    </Tab.Navigator>
  )
}

function Stacknavigator() {
  return (
    <stack.Navigator>
      <stack.Screen name="Welcome1" component={Welcome} options={{ headerShown: false }} />
    </stack.Navigator>
  )
}


export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  )
}






