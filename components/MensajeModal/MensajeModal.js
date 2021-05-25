
export const MensajeModal = ({
  titulo="Modal Compra",
  mensaje="¿Seguro que desea rechazar?"
}) => {
  return (
    <div className="container-modal">
      <p className=".fs-m">{titulo}</p>
      <p className=".fs-s">{mensaje}</p>
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