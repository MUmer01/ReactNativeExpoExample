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

const Dashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.button}>Dashboard Screen</Text>
    </View>
  );
};

export default Dashboard;

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
