import Boxes from "../../components/Boxes";
import Titulo from "../../components/Titulo";
import BasicLayout from "../../layouts/BasicLayout/BasicLayout";

const PantallaMetodoPago = () => {
  return (
    <BasicLayout>
      <Titulo titulo="Seleccione el método de pago" />

      <Boxes isMethod />
    </BasicLayout>
  );
};

export default PantallaMetodoPago;
