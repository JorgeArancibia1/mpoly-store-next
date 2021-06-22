import { createContext } from "react";

const CartContext = createContext({
  cantidadProductosAComprar: 0,
  totalCompra: 0,
  productosAComprar: [],
  metodoDespacho: "",
  metodoCompra: "",
  agregarDetalleCompra: () => {},
  traspasoMetodoDespacho : () => {},
  traspasoMetodoPago : () => {}
});

export default CartContext;
