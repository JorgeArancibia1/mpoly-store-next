import Intermedio from "../../components/Intermedio/Intermedio"
import MaterialTabla from "../../components/MaterialTabla/MaterialTabla"
import Titulo from "../../components/Titulo/Titulo"
import AdminLayout from "../../layouts/AdminLayout"

const GestionCompras = () => {
  return (
    <AdminLayout>
      <Titulo titulo="Gestión de compras" />
      <Intermedio />
      <MaterialTabla iconButton="check" iconButton2="close" isEditable />
    </AdminLayout>
  )
}

export default GestionCompras
