import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Imagen from '../Imagen';
import { IconButton } from "@material-ui/core";

const CarritoItem = (
  {
    foto = "https://res.cloudinary.com/initial-cloud/image/upload/v1620870405/shirt_kbryht.png",
    marca = "Polera Nike Verde",
    talla = "L",
    tipo = "Unisex",
    precio = "5.990"
  }
) => {
  return (
    <div className="container-flex-center flex-d-c">
      <div className="container-detalle-carrito container-flex-center c-70w px-2 br">
        <Imagen alto="80%" ancho="20%" fuente={foto} estilo="br" />
        <section className=" fs-l container-flex-center-end">
          <ul className="list">
            <li>{marca}</li>
            <li>{talla}</li>
            <li>{tipo}</li>
            <li>{precio}</li>
          </ul>
        </section>
        <IconButton color="secondary" aria-label="add an alarm">
          <HighlightOffIcon style={{ fontSize: 40 }} />
        </IconButton>
      </div>
    </div>
  )
}

export default CarritoItem;
