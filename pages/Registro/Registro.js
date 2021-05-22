import Avatar from '../../components/Avatar';
import BasicModal from '../../components/Modal/BasicModal/BasicModal';
import Soporte from '../../components/Soporte/Soporte';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from "yup";
import { initialValues } from '../../utils/initialValues';
import { Form, Button } from 'semantic-ui-react';
import { validationSchema } from '../../utils/validationSchema';
import { registerAPI } from '../../api/user';


const Registro = () => {

  const [showModal, setShowModal] = useState(false)

  const onShowModal = () => setShowModal(true)

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema:  Yup.object(validationSchema()),
    onSubmit: (formData) => {
      console.log(formData);
      registerAPI(formData);
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
              <Form.Input type="text" name="name" placeholder="Nombre" onChange={formik.handleChange} error={formik.errors.name}/>
              <Form.Input type="text" name="lastname" placeholder="Apellido Paterno" onChange={formik.handleChange} error={formik.errors.lastname}/>
              <Form.Input type="text" name="lastname2" placeholder="Apellido Materno" onChange={formik.handleChange}/>
            </div>
            <div>
              <Form.Input type="text" name="RUT" placeholder="RUT" onChange={formik.handleChange}/>
              <Form.Input type="number" name="phoneNumber" placeholder="Número telefónico" onChange={formik.handleChange}/>
              <Form.Input type="text" name="region" placeholder="Región"  onChange={formik.handleChange}/>
            </div>
            <div>
              <Form.Input type="text" name="city" placeholder="Ciudad" onChange={formik.handleChange}/>
              <Form.Input type="text" name="comuna" placeholder="Comuna" onChange={formik.handleChange}/>
              <Form.Input type="text" name="street" placeholder="Pasaje" onChange={formik.handleChange}/>
            </div>
            <div>
              <Form.Input type="text" name="homeNumber" placeholder="Número domicilio" onChange={formik.handleChange}/>
              <Form.Input type="text" name="homeType" placeholder="Tipo de vivienda" onChange={formik.handleChange}/>
              <Form.Input type="text" name="block" placeholder="Torre" onChange={formik.handleChange}/>
            </div>
            <div>
              <Form.Input type="text" name="floor" placeholder="Piso" onChange={formik.handleChange}/>
              <Form.Input type="text" name="nDepto" placeholder="Número depto" onChange={formik.handleChange}/>
              <Form.Input type="text" name="email" placeholder="Correo electrónico" onChange={formik.handleChange}/>
            </div>
            <div>
              <Form.Input type="text" name="username" placeholder="Nombre de usuario" onChange={formik.handleChange}/>
              <Form.Input type="password" name="password" placeholder="Contraseña" onChange={formik.handleChange}/>
              <Form.Input type="password" placeholder="Confirmar Contraseña"/>
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