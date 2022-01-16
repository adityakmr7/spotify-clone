import { StatusBar } from "expo-status-bar";
import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Home from "./src/screens/Home";
import Search from "./src/screens/Search";
import Library from "./src/screens/Library";
import Premium from "./src/screens/Premium";
import { Ionicons } from "@expo/vector-icons";
import { ThemeProvider } from "@shopify/restyle";
import { Box, theme, Text } from "./src/components";
import PlayScreen from "./src/screens/PlayScreen";
import TabNavigation from "./src/Navigation/TabNavigation";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./src/screens/Login";

const Stack = createStackNavigator();

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <StatusBar  backgroundColor={theme.colors.darkLight} style="dark"/> */}
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Login"
            component={Login}
          />
          <Stack.Screen options={{headerShown: false}} name="Home" component={TabNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
