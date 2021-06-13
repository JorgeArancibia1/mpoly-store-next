import MaterialTable from "material-table";
import BasicModal from "../Modal/BasicModal";
import DinamicModal from "../Modal/DinamicModal/DinamicModal";
import MensajeModal from "../Modal/MensajeModal/MensajeModal";

const MaterialTabla = ({
	data = [{ nombre: "Polera", marca: "Nike", talla: "L", precio: 5990 },{ nombre: "Polera", marca: "Nike", talla: "L", precio: 5990 }],
	columnas = [
		{
			title: "Nombre",
			field: "nombre",
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
	setShowModalDelete,
	row,
	onCloseDelete
}) => {
	console.log("rowtabla",row)
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

	return (
		<div>
			{
				data===null?"Cargando": 
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
			}
			<BasicModal show={mostrar} setShowModal={setShowModal} title="Editar producto" size="small">
				<DinamicModal isEditable row={row} />
      </BasicModal>
			<BasicModal show={mostrarDelete} setShowModal={setShowModalDelete} title="Borrar producto" size="small">
				<MensajeModal row={row} onCloseDelete={onCloseDelete} mensaje="¿Seguro que desea borrar este producto?" isEditable />
      </BasicModal>
		</div>
	);
};

export default MaterialTabla;
