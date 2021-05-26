import { Button, Form } from "semantic-ui-react";
import PublishIcon from '@material-ui/icons/Publish';

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
      <div className="contenedor-boton">
        <Button>Aceptar</Button>
      </div>
      <div>
      <PublishIcon className="icono-contenedor"></PublishIcon>
      <p>Agregar Imagen</p>
      </div>
    </div>
  );
};

export default DinamicModal;
