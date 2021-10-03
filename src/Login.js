import React, { Component } from "react";
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
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.button}>Login Screen</Text>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("AuthStack");
        }}
      >
        <Text style={styles.button}>Login Button</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    flexWrap: "wrap",
  },
  button: {
    fontSize: 50,
  },
});
