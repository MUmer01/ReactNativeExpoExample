import React from 'react';

const AuthContext = React.createContext({
  user: {},
  token: '',
  registerUser: () => {},
  loginUser: () => {},
  logoutUser: () => {},
});

export { AuthContext };
