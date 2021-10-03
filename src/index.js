import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import AuthStack from "./AuthStack";
import UnAuthStack from "./UnAuthStack";

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: true,
          }}
        />
        <Stack.Screen name="AuthStack" component={AuthStack} />
        <Stack.Screen name="UnAuthStack" component={UnAuthStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
