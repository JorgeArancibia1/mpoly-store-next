
export const MensajeModal = ({
  titulo="Modal Compra",
  mensaje="¿Seguro que desea rechazar?"
}) => {
  return (
    <div className="container-modal">
      <p >{titulo}</p>
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