import Boxes from "../../components/Boxes"
import Titulo from "../../components/Titulo"
import BasicLayout from "../../layouts/BasicLayout/BasicLayout"

const TipoCompra = () => {
  return (
    <BasicLayout>
      <Titulo titulo="Seleccione el tipo de compra" />
      <Boxes />
    </BasicLayout>
  )
}

export default TipoCompra