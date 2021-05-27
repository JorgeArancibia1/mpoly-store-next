import { Button, Form } from "semantic-ui-react";
import PublishIcon from "@material-ui/icons/Publish";

const DinamicModal = ({ isEditable = false }) => {
	return (
		<div>
			<Form className="container-form">
				<Form.Input type="text" name="nombre" placeholder="Nombre" />
				<Form.Input type="text" name="marca" placeholder="Marca" />
				<Form.Input type="text" name="color" placeholder="Color" />
				<Form.Input type="text" name="talla" placeholder="Talla" />
				<Form.Input type="text" name="tipo" placeholder="Tipo" />
				<Form.Input type="text" name="categoria" placeholder="Categoria" />
				<Form.Input type="text" name="precio" placeholder="Precio" />
			</Form>
			<div className="contenedor-boton w-100 d-flex jfb">
				<div className="cfc">
					<PublishIcon fontSize="large" className="icono-contenedor" />
					<p>Agregar Imagen</p>
				</div>
        <div className="cfc d-flex">
				  <Button>Aceptar</Button>
        </div>
			</div>
		</div>
	);
};

export default DinamicModal;
