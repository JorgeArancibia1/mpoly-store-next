import MaterialTable from "material-table";
import BasicModal from "../Modal/BasicModal";
import DinamicModal from "../Modal/DinamicModal/DinamicModal";
import MensajeModal from "../Modal/MensajeModal/MensajeModal";

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
	textoFlotante = "Borrar",
	isEditable = false,
	funcion = (event, rowData) =>
		alert("Has seleccionado => " + rowData.producto),
	abrirDelete,
	abrirModal,
	setShowModal,
	mostrar,
	mostrarDelete,
	setShowModalDelete
}) => {
	// Este es el boton de eliminar de la tabla
	let objectActions = [
    {
		icon: iconButton, // Icono Borrar
		tooltip: textoFlotante, // Texto que aparece al pasar por encima
		onClick: abrirDelete, // Funcion que ejecuta
	  },
];

	// Este es el boton de editar de la tabla
isEditable && objectActions.push({
  icon: iconButton2 , // Icono Editar
  tooltip: "Editar", // Texto que aparece al pasar por encima
  onClick: abrirModal, // Funcion que ejecuta
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
			<BasicModal show={mostrar} setShowModal={setShowModal} title="Editar producto" size="small">
				<DinamicModal isEditable />
      </BasicModal>
			<BasicModal show={mostrarDelete} setShowModal={setShowModalDelete} title="Borrar producto" size="small">
				<MensajeModal mensaje="¿Seguro que desea borrar este producto?" isEditable />
      </BasicModal>
		</div>
	);
};

export default MaterialTabla;
