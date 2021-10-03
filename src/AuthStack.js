import * as React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Platform,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Dashboard from "./Dashboard";

const LoginStack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <LoginStack.Navigator>
      <LoginStack.Screen
        name="AuthHome"
        component={Dashboard}
        options={{
          headerLeft: () => <></>,
        }}
      />
    </LoginStack.Navigator>
  );
};

export default AuthStack;
