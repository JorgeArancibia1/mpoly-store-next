import { Button, Dropdown, Form } from "semantic-ui-react";
import PublishIcon from "@material-ui/icons/Publish";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useState } from "react";
import { crearProducto, editarProducto } from "../../../api/product";
import useAuth from "../../../hooks/useAuth";
import { useRef } from "react";

const DinamicModal = ({ isEditable = false, row }) => {
  const { logout } = useAuth();
  console.log("dinamicRow =>", row);
  const [loading, setLoading] = useState(false);
  const elementRef = useRef();

  const categoriaOpciones = [
    {
      key: "Poleras",
      text: "Poleras",
      value: "60c05a2868f1527d9e2a92b2",
    },
    {
      key: "Pantalones",
      text: "Pantalones",
      value: "60c05a3b68f1527d9e2a92b3",
    },
    {
      key: "Polerones",
      text: "Polerones",
      value: "60c05a5368f1527d9e2a92b4",
    },
    {
      key: "Parkas",
      text: "Parkas",
      value: "60c5a06e805325a33314b56c",
    },
    {
      key: "Vestidos",
      text: "Vestidos",
      value: "60c05a7b68f1527d9e2a92b6",
    },
    {
      key: "Faldas",
      text: "Faldas",
      value: "60c05a6768f1527d9e2a92b5",
    },
  ];

  const tipoOpciones = [
    {
      key: "Hombre",
      text: "Hombre",
      value: "60c0595368f1527d9e2a92ad",
    },
    {
      key: "Mujer",
      text: "Mujer",
      value: "60c0596f68f1527d9e2a92ae",
    },
    {
      key: "Niño",
      text: "Niño",
      value: "60c059cc68f1527d9e2a92af",
    },
    {
      key: "Unisex",
      text: "Unisex",
      value: "60c059e268f1527d9e2a92b0",
    },
  ];

  const [categoria, setCategoria] = useState("");
  const [tipo, setTipo] = useState("");

  const switchFunction = async (formData, isEditable = false) => {
    if (isEditable) {
      // Editar
      // formData.categoria = categoria
      // formData.tipo = tipo
      
      const response = await editarProducto(row.id, formData, logout, categoria, tipo);
      console.log("dinamicRespons => ", response);
      if (!response) {
        toast.error("Error al actualizar");
      } else if (response.statusCode === 403) {
        toast.error("No tiene los permisos para poder actualizar");
      } else {
        toast.success("Producto actualizado");
      }
    } else {
      // Crear
      console.log("formData2 => ", formData);
      const response = await crearProducto(formData, logout, categoria, tipo);
      console.log("dinamicRespons => ", response);
      if (!response) {
        toast.error("Error al crear");
      } else if (response.statusCode === 403) {
        toast.error("No tiene los permisos para poder crear");
      } else {
        toast.success("Producto creado");
      }
    }
  };

  

  const formik = useFormik({
    initialValues: isEditable
      ? {
          nombre: row.nombre,
          marca: row.marca,
          color: row.color,
          talla: row.talla,
          precio: row.precio,
        }
      : {
          nombre: "",
          marca: "",
          color: "",
          talla: "",
          precio: "",
        },
    validationSchema: Yup.object(validationSchema()),
    onSubmit: async (formData, e) => {
      console.log("categoria => ", categoria);
      // formData.categoria.nombreCategoria = categoria.nombreCategoria
      console.log("form data in submint => ", formData);
      setLoading(true);
      isEditable
        ? switchFunction(formData, isEditable)
        : switchFunction(formData);
      setLoading(false);
    },
  });

  const handleChangeCategory = (e, { value }) => {
    setCategoria(value);
    console.log("value =>", value);
    console.log("categoria =>", categoria);
  };

  const handleChangeTipo = (e, { value }) => {
    setTipo(value);
  };

  // console.log("categoriaout =>", categoria);
  // console.log("elementRef =>", elementRef);
  // console.log("elementRef =>", elementRef.files[0].name);

  const subirImagen = (e) => {
    console.log(e.target.files[0]);
    let file = e.target.files[0];
    let reader = new FileReader();
    reader.onload = function (e) {
      console.log(e.target.result);
    };
    reader.readAsText8(file);
  };

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
         {
					 row?
					 <>
					  <Dropdown
            onChange={handleChangeTipo}
            placeholder="Seleccione Un Tipo"
            fluid
            selection
            options={tipoOpciones}
            defaultValue={row.tipo.id}
          />
          <Dropdown
            onChange={handleChangeCategory}
            placeholder="Seleccione Una Categoria"
            fluid
            selection
            options={categoriaOpciones}
            defaultValue={row.categoria.id}
          />
					 </>
					 :
					 <>
					  <Dropdown
            onChange={handleChangeTipo}
            placeholder="Seleccione Un Tipo"
            fluid
            selection
            options={tipoOpciones}
            value={tipo}
          />
          <Dropdown
            onChange={handleChangeCategory}
            placeholder="Seleccione Una Categoria"
            fluid
            selection
            options={categoriaOpciones}
            value={categoria}
          />
					 </>
				 }
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
          <Form.Input
            type="file"
            // onChange={fileChange}
          />
        </Form.Group>
        <div className="contenedor-boton w-100 d-flex jfb">
          <input
            ref={elementRef}
            type="file"
            hidden
            // onChange={fileChange}
          />

          <div className="cfc">
            <Button
              content="Choose File"
              labelPosition="left"
              icon="file"
              onClick={() => elementRef.current.click()}
            />
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
