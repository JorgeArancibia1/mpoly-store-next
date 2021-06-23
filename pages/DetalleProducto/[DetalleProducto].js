import { Button } from "@material-ui/core";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { obtenerProductoPorId } from "../../api/product";
import Detalle from "../../components/Detalle/Detalle";
import Imagen from "../../components/Imagen";
import useCart from "../../hooks/useCart";
import BasicLayout from "../../layouts/BasicLayout/BasicLayout";

const DetalleProducto = () => {
  const { query } = useRouter();
  const router = useRouter();
  const {addProductCart} = useCart()
  console.log(query.DetalleProducto);
  const [product, setProduct] = useState({});
  useEffect(() => {
    (async () => {
      const response = await obtenerProductoPorId(query.DetalleProducto);
      if (response) {
        setProduct(response);
      } else {
        setProduct({});
      }
    })();
  }, []);
  console.log(product);
  return (
    <BasicLayout>
      <div className="dos-sections">
        <section className="img-container-detalle-producto  container-flex-center">
          <Imagen fuente={product[0]?.imagen} ancho="50%" alto="50%" />
        </section>

        <section className="detalle-container-detalle-producto  container-flex-center">
          <Detalle
            nombre={product[0]?.nombre}
            talla={product[0]?.talla}
            precio={product[0]?.precio}
            marca={product[0]?.marca}
            tipo={product[0]?.tipo.nombreTipo}
            agregar={addProductCart}
            id={query.DetalleProducto}
          />
        </section>
      </div>

      <section className="boton-container-detalle-producto container-flex-center ">
        <Button onClick={() => router.push("/")}>Volver al Inicio</Button>
      </section>
    </BasicLayout>
  );
};

export default DetalleProducto;
