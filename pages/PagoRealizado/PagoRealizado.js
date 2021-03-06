import Soporte from "../../components/Soporte/Soporte";
import Header from "../../components/Header/Header";
import Titulo from "../../components/Titulo/Titulo";
import { Button } from "semantic-ui-react";
import { useRouter } from "next/router";

const PagoRealizado = () => {
  const router = useRouter();
  return (

    <div className="container-pago-realizado">
      <Header />
      <section className="pago-realizado center container">
        <Titulo titulo="Para finalizar tu compra realiza una transferencia" />
        <h3>Banco Estado</h3>
        <h3>Cuenta RUT</h3>
        <h3>RUT: 14.354.678-3</h3>
        <h3>N° Cuenta</h3>
        <h3>Correo electrónico: compras@mpolystore.cl</h3>
        <h3 className="mensaje-pago container-flex-center" > 
        Una vez hayas realizado la transferencia, tu compra quedará “Pendiente”, se debe enviar comprobante de pago mediante 
        vía whatsapp (+56958029934).
        Debe enviarlo en un límite de 45 minutos, una vez que se confirme el pago, se le enviará un mensaje con las indicaciones 
        correspondientes, de lo contrario, los productos volverán al stock de la tienda y se cancelará la compra. </h3>
        <h3>¡Muchas gracias por visitar nuestra tienda! </h3>
        <div className="boton-volver-a-inicio container-flex-center cfc">
          <Button onClick={()=> router.push("/")} color="blue">Volver al inicio</Button>
        </div>
      </section>
      <Soporte />
    </div >
  )
}

export default PagoRealizado