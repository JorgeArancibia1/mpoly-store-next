import { getToken, hasExpiredToken } from "../api/token";

export const authFetch = async(url, params, logout) => {
  const token = getToken();

  if (!token) {
    //Usuario no está logeado
    logout()
  } else {
    if (hasExpiredToken(token)) {
      //Token caducó
      logout();
    } else {
      // Token vigente
      const paramsTemp = {
        ...params,
        headers: {
          ...params?.headers,
          Authorization: `Bearer ${token}`
        }
      }
      try {
        const response = await fetch(url, paramsTemp);
        const result = await response.json();
        return result;
      } catch (e) {
        console.log("Error al verificar al usuario en authFetch ", e)
      }
    }
  }
}