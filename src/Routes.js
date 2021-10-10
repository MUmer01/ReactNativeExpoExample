import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import AuthStack from "./AuthStack";
import UnAuthStack from "./UnAuthStack";
import { useAuthContext } from "./hooks/auth";
import { useNavigation } from "@react-navigation/core";

const Stack = createNativeStackNavigator();

const Routes = () => {
  const { token } = useAuthContext();
  const navigation = useNavigation();

  React.useEffect(() => {
    if (token) {
      navigation.navigate("AuthStack");
    } else {
      navigation.navigate("Home");
    }
  }, [token]);

  return (
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
  );
};

export default Routes;
