// import Button from "../Button";
import { Button } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Imagen from '../Imagen/Imagen';

const Card = ({
  imagen = "https://res.cloudinary.com/initial-cloud/image/upload/v1620870405/shirt_kbryht.png",
}) => {
  return (
    <div className="card">
      <Imagen fuente={imagen} alto="120" ancho="120" estilo="mb-2 br"/>
      <div className="footer-card">
        <Button size="small" variant="outlined" endIcon={<ShoppingCartIcon />}>
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
};

export default Card