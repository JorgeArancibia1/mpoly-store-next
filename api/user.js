import { BASE_PATH } from "../utils/constans";

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
