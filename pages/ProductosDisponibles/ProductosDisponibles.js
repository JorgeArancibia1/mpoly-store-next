import { useState } from "react"
import Intermedio from "../../components/Intermedio"
import MaterialTabla from "../../components/MaterialTabla"
import BasicModal from "../../components/Modal/BasicModal/BasicModal"
import Titulo from "../../components/Titulo/Titulo"
import AdminLayout from "../../layouts/AdminLayout"

const ProductosDisponibles = () => {

  const [showModal, setShowModal] = useState(false);

  const onShowModal = () => setShowModal(true)

  return (
    <AdminLayout >
      <Titulo titulo="Productos vendidos" clase="cfc hv-5" />
      <Intermedio mostrar={showModal} setShowModal={setShowModal} abrirModal={onShowModal} />
      <MaterialTabla isEditable mostrar={showModal} setShowModal={setShowModal} abrirModal={onShowModal}/>
      
    </AdminLayout>

  )
}

export default ProductosDisponibles
