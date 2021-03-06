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
	subtitle = "",
	iconButton = "delete",
	iconButton2 = "edit",
	textoFlotante = "Borrar",
	isEditable = false,
	isConfirm = false,
	abrirDelete,
	abrirModal,
	abrirModalConfirm,
	setShowModal,
	mostrar,
	mostrarDelete,
	mostrarConfirm,
	mostrarDeleteOrder,
	setShowModalConfirm,
	setShowModalDelete,
	row,
	onCloseDelete,
	abrirDeleteOrder,
	onCloseDeleteOrder,
	setShowModalDeleteOrder,
	onCloseModalConfirm

}) => {
	console.log("rowtabla",row)
	// Este es el boton de eliminar de la tabla
	let objectActions = [
    {
		icon: iconButton, // Icono Borrar
		tooltip: textoFlotante, // Texto que aparece al pasar por encima
		onClick: isConfirm?abrirModalConfirm : abrirDelete, // Funcion que ejecuta
	  },
];

	// Este es el boton de editar de la tabla
isEditable && objectActions.push({
  icon: iconButton2 , // Icono Editar
  tooltip: "Editar", // Texto que aparece al pasar por encima
  onClick: abrirModal, // Funcion que ejecuta
})

isConfirm && objectActions.push({
  icon: iconButton2 , // Icono Editar
  tooltip: "Borrar", // Texto que aparece al pasar por encima
  onClick: abrirDeleteOrder, // Funcion que ejecuta
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
				<DinamicModal isEditable row={row} textoBoton="Editar producto" />
      </BasicModal>
			<BasicModal show={mostrarDelete} setShowModal={setShowModalDelete} title="Borrar producto" size="small">
				<MensajeModal row={row} onCloseDelete={onCloseDelete} mensaje="??Seguro que desea borrar este producto?" isEditable />
      </BasicModal>
			<BasicModal show={mostrarDeleteOrder} setShowModal={setShowModalDeleteOrder} title="Borrar producto" size="small">
				<MensajeModal row={row} onCloseDelete={onCloseDeleteOrder} mensaje="??Estas seguro que desea dejar este producto como disponible?, este producto aparecer?? en los productos de la vista del cliente." isDelete />
      </BasicModal>
			<BasicModal show={mostrarConfirm} setShowModal={setShowModalConfirm} title="Confirmar producto" size="small">
				<MensajeModal row={row} onCloseDelete={onCloseModalConfirm} mensaje="??Estas seguro que desea confirmar la venta de este producto?" isConfirm />
      </BasicModal>
		</div>
	);
};

export default MaterialTabla;
