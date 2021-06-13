import { useState, useEffect } from "react";
import { getLastProducts } from "../../api/product";
import Intermedio from "../../components/Intermedio";
import MaterialTabla from "../../components/MaterialTabla";
import Titulo from "../../components/Titulo/Titulo";
import AdminLayout from "../../layouts/AdminLayout";
import { size, map } from 'lodash';


const ProductosDisponibles = () => {
	const [showModalCrete, setShowModalCreate] = useState(false);
	const [showModalEdit, setShowModalEdit] = useState(false);
	const [showModalDelete, setShowModalDelete] = useState(false);
	const [row, setRow] = useState({});

	const onShowModalCreate = () => setShowModalCreate(true);
	const onShowModalEdit = (event,rowData) => {
		setShowModalEdit(true);
		setRow(rowData)
		console.log("event =>", event )
		console.log("rowData =>", rowData)
	}
	const onShowModalDelete = (e,rowData) => {
		setShowModalDelete(true)
		setRow(rowData)
	}
	const onCloseDelete = () => setShowModalDelete(false)

	const [products, setproducts] = useState(null);
	console.log("productsData => ",products);

	useEffect(() => {
		(async () => {
			const response = await getLastProducts(5);
			if (size(response) > 0) {
				console.log ("responseProductosDisponibles => " ,response);
				setproducts(response)
			} else {
				setproducts([]);
			}
		})()
	}, [])
	console.log("productsData2 => ",products);
	console.log("rowProductosDisponibles => ",row);
	

	return (
		<AdminLayout>
			<Titulo titulo="Productos vendidos" clase="cfc hv-5" />
			<Intermedio
				isCreate
				mostrar={showModalCrete}
				setShowModal={setShowModalCreate}
				abrirModal={onShowModalCreate}
			/>
			<MaterialTabla
				row={row}
				data={products}
				isEditable
				mostrar={showModalEdit}
				setShowModal={setShowModalEdit}
				abrirModal={onShowModalEdit}
				abrirDelete={onShowModalDelete}
				mostrarDelete={showModalDelete}
				setShowModalDelete={setShowModalDelete}
				onCloseDelete={onCloseDelete}
			/>
		</AdminLayout>
	);
};

export default ProductosDisponibles;
