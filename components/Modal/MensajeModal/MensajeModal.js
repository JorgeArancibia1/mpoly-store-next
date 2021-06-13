import { Button } from 'semantic-ui-react';
import { borrarProducto } from '../../../api/product';


export const MensajeModal = ({
  mensaje="¿Seguro que desea borrar?",
  onCloseDelete,
  row
}) => {

  const si = () => {
    borrarProducto(row.id)
    console.log(row.id)
  }
  return (
    <div className="container-modal">
      <p >{mensaje}</p>
      <Button variant="contained" color="blue" onClick={si}>
        Si
      </Button>
      <Button variant="contained" color="blue" onClick={onCloseDelete}>
        No
      </Button>
    </div>
  )
}

export default MensajeModal;