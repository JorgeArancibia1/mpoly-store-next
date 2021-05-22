import Avatar from "../../components/Avatar";
import Button from "../../components/Button";
import Soporte from "../../components/Soporte/Soporte";

const Login = () => {
  return (
    <div>
      <section className="login container-flex-center flex-d-c">
        <Avatar width="150" height="150" />
        <input className="campos-botones" type="text" placeholder="Correo" />
        <input className="campos-botones" type="password" placeholder="Contraseña " />
        <Button isButton >
          Aceptar
          </Button>
      </section>
      <section>
        <Soporte />
      </section>
    </div>

  )
}

export default Login;