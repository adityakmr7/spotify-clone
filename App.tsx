import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";

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
import { Provider, useSelector } from "react-redux";
import { store } from "./src/redux";
import { userSelector } from "./src/redux/slices/user";
import { getData } from "./src/utils/storage";

const Stack = createStackNavigator();

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  useEffect(() => {
    fetchUser();
  }, []);
  const fetchUser = async () => {
    const user = await getData("@access_token");
    if (!user) {
      setIsAuthenticated(false);
    } else {
      setIsAuthenticated(true);
    }
  };
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {/* <StatusBar  backgroundColor={theme.colors.darkLight} style="dark"/> */}
        <NavigationContainer>
          <Stack.Navigator>
            {!isAuthenticated ? (
              <Stack.Screen
                options={{ headerShown: false }}
                name="Login"
                component={Login}
              />
            ) : (
              <Stack.Screen
                options={{ headerShown: false }}
                name="Home"
                component={TabNavigation}
              />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </Provider>
  );
}
