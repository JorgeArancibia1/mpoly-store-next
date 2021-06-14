import { BASE_PATH } from "../utils/constans";
import { authFetch } from "../utils/fetch";

export const getLastProducts = async(limit, tipo) => {
  let filter = '';
  const limitItems = `_limit=${limit}`;
  const sortItems = "_sort=createdAt:desc";
  if(tipo) filter = `tipo.nombreTipo=${tipo}`;
  const url = `${BASE_PATH}/products?${limitItems}&${sortItems}&${filter}`;
  try {
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

export const crearProducto = async(producto, logout) => {
  console.log("resultCrearProduct => ", producto)
  console.log("LogoutCrearProducto => ", logout)
  producto.estado = "Disponible"
  console.log("result2 => ", producto)

  try {
    const url = `${BASE_PATH}/products`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    };
    const result = await authFetch(url, params, logout);
    console.log("resultProduct => ", result)
    // if (result.statusCode !== 200) throw "Error al crear producto";
    return result;
  } catch (error) {
    console.error(`Ha ocurrido un error al crear un producto.${error}`)
    return null;
  }
}

export const editarProducto = async(idProduct, producto, logout) => {
  console.log("idEditarProduct => ", idProduct)
  console.log("resultEditarProducto => ", producto)
  console.log("resultLogoutProduct => ", logout)
  producto.estado = "Disponible"

  try {
    const url = `${BASE_PATH}/products/${idProduct}`;
    const params = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(producto),
    };
    const result = await authFetch(url, params, logout);
    console.log("resultProduct => ", result)
    // if (result.statusCode !== 200) throw "Error al crear producto";
    return result;
  } catch (error) {
    console.error(`Ha ocurrido un error al crear un producto.${error}`)
    return null;
  }
}

export const borrarProducto = async(idProduct, logout) => {
  console.log("resultProduct => ", idProduct)

  try {
    const url = `${BASE_PATH}/products/${idProduct}`;
    const params = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      // body: JSON.stringify(producto),
    };
    const result = await authFetch(url, params, logout);
    console.log("resultProduct => ", result)
    // if (result.statusCode !== 200) throw "Error al crear producto";
    return result;


  } catch (error) {
    console.error(`Ha ocurrido un error al crear un producto.${error}`)
    return null;
  }
}