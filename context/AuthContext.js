import { createContext } from "react";

const AuthContext = createContext({
  auth: undefined,
  login: () => null,
  logout: () => null,
  setReloadUser: () => null,
  rol : undefined
});

export default AuthContext;