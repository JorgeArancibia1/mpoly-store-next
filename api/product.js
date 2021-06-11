import { BASE_PATH } from "../utils/constans";

export const getLastProducts = async(limit) => {
  try {
    const limitItems = `_limit=${limit}`;
    const sortItems = "_sort=createdAt:desc";
    const url = `${BASE_PATH}/products?${limitItems}&${sortItems}`;
    const response = await fetch(url);
    const result = await response.json();
    console.log ("resultadoProductos => ", result)
    return result;
  } catch (error) {
    console.error(`Ha ocurrido un error al traer los últimos productos: ${error}`)
    return null;
  }
}

export const obtenerProductosSegunTipo = async(limit, tipo) => {
  // console.log("tipo", tipo)
  try {
    const limitItems = `_limit=${limit}`;
    const sortItems = "_sort=createdAt:desc";
    const filter = `tipo.nombreTipo=${tipo}`
    const url = tipo === 'Ofertas'?
    `${BASE_PATH}/products?${limitItems}&${sortItems}`:
      `${BASE_PATH}/products?${limitItems}&${sortItems}&${filter}`;
    // localhost:1337/products?_limit=18&_sort=createdAt:desc&tipo.nombreTipo=Hombre
    const response = await fetch(url);
    const result = await response.json();
    const filtroOfertas = result.filter((r)=>r['descuento']!==undefined)
    // console.log("filtros", filtroOfertas)
    // console.log(result)
    return tipo==='Ofertas' ?filtroOfertas:result;
  } catch (error) {
    console.error(`Ha ocurrido un error al traer los productos segun tipo: ${error}`)
    return null;
  }
}