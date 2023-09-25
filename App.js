import React from "react";
import { View, Button, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./app/components/navigation/AppNavigator";
import navigationTheme from "./app/components/navigation/navigationTheme";

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
