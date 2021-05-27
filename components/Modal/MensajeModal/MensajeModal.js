import { Button } from 'semantic-ui-react';

export const MensajeModal = ({
  mensaje="¿Seguro que desea borrar?"
}) => {
  return (
    <div className="container-modal">
      <p >{mensaje}</p>
      <Button variant="contained" color="primary">
        Si
      </Button>
      <Button variant="contained" color="primary">
        No
      </Button>
    </div>
  )
}

export default MensajeModal;