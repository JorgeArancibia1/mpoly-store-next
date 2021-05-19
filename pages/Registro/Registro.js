import Avatar from '../../components/Avatar';
import BasicModal from '../../components/Modal/BasicModal/BasicModal';
import Soporte from '../../components/Soporte/Soporte';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { initialValues } from '../../utils/initialValues';
import { Form, Button } from 'semantic-ui-react';
import { validationSchema } from '../../utils/validationSchema';

const Registro = () => {

  const [showModal, setShowModal] = useState(false)

  const onShowModal = () => setShowModal(true)

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema:  Yup.object(validationSchema()),
    onSubmit: (formData) => {
      console.log(formData);
    }
  })

  return (
    <>
      <section className="section1">
        <Avatar width="150" height="150" />
      </section>

      <section className="section2">
        <Form className="container-form" onSubmit={formik.handleSubmit}>
          <div className="container-inputs">
            <div>
              <Form.Input type="text" name="name" placeholder="Nombre" onChange={formik.handleChange} error={formik.errors.name} />
              <Form.Input type="text" name="lastname" placeholder="Apellido Paterno" onChange={formik.handleChange} error={formik.errors.lastname} />
              <Form.Input type="text" placeholder="Apellido Materno" />
            </div>
            <div>
              <Form.Input type="text" placeholder="RUT"/>
              <Form.Input type="number" placeholder="Número telefónico" />
              <Form.Input type="text" placeholder="Región" />
            </div>
            <div>
              <Form.Input type="text" placeholder="Ciudad" />
              <Form.Input type="text" placeholder="Comuna" />
              <Form.Input type="text" placeholder="Pasaje" />
            </div>
            <div>
              <Form.Input type="text" placeholder="Número domicilio" />
              <Form.Input type="text" placeholder="Tipo de vivienda" />
              <Form.Input type="text" placeholder="Torre" />
            </div>
            <div>
              <Form.Input type="text" placeholder="Piso" />
              <Form.Input type="text" placeholder="Número depto" />
              <Form.Input type="text" placeholder="Correo electrónico" />
            </div>
            <div>
              <Form.Input type="password" placeholder="Contraseña" />
              <Form.Input type="password" placeholder="Confirmar Contraseña" />
            </div>
          </div>

          <div>
            <Button className="crear-cuenta pointer" type="submit" >Crear cuenta</Button>
          </div>
        </Form>
      </section>
      <BasicModal show={showModal} setShowModal={setShowModal} title="Crear cuenta" size="small">
        <h2>Su cuenta ha sido creada exitosamente</h2>
      </BasicModal>

      <Soporte />
    </>
  )
}

export default Registro

// onClick={onShowModal}  => Esto es para llamar al modal