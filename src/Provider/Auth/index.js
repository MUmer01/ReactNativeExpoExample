import React from "react";
import { useNavigation } from "@react-navigation/native";
import useAuthCounteiner from "../../containers/auth";
import { AuthContext } from "./contex";
import {
  setLocalStorage,
  getLocalStorage,
  removeLocalStorage,
} from "../../common/utils";
import { localStorageKeys } from "../../common/constant";
import { Alert } from "react-native";

const AuthProvider = (props) => {
  const { createUser, loginUser } = useAuthCounteiner();
  const [token, setToken] = React.useState("");
  const [user, setUser] = React.useState({});
  const navigation = useNavigation();

  const registerUser = async ({ name, email, password }) => {
    const res = await createUser(name, email, password);
    if (res.isSuccess) {
      navigation.navigate("Login");
    }
    Alert.alert(res.message);
  };

  const logout = () => {
    setUser({});
    setToken("");
    removeLocalStorage(localStorageKeys.USER);
    removeLocalStorage(localStorageKeys.AUTH_TOKEN);
  };

  const login = async ({ name, password }) => {
    const res = await loginUser(name, password);
    if (res.isSuccess) {
      setToken(res.data.token);
      setUser(res.data.user);
    } else {
      Alert.alert(res.message);
    }

    // if (res && res.loggedIn) {
    //   alert("Success");
    //   setUser({
    //     username: res.username,
    //   });
    // } else {
    //   alert("Fail");
    // }
  };

  const getAsyncData = async () => {
    const _user = await getLocalStorage(localStorageKeys.USER);
    const _token = await getLocalStorage(localStorageKeys.AUTH_TOKEN);
    if (_user && _token) {
      setUser(_user);
      setToken(_token);
    } else {
      logout();
    }
  };

  // Auto Login after reopen the Application
  React.useEffect(() => {
    getAsyncData();
  }, []);

  React.useEffect(() => {
    if (user?.id) {
      setLocalStorage(localStorageKeys.USER, user, 24);
    }
  }, [user]);

  React.useEffect(() => {
    if (token) {
      setLocalStorage(localStorageKeys.AUTH_TOKEN, token, 24);
    }
  }, [token]);

  const providerValues = {
    user,
    token,
    registerUser,
    loginUser: login,
    logoutUser: logout,
  };

  return (
    <AuthContext.Provider value={providerValues}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
