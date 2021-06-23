import { size } from "lodash"
import { useEffect } from "react"
import { useState } from "react"
import { obtenerPendientes } from "../../api/product"
import Intermedio from "../../components/Intermedio/Intermedio"
import MaterialTabla from "../../components/MaterialTabla/MaterialTabla"
import Titulo from "../../components/Titulo/Titulo"
import AdminLayout from "../../layouts/AdminLayout"

const GestionCompras = () => { 
  const [products, setproducts] = useState(null);
  const [showModalConfirm, setShowModalConfirm] = useState(false);
	const [showModalDeleteOrder, setShowModalDeleteOrder] = useState(false);
	const [row, setRow] = useState({});
  const onCloseDeleteOrder = () => setShowModalDeleteOrder(false)
  const onCloseModalConfirm = () => setShowModalConfirm(false)

  useEffect(() => {
		(async () => {
			const response = await obtenerPendientes(5);
			if (size(response) > 0) {
				console.log ("responseProductosDisponibles => " ,response);
				setproducts(response)
			} else {
				setproducts([]);
			}
		})()
	}, [])

  const onShowModalConfirm = (event,rowData) => {
		setShowModalConfirm(true);
		setRow(rowData)
		console.log("event =>", event )
		console.log("rowData =>", rowData)
	}
	const onShowModalDeleteOrder = (e,rowData) => {
		setShowModalDeleteOrder(true)
		setRow(rowData)
	}
  return (
    <AdminLayout>
      <Titulo titulo="Gestión de compras" />
      <Intermedio />
      <MaterialTabla
      mostrarConfirm={showModalConfirm}
      setShowModalConfirm={setShowModalConfirm}
      abrirModalConfirm={onShowModalConfirm}
      abrirDeleteOrder={onShowModalDeleteOrder}
      mostrarDeleteOrder={showModalDeleteOrder}
      setShowModalDeleteOrder={setShowModalDeleteOrder}
      onCloseDeleteOrder={onCloseDeleteOrder}
      onCloseModalConfirm={onCloseModalConfirm}
    	row={row}	data={products} iconButton="check" iconButton2="close" isConfirm textoFlotante="Confirmar Compra"/>
    </AdminLayout>
  )
}

export default GestionCompras
