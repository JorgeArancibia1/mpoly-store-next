import Card from "../Card";
import { size, map } from 'lodash'
import { Loader } from "semantic-ui-react";

const iconcitoLink =
	"https://res.cloudinary.com/initial-cloud/image/upload/v1620870788/carrito_zs5b0x.png";

const ContainerCards = ({ title, products }) => {
	console.log('PRODUCTS CONTAINER CARDS => ', products);
	return (
		<>
			<h2 className="title-section-products">{title}</h2>
			<div className="container-cards">
				{!products && <Loader active>Cargando productos</Loader>}
				{products && size(products) === 0 && (
					<div>
						<h3>No hay productos para mostrar.</h3>
					</div>
				)}
				{size(products) > 0 && products.map((producto) => {
					return (
						<Card
							key={producto.id}
							imagen={producto.imagen || producto.img.url}
							idProduct={producto.id}
							nombre={producto.nombre}
						/>
					);
				})}
			</div>
		</>
	);
};

export default ContainerCards
