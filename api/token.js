import jwtDecode from "jwt-decode"
import { TOKEN } from "../utils/constans"

export const setToken = (token) => {
  localStorage.setItem(TOKEN, token)
}

export const getToken = () => {
  return localStorage.getItem(TOKEN)
}

export const removeToken = () => {
  return localStorage.removeItem(TOKEN)
}

export const hasExpiredToken = (token) => {
  const tokenDecode = jwtDecode(token);
  const expireDate = tokenDecode.exp * 1000;
  const currentDate = new Date().getTime();

  if (currentDate > expireDate) {
    return true;
  }
  return false;
}