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
    // console.log ("resultadoProductos => ", result)
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

export const crearProducto = async(producto, logout, categoria, tipo) => {
  console.log(categoria)
  // console.log("resultCrearProduct => ", producto)
  // console.log("LogoutCrearProducto => ", logout)
  producto.estado = "Disponible"
  producto.categoria = categoria
  producto.tipo = tipo
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
    // console.log("resultProduct => ", result)
    // if (result.statusCode !== 200) throw "Error al crear producto";
    return result;
  } catch (error) {
    console.error(`Ha ocurrido un error al crear un producto.${error}`)
    return null;
  }
}

export const editarProducto = async(idProduct, producto, logout, categoria, tipo) => {
  // console.log("idEditarProduct => ", idProduct)
  // console.log("resultEditarProducto => ", producto)
  // console.log("resultLogoutProduct => ", logout)

  console.log(categoria, tipo)
  producto.estado = "Disponible"
  if(categoria){
    producto.categoria = categoria
  }
  if(tipo){
    producto.tipo = tipo
  }
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
  // console.log("resultProduct => ", idProduct)

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
    // console.log("resultProduct => ", result)
    // if (result.statusCode !== 200) throw "Error al crear producto";
    return result;


  } catch (error) {
    console.error(`Ha ocurrido un error al crear un producto.${error}`)
    return null;
  }
}

export const obtenerVentasPorFecha = async(limit, tipo) => {
  let filter = '';
  const limitItems = `_limit=${limit}`;
  const sortItems = "_sort=createdAt:desc";
  if(tipo) filter = `tipo.nombreTipo=${tipo}`;
  const url = `${BASE_PATH}/products?${limitItems}&${sortItems}&${filter}`;
  try {
    const response = await fetch(url);
    const result = await response.json();
    // console.log ("resultadoProductos => ", result)
    return result;
  } catch (error) {
    console.error(`Ha ocurrido un error al traer los últimos productos: ${error}`)
    return null;
  }
}

export const obtenerVendidosPorFecha = async(limit, fechaVenta, categoria ) => {
  let filter1 = '';
  let filter2 = '';
  const limitItems = `_limit=${limit}`;
  const sortItems = "_sort=createdAt:desc";
  if(fechaVenta) filter1 = `fechaVenta=${fechaVenta}`;
  if(categoria) filter2= `categoria.nombreCategoria=${categoria}`;
  const url = `${BASE_PATH}/products/count?${limitItems}&${sortItems}&${filter1}&${filter2}`;
  try {
    const response = await fetch(url);
    const result = await response.json();
    // console.log ("resultadoProductos => ", result)
    return result;
  } catch (error) {
    console.error(`Ha ocurrido un error al traer los últimos productos: ${error}`)
    return null;
  }
}

export const obtenerVendidos = async(limit ) => {
  const limitItems = `_limit=${limit}`;
  const sortItems = "_sort=createdAt:desc";
  let filter1 = `estado=Vendido`;
  const url = `${BASE_PATH}/products?${limitItems}&${sortItems}&${filter1}`;
  try {
    const response = await fetch(url);
    const result = await response.json();
    // console.log ("resultadoProductos => ", result)
    return result;
  } catch (error) {
    console.error(`Ha ocurrido un error al traer los últimos productos: ${error}`)
    return null;
  }  
}

export const searchProducts = async(title ) => {
  
  const url = `${BASE_PATH}/products?_q=${title}`;
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(`Ha ocurrido un error al buscar productos: ${error}`)
    return null;
  }  
}

export const obtenerProductoPorId = async(idProduct) => {
  // const limitItems = `_limit=${limit}`;
  // const sortItems = "_sort=createdAt:desc";
  // console.log(idProduct)
  const filter = `id=${idProduct}`
  const url = `${BASE_PATH}/products?${filter}`;
  try {
    const response = await fetch(url);
    const result = await response.json();
    // console.log(result)
    return result;
  } catch (error) {
    console.error(`Ha ocurrido un error al traer un producto por su id: ${error}`)
    return null;
  }
}

export const obtenerPendientes = async(limit ) => {
  const limitItems = `_limit=${limit}`;
  const sortItems = "_sort=createdAt:desc";
  let filter1 = `estado=Pendiente`;
  const url = `${BASE_PATH}/products?${limitItems}&${sortItems}&${filter1}`;
  try {
    const response = await fetch(url);
    const result = await response.json();
    // console.log ("resultadoProductos => ", result)
    return result;
  } catch (error) {
    console.error(`Ha ocurrido un error al traer los productos pendientes: ${error}`)
    return null;
  }  
}

export const confirmarProducto = async(idProduct, logout) => {
  // console.log("resultProduct => ", idProduct)

  try {
    const url = `${BASE_PATH}/products/${idProduct}`;
    const params = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({estado: "Vendido"}),
    };
    const result = await authFetch(url, params, logout);
    // console.log("resultProduct => ", result)
    // if (result.statusCode !== 200) throw "Error al crear producto";
    return result;


  } catch (error) {
    console.error(`Ha ocurrido un error al confirmar un producto.${error}`)
    return null;
  }
}

export const marcarProductoComoDisponible = async(idProduct, logout) => {
  // console.log("resultProduct => ", idProduct)

  try {
    const url = `${BASE_PATH}/products/${idProduct}`;
    const params = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({estado: "Disponible"}),
    };
    const result = await authFetch(url, params, logout);
    // console.log("resultProduct => ", result)
    // if (result.statusCode !== 200) throw "Error al crear producto";
    return result;


  } catch (error) {
    console.error(`Ha ocurrido un error al borrar un producto de la tabla gestion de compras.${error}`)
    return null;
  }
}

export const marcarProductoComoVendido = async(idProduct, logout) => {
  // console.log("resultProduct => ", idProduct)

  try {
    const url = `${BASE_PATH}/products/${idProduct}`;
    const params = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({estado: "Vendido"}),
    };
    const result = await authFetch(url, params, logout);
    // console.log("resultProduct => ", result)
    // if (result.statusCode !== 200) throw "Error al crear producto";
    return result;


  } catch (error) {
    console.error(`Ha ocurrido un error al marcar un producto como vendido.${error}`)
    return null;
  }
}