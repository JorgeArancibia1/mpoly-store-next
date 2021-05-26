// import Titulo from "../../components/Titulo/Titulo";

const ContadorStock = (
  {
    titulo = "Polerones",
    cantidad = "22"
  }
) => {
  return (
    <div className="container-stock container-flex-center flex-d-c">
      <div className="cuadro-stock">
        <h2 className="titulo-vestimenta fs-l">{titulo}</h2>
        <h2 className="cantidad-vestimenta fs-xxl">{cantidad}</h2>
      </div>
    </div>
  )
}

export default ContadorStock;
