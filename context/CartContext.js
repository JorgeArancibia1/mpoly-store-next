import { createContext } from "react";

const CartContext = createContext({
  productsCart: 0,
  addProductsCart: () => null,
  getProductsCart: () => null,
  removeProductCart: () => null,
  removeAllProductsCart: () => null,
});

export default CartContext;
