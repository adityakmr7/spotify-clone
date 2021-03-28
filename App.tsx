import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer ,DefaultTheme } from '@react-navigation/native';
import {createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Library from './src/screens/Library';
import Premium from './src/screens/Premium';
import { Ionicons} from '@expo/vector-icons';


const Tabs = createMaterialBottomTabNavigator();
const MyTheme = {

  dark:false,
  colors: {
    primary: 'rgb(28, 28, 30)',
    background: 'rgb(28, 28, 30)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(255, 255, 255)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
};
export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color="black", size= 26 }) => {
          let iconName:any;

          if (route.name === 'Home') {
            iconName = focused
              ? 'home-outline'
              : 'home-outline';
          } else if (route.name === 'Search') {
            iconName = focused ? 'search-outline' : 'search-outline';
          } else if (route.name === "Library") {
            iconName = focused ? 'library-outline' : 'library-outline';
            
          } else if (route.name === "Premium") {
            iconName = focused ? 'at-outline' : 'at-outline';
            
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'black',
        showLabel:true,
      }}
      
      >
        <Tabs.Screen name="Home" component={Home} />
        <Tabs.Screen name="Search" component={Search} />
        <Tabs.Screen name="Library" component={Library}/>
        <Tabs.Screen name="Premium" component={Premium}/>
      </Tabs.Navigator>     
    </NavigationContainer>
  );
}
