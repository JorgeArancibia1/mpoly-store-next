import { BASE_PATH } from "../utils/constans";

export const borrarProductoDelCarrito =  (idProduct) => {
  const cart = getProductsCart();
  remove(cart, (item)=> {
    return item.includes(idProduct)
  })

  if (size(cart) > 0) {
    localStorage.setItem(CART, cart)
  } else {
    localStorage.removeItem(CART)
  }
};

export const crearDetalleCompra = async(detalle) => {
console.log("detalle buy => ", detalle)
  try {
    const url = `${BASE_PATH}/detalle-compras`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(detalle),
    };
    const result = await fetch(url, params);
    console.log("resultProduct => ", result)
    // if (result.statusCode !== 200) throw "Error al crear producto";
    return result;
  } catch (error) {
    console.error(`Ha ocurrido un error al crear un producto.${error}`)
    return null;
  }
}

export const traspasoData = (detalle) => {
  return detalle
  }
  
export const traspasarMetodoDespacho = (metodo) => {
  return metodo
  }
  