import { useState, useEffect } from "react";
import Intermedio from "../../components/Intermedio";
import MaterialTabla from "../../components/MaterialTabla";
import Titulo from "../../components/Titulo/Titulo";
import AdminLayout from "../../layouts/AdminLayout";


const ProductosDisponibles = () => {
	const [showModalCrete, setShowModalCreate] = useState(false);
	const [showModalEdit, setShowModalEdit] = useState(false);
	const [showModalDelete, setShowModalDelete] = useState(false);

	const onShowModalCreate = () => setShowModalCreate(true);
	const onShowModalEdit = () => setShowModalEdit(true);
	const onShowModalDelete = () => setShowModalDelete(true);

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
				isEditable
				mostrar={showModalEdit}
				setShowModal={setShowModalEdit}
				abrirModal={onShowModalEdit}
				abrirDelete={onShowModalDelete}
				mostrarDelete={showModalDelete}
				setShowModalDelete={setShowModalDelete}
			/>
		</AdminLayout>
	);
};

export default ProductosDisponibles;
