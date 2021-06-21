import Header from "../../components/Header/Header";
import Titulo from "../../components/Titulo/Titulo";
import Soporte from "../../components/Soporte/Soporte";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { useRouter } from "next/router";
import { Button } from "semantic-ui-react";

const RetiroLocalSeleccionado = () => {
  const router = useRouter();
  const irAPagar = ()=> {
    router.push("/MetodoPago")
  }
  return (
    <div>
      <Header />
      <section className="retiro-en-local cfc flex-d-c m-4">
        <div className="container-retiro-local">
          <ArrowBackIcon />
          <Titulo titulo="Has seleccionado retiro en local" />
        </div>
        <div className="local p-4 fs-m">
          <p>Dirección: Los Guanteletes #461</p>
          <p>Comuna: Puente Alto</p>
          <p>Persona a Cargo: Javiera Fernández</p>
          <p>Lugar de referencia aproximado: Metro Protectora de la Infancia</p>
        </div>
        <Button color="blue" onClick={irAPagar}>Aceptar y Pagar</Button>
      </section>
      <Soporte />
    </div>
  )
}

export default RetiroLocalSeleccionado
