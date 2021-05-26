import MaterialTable from "material-table";
import BasicModal from "../Modal/BasicModal";
import DinamicModal from "../Modal/DinamicModal/DinamicModal";

const MaterialTabla = ({
	data = [{ producto: "Polera", marca: "Nike", talla: "L", precio: 5990 },{ producto: "Polera", marca: "Nike", talla: "L", precio: 5990 }],
	columnas = [
		{
			title: "Producto",
			field: "producto",
		},
		{
			title: "Marca",
			field: "marca",
		},
		{
			title: "Talla",
			field: "talla",
		},
		{
			title: "Precio",
			field: "precio",
			type: "numeric",
		},
	],
	subtitle = "Subtitulo",
	iconButton = "delete",
	iconButton2 = "edit",
	textoFlotante = "Texto flotante",
	isEditable = false,
	funcion = (event, rowData) =>
		alert("Has seleccionado => " + rowData.producto),
	abrirModal,
	setShowModal,
	mostrar
}) => {
	let objectActions = [
    {
		icon: iconButton,
		tooltip: textoFlotante,
		onClick: funcion,
	  }
];


isEditable && objectActions.push({
  icon: iconButton2 ,
  tooltip: "Editar",
  onClick: abrirModal,
})

console.log(objectActions)
	return (
		<div>
			<MaterialTable
				columns={columnas}
				data={data}
				title={subtitle}
				actions={objectActions}
				options={{ actionsColumnIndex: -1 }}
				localization={{
					header: {
						actions: "Acciones",
					},
				}}
			/>
			<BasicModal show={mostrar} setShowModal={setShowModal} title="Crear cuenta" size="small">
				<DinamicModal isEditable />
      </BasicModal>
		</div>
	);
};

export default MaterialTabla;
