import { createContext } from "react";

const CartContext = createContext({
  cantidadProductosAComprar: 0,
  totalCompra: 0,
  productosAComprar: [],
  metodoDeDespacho: "",
  metodoCompra: "",
  agregarDetalleCompra: () => {},
  traspasoMetodoDespacho : () => {}
});

export default CartContext;
