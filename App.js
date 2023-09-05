import React, { useState } from "react";
// import WelcomeScreen from "./app/screens/WelcomeScreen";
import { TextInput, View, Text, Switch } from "react-native";
import Card from "./app/components/Card";
import ListItem from "./app/components/ListItem";
import ListingDetailScreen from "./app/screens/ListingDetailScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import MyAccountScreen from "./app/screens/MyAccountScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Screen from "./app/components/Screen";
import ListingScreen from "./app/screens/ListingScreen";
import AppTextInput from "./app/components/AppText/AppTextInput";
import AppPicker from "./app/components/AppPicker";
import LoginScreen from "./app/screens/LoginScreen";
import AppButton from "./app/components/AppButton";
import RegisterScreen from "./app/screens/RegisterScreen";
import ListingEditScreen from "./app/screens/ListingEditScreen";

export default function App() {
  return <ListingEditScreen />;
}
