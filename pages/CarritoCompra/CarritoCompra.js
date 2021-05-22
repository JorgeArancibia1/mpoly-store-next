import Button from "../../components/Button";
import CarritoItem from "../../components/CarritoItem/CarritoItem";
import Titulo from "../../components/Titulo";
import BasicLayout from "../../layouts/BasicLayout/BasicLayout";

const CarritoCompra = ({
	foto = "https://res.cloudinary.com/repro/image/upload/v1620964880/shirt_nqxqme.png",
}) => {
	return (
		<BasicLayout>
			<div className="container-page-carrito">
				<Titulo titulo="Carrito de compras" />
				<CarritoItem />
				<CarritoItem />
				<CarritoItem />
				<div className="advertencia-y-boton container-flex-center">
					<h1 className="">
						{" "}
						Para confirmar pedido, primero debe iniciar sesión.{" "}
					</h1>
					<Button isButton>Confirmar Compra</Button>
				</div>
			</div>
		</BasicLayout>
	);
};

export default CarritoCompra;
