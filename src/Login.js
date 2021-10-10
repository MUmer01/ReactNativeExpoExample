import React from "react";
import { StyleSheet, View } from "react-native";
// import { useNavigation } from "@react-navigation/native";
import { Box, Button, Text, TextField } from "native-base";
import { validatePassword, validateUserName } from "./common/utils";
import { useAuthContext } from "./hooks/auth";

const Login = () => {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [nameError, setNameError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

  const { loginUser } = useAuthContext();
  // const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text fontSize="5xl">Login</Text>
      <TextField
        _errorMessageProps={{
          style: {
            marginBottom: 10,
            fontSize: 15,
          },
        }}
        style={styles.textField}
        isInvalid={!!nameError}
        errorMessage={nameError}
        value={name}
        onChangeText={(value) => {
          setName(value);
          const error = validateUserName(value);
          setNameError(error);
        }}
        placeholder="Enter Username"
      />
      <TextField
        _errorMessageProps={{
          style: {
            marginBottom: 10,
            fontSize: 15,
          },
        }}
        style={styles.textField}
        isInvalid={!!passwordError}
        errorMessage={passwordError}
        value={password}
        onChangeText={(value) => {
          setPassword(value);
          const error = validatePassword(value);
          setPasswordError(error);
        }}
        placeholder="Enter Password"
        secureTextEntry
      />
      <Box>
        <Button
          isDisabled={!name || !password || !!nameError || !!passwordError}
          padding="2"
          variant="solid"
          style={styles.buttonContainer}
          onPress={() => {
            loginUser({ name, password });
          }}
          size="lg"
        >
          Login
        </Button>
      </Box>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    fontSize: 50,
  },
  buttonContainer: {
    width: 300,
    marginBottom: 20,
  },
  textField: {
    width: 300,
    borderColor: "#000000",
    fontSize: 20,
  },
});
