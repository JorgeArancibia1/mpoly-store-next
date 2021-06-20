// import Button from "../Button";
import { Button } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import useCart from '../../hooks/useCart';
import Imagen from '../Imagen/Imagen';

const Card = ({
  imagen = "https://res.cloudinary.com/initial-cloud/image/upload/v1620870405/shirt_kbryht.png",
  idProduct = ""
}) => {
  const {addProductCart} = useCart()
  return (
    <div className="card">
      <Imagen fuente={imagen} alto="120" ancho="120" estilo="mb-2 br"/>
      <div className="footer-card">
        <Button onClick={() => addProductCart(idProduct)} size="small" variant="outlined" endIcon={<ShoppingCartIcon />}>
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
};

export default Card