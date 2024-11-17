import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import userList from "./src/userList";
import userInfo from "./src/userInfo";

export type RootStackParamList = {
  userList: undefined; // A tela "Home" não espera parâmetros
  userInfo: { itemId: number; otherParam?: string }; // A tela "Details" espera parâmetros
};
export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="userList">
        <Stack.Screen name="userList" component={userList} />
        <Stack.Screen name="userInfo" component={userInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
