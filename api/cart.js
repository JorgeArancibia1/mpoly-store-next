import { includes, size, remove } from "lodash";
import { toast } from "react-toastify";
import { BASE_PATH, CART } from "../utils/constans";
import { authFetch } from "../utils/fetch";

export const getProductsCart =  () => {
  const cart = localStorage.getItem(CART);
  if (!cart) {
    return null;
  } else {
    const products = cart.split(",");
    return products;
  }
};

export const addProductCart =  (idProduct) => {
  const cart = getProductsCart();

  if (!cart) {
    localStorage.setItem(CART, idProduct)
    toast.success("Producto añadido al carrito.")
  } else {
    const productFound = includes(cart, idProduct)
    if(productFound){
      toast.warning("Este producto ya esta en el carrito.")
    }else{
    cart.push(idProduct)
    localStorage.setItem(CART, cart)
    toast.success("Producto añadido correctamente.")
    }
  }
};

export const setPendingProduct =  async(idProduct, logout) => {
  try {
    const url = `${BASE_PATH}/products/${idProduct}`;
    const params = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({estado: "Pendiente"}),
    };
    const result = await authFetch(url, params, logout);
    console.log(url, params, logout)
    console.log("resultProduct => ", result)
    // if (result.statusCode !== 200) throw "Error al crear producto";
    return result;


  } catch (error) {
    if(idProduct === undefined){
      console.error(`El id del producto viene undefined.${error}`)
    }
    console.error(`Ha ocurrido un error al colocar un producto como pendiente.${error}`)
    return null;
  }
};

export const setProductoDisponible =  async(idProduct, logout) => {
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
    console.log("resultProduct => ", result)
    // if (result.statusCode !== 200) throw "Error al crear producto";
    return result;


  } catch (error) {
    console.error(`Ha ocurrido un error al colocar un producto como disponible.${error}`)
    return null;
  }
};

export const countProductsCart =  () => {
  const cart = getProductsCart();

  if (!cart) {
    return 0;
  } else {
    return size(cart);
  }
};

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

export async function paymentCartApi(token, products, idUser, logout, metodoDespacho, metodoCompra) {
  try {
    const url = `${BASE_PATH}/orders`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        token,
        products,
        idUser,
        metodoDespacho,
        metodoCompra
      }),
    };
    const result = await authFetch(url, params, logout);
    console.log(result)
    return result;
  } catch (error) {
    console.log("no se pudo realizar el pago", error);
    return null;
  }
};

