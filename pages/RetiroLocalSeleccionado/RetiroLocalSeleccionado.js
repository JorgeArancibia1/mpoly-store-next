import Header from "../../components/Header/Header";
import Titulo from "../../components/Titulo/Titulo";
import Button from "../../components/Button/Button"
import Soporte from "../../components/Soporte/Soporte";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

const RetiroLocalSeleccionado = () => {
  return (
    <div>
      <Header />
      <section className="retiro-en-local border cfc flex-d-c m-4">
        <div className="container-retiro-local">
          <ArrowBackIcon />
          <Titulo titulo="Has seleccionado retiro en local" />
          <div className="local p-4 fs-m">
            <p>Dirección: Los Guanteletes #461</p>
            <p>Comuna: Puente Alto</p>
            <p>Persona a Cargo: Javiera Fernández</p>
            <p>Lugar de referencia aproximado: Metro Protectora de la Infancia</p>
          </div>
        </div>
        <Button isButton>Aceptar y Pagar</Button>
      </section>
      <Soporte />
    </div>
  )
}

export default RetiroLocalSeleccionado
