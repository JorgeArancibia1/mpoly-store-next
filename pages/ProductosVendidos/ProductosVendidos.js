import Table from "../../components/Table";
import AdminLayout from "../../layouts/AdminLayout";
import Intermedio from "../../components/Intermedio";
import Titulo from "../../components/Titulo/Titulo";
import SemanticTable from "../../components/SemanticTable";
import MaterialTabla from "../../components/MaterialTabla";
import { useEffect } from "react";
import { useState } from "react";
import { getLastProducts } from "../../api/product";
import { size, map } from 'lodash';


const ProductosVendidos = () => {
	const [showModalDelete, setShowModalDelete] = useState(false);
	const [products, setproducts] = useState(null);
	const [row, setRow] = useState({});

	const onShowModalDelete = (e,rowData) => {
		setShowModalDelete(true)
		setRow(rowData)
	}



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
	return (
		<AdminLayout>
			<Titulo titulo="Productos vendidos" clase="cfc hv-5" />

			<Intermedio />

			<MaterialTabla
				row={row}
			data={products}
			abrirDelete={onShowModalDelete}
			mostrarDelete={showModalDelete}
			setShowModalDelete={setShowModalDelete}
			/>

		</AdminLayout>
	);
};

export default ProductosVendidos;
