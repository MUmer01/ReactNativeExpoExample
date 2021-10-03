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

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("UnAuthStack");
        }}
      >
        <Text style={styles.button}>Login</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("UnAuthStack", {
            screen: "Signup",
          });
        }}
      >
        <Text style={styles.button}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

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
