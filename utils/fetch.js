import { getToken, hasExpiredToken } from "../api/token";

export const authFetch = async(url, params, logout) => {
  console.log("paramsFetch => ", params)
  const token = getToken();
  console.log("tokenFetch => ", token)

  if (!token) {
    //Usuario no está logeado
    logout()
    console.log("No hay token")  

  } else {
    if (hasExpiredToken(token)) {
      //Token caducó
      logout();
      console.log("El token caducó")
    } else {
      // Token vigente
      const paramsTemp = {
        ...params,
        headers: {
          ...params?.headers,
          Authorization: `Bearer ${token}`
        }
      }
      console.log("paramsTemp => ", paramsTemp)
      console.log("url => ", url)
      try {
        const response = await fetch(url, paramsTemp);
        const result = await response.json();
        console.log(result)
        return result;
      } catch (e) {
        console.log("Error al verificar al usuario en authFetch ", e)
      }
    }
  }
}