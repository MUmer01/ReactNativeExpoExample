import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { NativeBaseProvider } from "native-base";
import Routes from "./Routes";
import AuthProvider from "./Provider/Auth";
import PostProvider from "./Provider/Posts";

const Main = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <AuthProvider>
          <PostProvider>
            <Routes />
          </PostProvider>
        </AuthProvider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default Main;
