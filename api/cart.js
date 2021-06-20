import { includes, size, remove } from "lodash";
import { toast } from "react-toastify";
import { CART } from "../utils/constans";

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