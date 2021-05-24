import Table from "../../components/Table";
import AdminLayout from "../../layouts/AdminLayout";
import Intermedio from "../../components/Intermedio";
import Titulo from "../../components/Titulo/Titulo";
import SemanticTable from "../../components/SemanticTable";
import MaterialTabla from "../../components/MaterialTabla";

const ProductosVendidos = () => {
	return (
		<AdminLayout>
			<Titulo titulo="Productos vendidos" clase="cfc hv-5" />

			<Intermedio />

			{/* <Table /> */}
			{/* <SemanticTable /> */}
			<MaterialTabla />

		</AdminLayout>
	);
};

export default ProductosVendidos;
