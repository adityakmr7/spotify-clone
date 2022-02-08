import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import DetailComponent from "../screens/DetailComponents";
const Stack = createStackNavigator();

const StackHomeNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={Home}
      />
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="Detail"
        component={DetailComponent}
      />
    </Stack.Navigator>
  );
};

export default StackHomeNavigation;
