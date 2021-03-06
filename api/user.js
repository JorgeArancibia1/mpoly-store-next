import { BASE_PATH } from "../utils/constans";
import { authFetch } from "../utils/fetch";

export const registerAPI = async(formData) => {
  try {
    const url = `${BASE_PATH}/auth/local/register`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    console.log(error)
    return null;
  }
}

// export default registerAPI

export const loginApi = async(formData) => {
  try {
    const url = `${BASE_PATH}/auth/local`
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    }
    const response = await fetch(url, params);
    const result = await response.json();
    return result
  } catch (e) {
    console.error('Error al hacer Login', e);
    return null;
  }
}

// ESTA FUNCION OBTIENE LOS DATOS DEL USUARIO
export const getMeApi = async(logout) => {
  try {
    const url = `${BASE_PATH}/users/me`;
    const result = await authFetch(url, null, logout); // (URL, PARAMS, () => logout)
    return result? result : null;
  } catch (e) {
    console.error('Error al ', e);
    return null;
  }
}