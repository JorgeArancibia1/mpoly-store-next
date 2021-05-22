import BoxPago from "../BoxPago/BoxPago"

const Boxes = ({isMethod=false}) => {
  return (
    <section className="d-flex">
        {
          isMethod?
          (
            <>
            <BoxPago isMethod titulo="Transferencia Electrónica" anchoImagen="400"  imagenCentral="https://res.cloudinary.com/repro/image/upload/v1621650308/kisspng-electronic-funds-transfer-bank-money-transfer-wire-5ae55d5f645053.4295161015249810874109_ylxfog.png" />
            <BoxPago isMethod titulo="Pagar por Stripe" imagenCentral="https://res.cloudinary.com/repro/image/upload/v1621217353/stripe-payment-logo_tpz97u.png" />
            </>
          ) : (
            <>
            <BoxPago titulo="Retiro en local" imagenCentral="https://res.cloudinary.com/repro/image/upload/v1621650819/store-icon-4433328_640_upaslj.png" />
            <BoxPago titulo="Enviar por Starken" anchoImagen="400" imagenCentral="https://res.cloudinary.com/repro/image/upload/v1621650503/starken_tztxic.png" />
            </>
          )
        }
      </section>
  )
}

export default Boxes
