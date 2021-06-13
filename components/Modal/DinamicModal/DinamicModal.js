import { Button, Dropdown, Form } from "semantic-ui-react";
import PublishIcon from "@material-ui/icons/Publish";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useState } from "react";
import { crearProducto, editarProducto } from "../../../api/product";
import useAuth from "../../../hooks/useAuth";

const DinamicModal = ({ isEditable = false, row }) => {
	const { logout } = useAuth();
  console.log("dinamicRow =>", row);
	const [loading, setLoading] = useState(false);

  const categoriaOpciones = [
    {
      key: "Poleras",
      text: "Poleras",
      value: "Poleras",
    },
    {
      key: "Pantalones",
      text: "Pantalones",
      value: "Pantalones",
    },
    {
      key: "Polerones",
      text: "Polerones",
      value: "Polerones",
    },
  ];

  const tipoOpciones = [
    {
      key: "Hombre",
      text: "Hombre",
      value: "Hombre",
    },
    {
      key: "Mujer",
      text: "Mujer",
      value: "Mujer",
    },
    {
      key: "Niño",
      text: "Niño",
      value: "Niño",
    },
  ];

  const [categoria, setCategoria] = useState({
		nombreCategoria: "",
  });

	const switchFunction = async(formData, isEditable = false) => {
		if (isEditable) { // Editar
			// formData.categoria = categoria
			// formData.tipo = tipo
			console.log("formData => ", formData);
			const response = await editarProducto(row.id, formData, logout);
			console.log("dinamicRespons => ",response)
			if (!response) {
				toast.error("Error al actualizar");
			} else if (response.statusCode === 403) {
				toast.error("No tiene los permisos para poder actualizar")
			} else {
				toast.success("Producto actualizado")
			}
		} else { // Crear
			console.log("formData2 => ", formData);
			const response = await crearProducto( formData, logout);
			console.log("dinamicRespons => ",response)
			if (!response) {
				toast.error("Error al crear");
			} else if (response.statusCode === 403) {
				toast.error("No tiene los permisos para poder crear")
			} else {
				toast.success("Producto creado")
			}
		}
	}
	
		const { nombreCategoria } = categoria
		const [tipo, setTipo] = useState({
			nombreTipo: "",
		});
		const { nombreTipo } = tipo

  const formik = useFormik({
    initialValues: isEditable ? {
      nombre: row.nombre,
      marca: row.marca,
      color: row.color,
      talla: row.talla,
      precio: row.precio,
    } : {
      nombre: "",
      marca: "",
      color: "",
      talla: "",
      precio: "",
    } ,
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData, e) => {
			setLoading(true);
			isEditable ? switchFunction( formData,isEditable ): switchFunction( formData )
			setLoading(false)
    },
  });


  const handleChangeCategory = (e, { value }) => {
     setCategoria({ nombreCategoria: value })
    console.log("value =>", value)
    console.log("categoria =>", categoria)
  }

	const handleChangeTipo = (e, { value }) => {
		setTipo({ nombreTipo: value })
 }

	console.log("categoriaout =>", categoria)

  return (
    <div>
      <Form className="container-form" onSubmit={formik.handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            type="text"
            name="nombre"
            placeholder="Nombre"
            onChange={formik.handleChange}
            value={formik.values.nombre}
            error={formik.errors.name}
          />
          <Form.Input
            type="text"
            name="marca"
            placeholder="Marca"
            onChange={formik.handleChange}
            value={formik.values.marca}
            error={formik.errors.name}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Form.Input
            type="text"
            name="color"
            placeholder="Color"
            onChange={formik.handleChange}
            value={formik.values.color}
            error={formik.errors.name}
          />
          <Form.Input
            type="text"
            name="talla"
            placeholder="Talla"
            onChange={formik.handleChange}
            value={formik.values.talla}
            error={formik.errors.name}
          />
        </Form.Group>
        <Form.Group widths="equal">
          <Dropdown 
            onChange={handleChangeTipo}
            placeholder="Seleccione Un Tipo"
            fluid
            selection
            options={tipoOpciones}
						value={nombreTipo}
          />
          <Dropdown
            onChange={handleChangeCategory}
            placeholder="Seleccione Una Categoria"
            fluid
            selection
            options={categoriaOpciones}
            value={nombreCategoria}
          />
          {/* <Form.Input
            type="combobox"
            name="tipo"
            placeholder="Tipo"
            onChange={formik.handleChange}
            value={formik.values.tipo}
            error={formik.errors.name}
          />
          <Form.Input
            type="combobox"
            name="categoria"
            placeholder="Categoria"
            onChange={formik.handleChange}
            value={formik.values.categoria}
            error={formik.errors.name}
          /> */}
        </Form.Group>
        <Form.Group>
          <Form.Input
            type="text"
            name="precio"
            placeholder="Precio"
            onChange={formik.handleChange}
            value={formik.values.precio}
            error={formik.errors.name}
          />
        </Form.Group>
        <div className="contenedor-boton w-100 d-flex jfb">
          <div className="cfc">
            <PublishIcon fontSize="large" className="icono-contenedor" />
            <p>Agregar Imagen</p>
          </div>
          <div className="cfc d-flex">
            <Button type="submit" className="submit" loading={loading}>
              Aceptar
            </Button>
          </div>
        </div>
      </Form>
    </div>
  );
};

export default DinamicModal;

const initialValues = () => {
  return {
    nombre: row.nombre,
    marca: "",
    color: "",
    talla: "",
    tipo: "",
    categoria: "",
    precio: "",
  };
};

const validationSchema = () => {
  return {
    nombre: Yup.string().required(true),
    marca: Yup.string().required(true),
    color: Yup.string().required(true),
    talla: Yup.string().required(true),
    // tipo: "",
    // categoria: "",
    precio: Yup.string().required(true),
  };
};
