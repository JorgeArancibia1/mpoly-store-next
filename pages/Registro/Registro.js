import { useState } from 'react';
import Avatar from '../../components/Avatar';
import BasicModal from '../../components/Modal/BasicModal/BasicModal';
import Soporte from '../../components/Soporte/Soporte';

const Registro = () => {

  const [showModal, setShowModal] = useState(false)

  const onShowModal = () => setShowModal(true)

  return (
    <>
      <section className="section1">
        <Avatar width="150" height="150" />
      </section>

      <section className="section2">
        <form className="container-form" action="">
          <div className="container-inputs">
            <div>
              <input className="campos-botones" type="text" placeholder="Nombre" />
              <input className="campos-botones" type="text" placeholder="Apellido Paterno" />
              <input className="campos-botones" type="text" placeholder="Apellido Materno" />
            </div>
            <div>
              <input className="campos-botones" type="text" placeholder="RUT" maxLength="9"/>
              <input className="campos-botones" type="number" placeholder="Número telefónico" />
              <input className="campos-botones" type="text" placeholder="Región" />
            </div>
            <div>
              <input className="campos-botones" type="text" placeholder="Ciudad" />
              <input className="campos-botones" type="text" placeholder="Comuna" />
              <input className="campos-botones" type="text" placeholder="Pasaje" />
            </div>
            <div>
              <input className="campos-botones" type="text" placeholder="Número domicilio" />
              <input className="campos-botones" type="text" placeholder="Tipo de vivienda" />
              <input className="campos-botones" type="text" placeholder="Torre" />
            </div>
            <div>
              <input className="campos-botones" type="text" placeholder="Piso" />
              <input className="campos-botones" type="text" placeholder="Número depto" />
              <input className="campos-botones" type="text" placeholder="Correo electrónico" />
            </div>
            <div>
              <input className="campos-botones" type="password" placeholder="Contraseña" />
              <input className="campos-botones" type="password" placeholder="Confirmar Contraseña" />
            </div>
          </div>

          <div>
            <input className="crear-cuenta pointer" type="button" value="Crear Cuenta" onClick={onShowModal} />
          </div>
        </form>
      </section>
      <BasicModal show={showModal} setShowModal={setShowModal} title="Crear cuenta" size="small">
        <h2>Su cuenta ha sido creada exitosamente</h2>
      </BasicModal>

      <Soporte />
    </>
  )
}

export default Registro