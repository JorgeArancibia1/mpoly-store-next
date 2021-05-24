import Table from "../../components/Table";
import AdminLayout from "../../layouts/AdminLayout";
import Intermedio from "../../components/Intermedio";
import Titulo from "../../components/Titulo/Titulo";

const ProductosVendidos = () => {
	return (
		<AdminLayout>
			<Titulo titulo="Productos vendidos" clase="cfc hv-5" />

			<Intermedio />

			<Table />

		</AdminLayout>
	);
};

export default ProductosVendidos;
