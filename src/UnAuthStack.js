import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Login";
import Signup from "./Signup";

const Stack = createNativeStackNavigator();

const UnAuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          title: "SignUp Title",
        }}
      />
    </Stack.Navigator>
  );
};

export default UnAuthStack;
