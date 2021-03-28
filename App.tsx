import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer  } from '@react-navigation/native';
import {createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import Library from './src/screens/Library';
import Premium from './src/screens/Premium';
import { Ionicons } from '@expo/vector-icons';
import {ThemeProvider} from '@shopify/restyle';
import { theme } from './src/components';


const Tabs = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
    <NavigationContainer>
        <Tabs.Navigator
       barStyle={{ backgroundColor: theme.colors.primary }}
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
      </ThemeProvider>
  );
}
