import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Categories from './pages/categories/Categories'
import Foods from './pages/foods/Foods'
import Detail from "./pages/detail/Detail";

const Stack = createNativeStackNavigator()

const App = ()=>{
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="categories" component={Categories} />
        <Stack.Screen name="foods" component={Foods} />
        <Stack.Screen name="foodDetail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App