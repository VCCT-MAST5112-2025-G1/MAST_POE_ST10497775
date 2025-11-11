import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Welcome from './Screens/WelcomeChef';
import Menu from './Screens/SecondScreen';
import List from './Screens/Thirdscreen';
import Filter from './Screens/Fourthscreen';
import { Ionicons } from '@expo/vector-icons';

const stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: '#000000fe',
        tabBarStyle: {
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: 'black',
          borderWidth: 1,
          paddingRight: 70,
          borderRadius: 10,
          backgroundColor: '#43df43fe',

          paddingBottom: 6,
        },
        tabBarItemStyle: {
          alignItems: 'center',
          justifyContent: 'center',
        },
        tabBarIcon: ({ color, size }) => {
          let iconName = 'ellipse';

          if (route.name === 'Welcome') {
            iconName = 'home-outline';
          } else if (route.name === 'Menu') {
            iconName = 'restaurant-outline';
          } else if (route.name === 'List') {
            iconName = 'list-outline';
          } else if (route.name === 'Filter') {
            iconName = 'filter-outline';
          }

          return <Ionicons name={iconName as any} size={24} color={color} style={{ textAlign: 'center' }} />;
        },
        headerShown: false,
        tabBarLabelStyle: { fontSize: 12, textAlign: 'center' },
      })}
    >
      <Tab.Screen name="Welcome" component={Stacknavigator} options={{ tabBarButton: () => null, tabBarLabel: 'Welcome' }} />
      <Tab.Screen name="Menu" component={Menu} options={{ tabBarLabel: 'Menu' }} />
      <Tab.Screen name="List" component={List} options={{ tabBarLabel: 'List' }} />
      <Tab.Screen name="Filter" component={Filter} options={{ tabBarLabel: 'Filter' }} />
    </Tab.Navigator>
  );
}

function Stacknavigator() {
  return (
    <stack.Navigator>
      <stack.Screen name="Welcome1" component={Welcome} options={{ headerShown: false }} />
    </stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}






