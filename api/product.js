import { BASE_PATH } from "../utils/constans";

export const getLastProducts = async(limit) => {
  try {
    const limitItems = `_limit=${limit}`;
    const sortItems = "_sort=createdAt:desc";
    const url = `${BASE_PATH}/products?${limitItems}&${sortItems}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(`Ha ocurrido un error al traer los últimos productos: ${error}`)
    return null;
  }
}