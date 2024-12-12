import { View, Text, FlatList, Image } from "react-native";
import React, { useEffect } from "react";

import { api } from "./services/api";

export default function UserList() {

  useEffect(() => {
   
    loadCostumer()
    console.log(loadCostumer())
  }, [])

  async function loadCostumer (){ 
    console.log('CHAMOU')
    const response = await api.get('/listCustomer')

    console.log('customers**', response.data)
  }



  return (
    <View>
      
    </View>
  );
}
