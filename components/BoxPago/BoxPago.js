import Button from "../Button";
import Imagen from "../Imagen";

const BoxPago = ({
  titulo="Transferencia Electrónica",
  imagenCentral="https://res.cloudinary.com/repro/image/upload/v1620964880/shirt_nqxqme.png"
}) => {
  return (
    <section className="container-box-pago container-flex-center">
      <h2 className="titulo-box">{titulo}</h2>
      <Imagen ancho="225" alto="225" fuente={imagenCentral} estilo="my-4" />
      <Button>
        <p>Seleccionar</p>
      </Button>
    </section>
  )
}

export default BoxPago;