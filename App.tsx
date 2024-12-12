import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { Button, Icon } from "@rneui/base";
import UserList from "./src/UserList";
import UserForm from "./src/UserForm";
import users, { User } from "./src/data/users";
import Routes from "./src/routes";


export default function App() {
  return (
    <Routes/>
  )
}
