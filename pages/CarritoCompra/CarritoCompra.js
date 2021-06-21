import { forEach, size } from "lodash";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Loader } from "semantic-ui-react";
import { obtenerProductoPorId } from "../../api/product";
import CarritoItem from "../../components/CarritoItem/CarritoItem";
import Titulo from "../../components/Titulo";
import useBuy from "../../hooks/useBuy";
import useCart from "../../hooks/useCart";
import BasicLayout from "../../layouts/BasicLayout/BasicLayout";

const CarritoCompra = ({
  foto = "https://res.cloudinary.com/repro/image/upload/v1620964880/shirt_nqxqme.png",
}) => {
  // console.log(useCart());
  const { getProductsCart } = useCart();
  const {agregarDetalleCompra} = useBuy();
  const products = getProductsCart();
  const [productsData, setproductsData] = useState([]);
  const [reloadCart, setReloadCart] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);
	const router = useRouter();
  // console.log("products => ", products);
  // console.log("productsData => ", productsData);

  useEffect(() => {
    (async () => {
      const productsTemp = [];
      for await (const product of products) {
        // console.log("product => ", product);
        const data = await obtenerProductoPorId(product);
        productsTemp.push(data);
      }
      setproductsData(productsTemp);
    })();
		setReloadCart(false)
  }, [reloadCart]);

  useEffect(() => {
    ( () => {
      let precio = 0
			forEach(productsData, (product) => {
				precio += product[0].precio
			});
			setTotalPrice(precio)
    })();
  }, [reloadCart, productsData]);
	// console.log("total => ", totalPrice)

  const confirmar = ()=> {
    let totalCompra = totalPrice
    let cantidadProductosComprados = size(productsData)  
    let productosAComprar = []
    forEach(productsData, (product) => {
      productosAComprar.push(product[0])
    });
    let detalleCarrito = {
      totalCompra,
      cantidadProductosComprados,
      productosAComprar
    }
    agregarDetalleCompra(detalleCarrito)
    // console.log(totalCompra)
    // console.log(cantidadProductosAComprar)
    // console.log(productosAComprar)
    router.push("/TipoCompra")
  }

  return (
    <BasicLayout>
      <div className="container-page-carrito">
        {!products ? (
          "No hay productos en el carrito."
        ) : (
          <>
            <Titulo titulo="Carrito de compras" />
            {productsData.map((product) => {
              const { id, imagen, nombre, marca, talla, precio, tipo } =
                product[0];
              return (
                <CarritoItem
									setReloadCart={setReloadCart}
                  key={id}
									id={id}
                  foto={imagen}
                  nombre={nombre}
                  marca={marca}
                  talla={talla}
                  precio={precio}
                  tipo={tipo.nombreTipo}
                />
              );
            })}

            <div className="advertencia-y-boton container-flex-center">
							{totalPrice <= 0 && <Loader active>Cargando productos</Loader>}
							{
							totalPrice > 0 && 
							<div>
							<h3>Total a Pagar: {totalPrice}</h3>
              <Button color="blue" onClick={confirmar}>Confirmar Compra</Button>
							</div>
							}
            </div>
          </>
        )}
      </div>
    </BasicLayout>
  );
};

export default CarritoCompra;
