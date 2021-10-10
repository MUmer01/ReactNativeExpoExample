import { useContext } from 'react';
import { AuthContext } from '../Provider/Auth/contex';

const useAuthContext = () => {
  const authData = useContext(AuthContext);
  return authData;
};

export { useAuthContext };
