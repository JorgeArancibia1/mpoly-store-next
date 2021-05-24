import MaterialTable from "material-table";

const MaterialTabla = ({
	data = [{ producto: "Polera", marca: "Nike", talla: "L", precio: 5990 }],
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
	textoFlotante = "Texto flotante",
	isEditable = false,
	funcion = (event, rowData) =>
		alert("Has seleccionado => " + rowData.producto),
}) => {
	let objectActions = [
    {
		icon: iconButton,
		tooltip: textoFlotante,
		onClick: funcion,
	  }
];


isEditable && objectActions.push({
  icon: "edit",
  tooltip: "Editar",
  onClick: () => {},
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
		</div>
	);
};

export default MaterialTabla;
