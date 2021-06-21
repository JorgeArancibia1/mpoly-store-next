import { Button } from "@material-ui/core";
import Imagen from "../Imagen";

const BoxPago = ({
  titulo="Transferencia Electrónica",
  imagenCentral="https://res.cloudinary.com/repro/image/upload/v1620964880/shirt_nqxqme.png",
  anchoImagen="255",
  funcion= ()=> {}
}) => {
  return (
    <section className="container-box-pago container-flex-center">
      <h2 className="titulo-box">{titulo}</h2>
        <Imagen ancho={anchoImagen} alto="225" fuente={imagenCentral} estilo="my-4" />
      <Button onClick={funcion} variant="contained" color="primary">
        <p>Seleccionar</p>
      </Button>
    </section>
  )
}

export default BoxPago;