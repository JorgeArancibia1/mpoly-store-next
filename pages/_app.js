import "../scss/index.scss";
import "semantic-ui-css/semantic.min.css";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";
import AuthContext from "../context/AuthContext";
import CartContext from "../context/CartContext";
import BuyContext from "../context/BuyContext";
import React, { useMemo, useState } from "react";
import jwtDecode from "jwt-decode";
import { getToken, setToken, removeToken } from "../api/token";
import { useEffect } from "react";
import { useRouter } from "next/router";
import {
  addProductCart,
  borrarProductoDelCarrito,
  countProductsCart,
  getProductsCart,
} from "../api/cart";
import useBuy from "../hooks/useBuy";
import { crearDetalleCompra, traspasarMetodoDespacho, traspasarMetodoPago, traspasoData } from "../api/buy";

export default function MyApp({ Component, pageProps }) {
  const [auth, setAuth] = useState(undefined);
  const [reloadUser, setReloadUser] = useState(false);
  const [totalProductsCart, setTotalProductsCart] = useState(0);
  const [reloadCart, setReloadCart] = useState(false);

  const router = useRouter();

  // console.log(auth);

  // ESTO OBTIENE EL TOKEN DEL LOCALSTORAGE SI ES QUE EXISTE, LUEGO SETEA EN EL ESTADO "auth" EL TOKEN Y EL TOKEN COMO SI FUERA EL ID DEL USUARIO.
  useEffect(() => {
    const token = getToken();
    // console.log(token);
    if (token) {
      setAuth({
        token,
        idUser: jwtDecode(token).id,
      });
    } else {
      setAuth(null);
    }
    setReloadUser(false);
  }, [reloadUser]);

  useEffect(() => {
    setTotalProductsCart(countProductsCart());
    setReloadCart(false);
  }, [reloadCart, auth]);

  const login = (token) => {
    // console.log(token)
    setToken(token);
    setAuth({
      token,
      idUser: jwtDecode(token).id,
    });
  };

  const logout = () => {
    if (auth) {
      removeToken();
      setAuth(null);
      router.push("/");
    }
  };
  // console.log(product)
  const addProduct = (product) => {
    const token = getToken();
    if (token) {
      addProductCart(product);
      setReloadCart(true);
    } else {
      toast.warning(
        "Para poder agregar un producto tienes que registrarte e iniciar sesión."
      );
    }
  };

  const removeProduct = (product) => {
    borrarProductoDelCarrito(product);
    setReloadCart(true);
  };

  const agregarDetalle = (detalle) => {
    const token = getToken();
    if (token) {
      const {cantidadProductosComprados, productosAComprar, totalCompra} = detalle
      buyData.totalCompra = totalCompra
      buyData.productosAComprar = productosAComprar
      buyData.cantidadProductosAComprar = cantidadProductosComprados
      console.log("buy Data => ", buyData)
    } else {
      toast.warning(
        "Para poder agregar un producto tienes que registrarte e iniciar sesión."
        );
      }
    };

  const agregarMetodoDespacho = (metodo) => {
    const token = getToken();
    if (token) {
      buyData.metodoDespacho = metodo
    } else {
      toast.warning(
        "Para poder agregar un producto tienes que registrarte e iniciar sesión."
        );
      }
    };

  const agregarMetodoPago = (metodo) => {
    const token = getToken();
    if (token) {
      
      buyData.metodoCompra = metodo
    } else {
      toast.warning(
        "Para poder agregar un producto tienes que registrarte e iniciar sesión."
        );
      }
    };

    
  // ESTE ES EL ESTADO QUE SE ACCEDE GLOBALMENTE DESDE CUALQUIER COMPONENTE
  const authData = useMemo(
    () => ({
      auth,
      login,
      logout,
      setReloadUser,
    }),
    [auth] //El useMemo se va a actualizar cuando el usuario cambie de valor
  );

  const cartData = useMemo(
    () => ({
      productsCart: totalProductsCart,
      addProductCart: (product) => addProduct(product),
      getProductsCart: getProductsCart,
      removeProductCart: (product) => removeProduct(product),
      removeAllProductsCart: () => null,
    }),
    [totalProductsCart] //El useMemo se va a actualizar cuando el usuario cambie de valor
  );

  const buyData = useMemo(
    () => ({
      cantidadProductosAComprar: 0,
      totalCompra: 0,
      productosAComprar: [],
      metodoDespacho: "",
      metodoCompra: "",
      agregarDetalleCompra: (detalle) => agregarDetalle(detalle),
      traspasoMetodoDespacho : (metodo) => agregarMetodoDespacho(metodo),
      traspasoMetodoPago : (metodo) => agregarMetodoPago(metodo)
    }),
    [] //El useMemo se va a actualizar cuando el usuario cambie de valor
  );
  console.log(buyData)

  if (auth === undefined) return null; // Si auth es === a undefined es porque aún está en proceso de ver si está logeado o no.

  return (
    <AuthContext.Provider value={authData}>
        <BuyContext.Provider value={buyData}>
      <CartContext.Provider value={cartData}>
          <Component {...pageProps} />
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar
            newestOnTopcloseOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable
            pauseOnHover
          />
      </CartContext.Provider>
        </BuyContext.Provider>
    </AuthContext.Provider>
  );
}
