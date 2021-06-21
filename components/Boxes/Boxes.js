import { useRouter } from "next/router";
import useBuy from "../../hooks/useBuy";
import BoxPago from "../BoxPago/BoxPago"

const Boxes = ({isMethod=false}) => {
  const {traspasoMetodoDespacho} = useBuy();
  const router = useRouter();
  
  const irALocal = ()=> {
    traspasoMetodoDespacho("Local")
    router.push("/RetiroLocalSeleccionado")
  }
  const funcionStarken = ()=> {
    traspasoMetodoDespacho("Starken")
    router.push("/MetodoPago")
    // aqui se debe agregar el metodo de pago de starken a la compra 
  }
  const irAinformacionDeTransferencia = ()=> {
    router.push("/PagoRealizado")
    // agregar metodo de pago por transferencia
  }
  const irAPagar = ()=> {
    router.push("/Stripe")
    // agregar metodo de pago por stripe 
  }
  return (
    <section className="d-flex">
        {
          isMethod?
          (
            <>
            <BoxPago funcion={irAinformacionDeTransferencia} isMethod titulo="Transferencia Electrónica" anchoImagen="400"  imagenCentral="https://res.cloudinary.com/repro/image/upload/v1621650308/kisspng-electronic-funds-transfer-bank-money-transfer-wire-5ae55d5f645053.4295161015249810874109_ylxfog.png" />
            <BoxPago funcion={irAPagar} isMethod titulo="Pagar por Stripe" imagenCentral="https://res.cloudinary.com/repro/image/upload/v1621217353/stripe-payment-logo_tpz97u.png" />
            </>
          ) : (
            <>
            <BoxPago funcion={irALocal} titulo="Retiro en local" imagenCentral="https://res.cloudinary.com/repro/image/upload/v1621650819/store-icon-4433328_640_upaslj.png" />
            <BoxPago funcion={funcionStarken} titulo="Enviar por Starken" anchoImagen="400" imagenCentral="https://res.cloudinary.com/repro/image/upload/v1621650503/starken_tztxic.png" />
            </>
          )
        }
      </section>
  )
}

export default Boxes
