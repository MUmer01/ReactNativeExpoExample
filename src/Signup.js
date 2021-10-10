import React from "react";
import { StyleSheet, View } from "react-native";
import { Box, Button, Text, TextField } from "native-base";
import {
  validateEmail,
  validatePassword,
  validateUserName,
} from "./common/utils";
import { useAuthContext } from "./hooks/auth";

const Signup = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [nameError, setNameError] = React.useState("");
  const [emailError, setEmailError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");

  const { registerUser } = useAuthContext();

  return (
    <View style={styles.container}>
      <Text fontSize="5xl">Signup</Text>
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
        placeholder="Enter Name"
      />
      <TextField
        _errorMessageProps={{
          style: {
            marginBottom: 10,
            fontSize: 15,
          },
        }}
        style={styles.textField}
        isInvalid={!!emailError}
        errorMessage={emailError}
        value={email}
        onChangeText={(value) => {
          setEmail(value);
          const error = validateEmail(value);
          setEmailError(error);
        }}
        placeholder="Enter Email"
        keyboardType="email-address"
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
          isDisabled={
            !name ||
            !email ||
            !password ||
            !!nameError ||
            !!emailError ||
            !!passwordError
          }
          padding="2"
          variant="solid"
          style={styles.buttonContainer}
          onPress={() => {
            registerUser({
              password,
              email,
              name,
            });
          }}
          size="lg"
        >
          Signup
        </Button>
      </Box>
    </View>
  );
};

export default Signup;

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
