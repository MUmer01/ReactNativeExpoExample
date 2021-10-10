import React, { Component, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button } from "native-base";

const Home = () => {
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <Button
        padding="2"
        variant="solid"
        style={styles.buttonContainer}
        onPress={() => {
          navigation.navigate("UnAuthStack");
        }}
      >
        <Text style={styles.button}>Login</Text>
      </Button>
      <Button
        padding="2"
        variant="outline"
        style={styles.buttonContainer}
        onPress={() => {
          navigation.navigate("UnAuthStack", {
            screen: "Signup",
          });
        }}
      >
        <Text style={styles.button}>Signup</Text>
      </Button>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
    // flexWrap: "wrap",
  },
  button: {
    fontSize: 50,
  },
  buttonContainer: {
    width: 300,
    marginBottom: 20,
  },
});
