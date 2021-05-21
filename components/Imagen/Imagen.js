const Imagen = ({
  fuente="https://res.cloudinary.com/repro/image/upload/v1620964880/shirt_nqxqme.png",
  referencia="imagen",
  ancho="40",
  alto="40",
  estilo=""
}) => {
  return (
    <img width={ancho} height={alto} className={estilo} src={fuente} alt={referencia}/>
  )
}

export default Imagen;