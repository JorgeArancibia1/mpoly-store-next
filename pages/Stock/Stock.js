import AdminLayout from "../../layouts/AdminLayout"
import Button from "../../components/Button/Button"
import ContadorStock from "../../components/ContadorStock/ContadorStock"

const Stock = () => {

  return (
    <AdminLayout>
      <div className="container-tipo-stock fsa m-1 cfc">
        <p className="fs-m">Seleccionar Tipo:</p>
        <Button isButton>Mujer</Button>
        <Button isButton>Hombre</Button>
        <Button isButton>Niños</Button>
        <Button isButton>Unisex</Button>
        <Button isButton>Todos</Button>
      </div>
      <section className="container-stock">
        <div className="Tipo-Linea-1 center fsb">
          <ContadorStock titulo="Poleras" cantidad="26" />
          <ContadorStock titulo="Polerones" cantidad="40" />
          <ContadorStock titulo="Pantalones" cantidad="16" />
        </div>
        <div className="Tipo-Linea-2 center fsb">
          <ContadorStock titulo="Chaquetas" cantidad="31" />
          <ContadorStock titulo="Vestidos" cantidad="0" />
          <ContadorStock titulo="Accesorios" cantidad="7" />
        </div>
      </section>
    </AdminLayout>
  )
}

export default Stock
