import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import Imagen from '../Imagen';
import { IconButton } from "@material-ui/core";
import useCart from '../../hooks/useCart';

const CarritoItem = (
  {
    foto = "https://res.cloudinary.com/initial-cloud/image/upload/v1620870405/shirt_kbryht.png",
    nombre = "Polera",
    marca = "Nike",
    talla = "L",
    tipo = "Unisex",
    precio = "5.990",
    id = 0,
    setReloadCart = null
  }
) => {
  const {removeProductCart} = useCart();
  return (
    <div className="container-flex-center flex-d-c">
      <div className="container-detalle-carrito container-flex-center c-70w px-2 br">
        <Imagen alto="80%" ancho="20%" fuente={foto} estilo="br" />
        <section className=" fs-l container-flex-center-end">
          <ul className="list">

            <li>{nombre}</li>
            <li>{marca}</li>
            <li>{talla}</li>
            <li>{tipo}</li>
            <li>{precio}</li>
          </ul>
        </section>
        <IconButton onClick={()=> {
          removeProductCart(id)
          setReloadCart(true)
          }} color="secondary" aria-label="add an alarm">
          <HighlightOffIcon style={{ fontSize: 40 }} />
        </IconButton>
      </div>
    </div>
  )
}

export default CarritoItem;
