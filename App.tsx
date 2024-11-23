import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Button, Icon } from "@rneui/base";
import UserList from "./src/UserList";
import UserForm from "./src/UserForm";



export type RootStackParamList = {
  UserList: undefined; // A tela "Home" não espera parâmetros
  UserForm: { itemId: number; otherParam?: string }; // A tela "Details" espera parâmetros
};
export default function App() {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="UserList" screenOptions={{
        headerStyle:{
          backgroundColor: '#3072a8',
        },
        headerTintColor: '#fff'
      }}>
        <Stack.Screen name="UserList" component={UserList} options={({navigation}) => {
          return {
            title: 'Lista de usuários',
            headerRight: () => (
              <Button title='+' size="md" color='none' onPress={()=> navigation.navigate('UserForm',  { itemId: 42, otherParam: 'Detalhes' })} >
                <Icon name="add" size={25}color='white'/>
              </Button>
            )
          }
        }}  />
        <Stack.Screen name="UserForm" component={UserForm} />
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
