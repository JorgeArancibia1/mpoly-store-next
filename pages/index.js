import { useState, useEffect } from "react";
import ContainerCards from "../components/ContainerCards";
import Navbar from "../components/Navbar";
import BasicLayout from "../layouts/BasicLayout";
import { size, map } from 'lodash';
import { getLastProducts } from "../api/product";

const productos = [
	{
		id: 1,
		img: "https://res.cloudinary.com/initial-cloud/image/upload/v1620870405/shirt_kbryht.png",
		nombre: "polera",
		talla: "L",
		estado: "disponible",
		color: "gris",
		precio: "9990",
		tipo: "Hombre",
		categoria: "hombres",
	},
	{
		id: 2,
		img: "https://res.cloudinary.com/initial-cloud/image/upload/v1620870405/shirt_kbryht.png",
		nombre: "pantalon",
		talla: "S",
		estado: "disponible",
		color: "negro",
		precio: "5990",
		tipo: "Hombre",
		categoria: "hombres",
	},
	{
		id: 3,
		img: "https://res.cloudinary.com/initial-cloud/image/upload/v1620870405/shirt_kbryht.png",
		nombre: "polera",
		talla: "L",
		estado: "disponible",
		color: "gris",
		precio: "9990",
		tipo: "Hombre",
		categoria: "hombres",
	},
	{
		id: 4,
		img: "https://res.cloudinary.com/initial-cloud/image/upload/v1620870405/shirt_kbryht.png",
		nombre: "polera",
		talla: "L",
		estado: "disponible",
		color: "gris",
		precio: "9990",
		tipo: "Hombre",
		categoria: "hombres",
	},
];

const PantallaInicioCliente = () => {

	const [products, setproducts] = useState(null);
	// console.log(products);

	useEffect(() => {
		(async () => {
			const response = await getLastProducts(100);
			if (size(response) > 0) {
				setproducts(response)
			} else {
				setproducts([]);
			}
		})()
	}, [])

	const poleras = products?.filter(producto => producto?.categoria?.nombreCategoria.includes('Poleras') && producto.estado.includes('Disponible'))
	const polerones = products?.filter(producto => producto?.categoria?.nombreCategoria.includes('Polerones') && producto.estado.includes('Disponible'))
	const vestidos = products?.filter(producto => producto?.categoria?.nombreCategoria.includes('Vestidos') && producto.estado.includes('Disponible'))


	return (
		<BasicLayout>
			<Navbar />
			<div className="container-section-products flex-d-c mt-3 ml-4">
				<ContainerCards title="Poleras" products={poleras} />
				<ContainerCards title="Polerones" products={polerones}/>
				<ContainerCards title="Vestidos" products={vestidos}/>
			</div>
		</BasicLayout>
	);
};

export default PantallaInicioCliente;