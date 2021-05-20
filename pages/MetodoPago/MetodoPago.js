import BoxPago from "../../components/BoxPago";
import Header from "../../components/Header";

const PantallaMetodoPago = () => {
  return (
    <>
      <Header />

      <section>
        <h2 className="sub-titulo-retiro-local">Seleccionar Método de Pago</h2>
      </section>

      <section className="d-flex">
        <BoxPago titulo="Transferencia Electrónica" imagenCentral="https://res.cloudinary.com/repro/image/upload/v1621190800/logo_efectivo_ms6zjw.jpg" />
        <BoxPago titulo="Pagar por Stripe" imagenCentral="https://res.cloudinary.com/repro/image/upload/v1621217353/stripe-payment-logo_tpz97u.png" />
      </section>
    </>
  );
};

export default PantallaMetodoPago;
