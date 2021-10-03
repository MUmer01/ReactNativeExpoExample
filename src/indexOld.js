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
} from "react-native";

const Main = () => {
  let screen = Dimensions.get("screen");
  let window = Dimensions.get("window");
  const statusBarHeight = screen.height - window.height;
  console.log("-------------" + Platform.OS + "----------", {
    window,
    screen,
    statusBarHeight,
  });

  const [state, setState] = React.useState("abc");

  return (
    <SafeAreaView style={{ paddingTop: statusBarHeight, flex: 1 }}>
      {/* <ScrollView> */}
      <TouchableWithoutFeedback
        onPress={() => {
          Keyboard.dismiss();
        }}
        accessible={false}
      >
        <View style={{ height: "100%" }}>
          <TextInput
            keyboardType="default"
            style={{ padding: 2, borderWidth: 4, fontSize: 40 }}
            value={state}
            onChangeText={(value) => setState(value)}
          />
          <View style={styles.container}>
            <View style={styles.box}>
              <Text>Hello</Text>
            </View>
            <View style={styles.box}>
              <Text>World</Text>
            </View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}>
              <Text>World</Text>
            </View>
            <View style={styles.box}>
              <Text>World</Text>
            </View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}></View>
            <View style={styles.box}>
              <Text>Last</Text>
            </View>
            <View style={styles.box}>
              <Text>Last</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      {/* </ScrollView> */}
      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    flexWrap: "wrap",
  },
  box: {
    borderColor: "#0000ff",
    borderWidth: 2,
    width: "50%",
    height: 100,
    // flex: 1,
  },
});
