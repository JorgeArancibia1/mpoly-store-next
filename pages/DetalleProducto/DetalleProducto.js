import { Button } from "@material-ui/core";
import Detalle from "../../components/Detalle/Detalle";
import Header from "../../components/Header/Header";
import Imagen from "../../components/Imagen";
import BasicLayout from "../../layouts/BasicLayout/BasicLayout";


const DetalleProducto = () => {
  return (
      <BasicLayout>

      <div className="dos-sections">
        <section className="img-container-detalle-producto  container-flex-center">
          <Imagen ancho="40%" alto="40%" />
        </section>

        <section className="detalle-container-detalle-producto  container-flex-center">
          <Detalle />
        </section>
      </div>

      <section className="boton-container-detalle-producto container-flex-center ">
        <Button>
          Volver al Inicio
        </Button>
      </section>
      </BasicLayout>
  );
};

export default DetalleProducto;