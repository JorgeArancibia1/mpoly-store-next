import AdminLayout from "../../layouts/AdminLayout";
import { Line } from "react-chartjs-2";
import {
	obtenerVendidosPorFecha,
	obtenerVendidos,
	obtenerVentasPorFecha,
} from "../../api/product";
import { useEffect } from "react";
import { useState } from "react";
import moment from "moment";
import { size, map } from "lodash";

moment.locale("es");

const Estadisticas = () => {
	const [products, setProducts] = useState([]);
	const [poleras, setPoleras] = useState([]);
	const [pantalones, setPantalones] = useState([]);
	const [parkas, setParkas] = useState([]);
	const [faldas, setFaldas] = useState([]);
	const [polerones, setPolerones] = useState([]);
	const [vestidos, setVestidos] = useState([]);

	useEffect(() => {
		(async () => {
			const ventas = await obtenerVentasPorFecha(50);
			const ventasFiltradas = ventas?.filter((producto) =>
				producto.estado.includes("Vendido")
			);

			console.log("Ventas=> ", ventasFiltradas);

			if (ventasFiltradas.length > 0) {
				const productsByCategory = {};
				ventasFiltradas.forEach((product) => {
					productsByCategory[product.categoria.nombreCategoria] =
						ventasFiltradas.filter(
							(element) =>
								element.categoria.nombreCategoria ===
								product.categoria.nombreCategoria
						);
				});
				setProducts(Object.entries(productsByCategory));

				console.log("PRODUCTS_IN => ", products); // (2) [Array(2), Array(2)]
				console.log("PRODUCTS_IN => ", products[0]); // (2) ["Poleras", Array(8)]
				const categoriasName = products.map((categoria) => categoria[0]); // ["Poleras", "Polerones"]
				const e = products.map((categoria) => categoria[1]); // [Array(8), Array(1)]
				let enero = [];
				console.log(products[0]);
				// products.forEach(element => {
				// 		categoria= element
				// });
				// enero = products[0][1].map((p)=>p.fechaVenta.toString().includes("2021-01"))
				// enero = products[0][1].map((p)=>moment(p.fechaVenta))

				const vendidos = await obtenerVendidos(1000);
				console.log(vendidos);

				function dividirCadena(cadenaADividir, separador) {
					if(cadenaADividir){
						var arrayDeCadenas = cadenaADividir.split(separador);
					
					let resultado="";
					for (var i = 0; i < 2; i++) {
					resultado = resultado + arrayDeCadenas[i] ;
					}
					return resultado
					}
				}

				const even = (fechaCompleta) => {
					console.log(fechaCompleta) // <==== undefined
					let fechaCorta = dividirCadena(fechaCompleta,"-")
					console.log(fechaCorta)
					// fechaCompleta.includes("2021-01");
					return fechaCorta
				};

				const categoriasFiltro = {
					poleras: vendidos.filter((f) => f.categoria.nombreCategoria === "Poleras"),
					pantalones: vendidos.filter((f) => f.categoria.nombreCategoria === "Pantalones"),
					Parkas:vendidos.filter((f) =>  f.categoria.nombreCategoria === "Parkas"),
					faldas: vendidos.filter((f) => f.categoria.nombreCategoria === "Faldas"),
					polerones: vendidos.filter((f) =>  f.categoria.nombreCategoria === "Polerones"),
					vestidos: vendidos.filter((f) =>  f.categoria.nombreCategoria === "Vestidos"),
				}
				console.log("CategoriasFiltro => ",categoriasFiltro)

				const fechas = [
					// poleras 0
					[
						size(categoriasFiltro.poleras?.filter((f) => even(f.fechaVenta)==="202101")),
			 			size(categoriasFiltro.poleras?.filter((f) => even(f.fechaVenta)==="202102")),
	 					size(categoriasFiltro.poleras?.filter((f) => even(f.fechaVenta)==="202103")),
	 					size(categoriasFiltro.poleras?.filter((f) => even(f.fechaVenta)==="202104")),
 						size(categoriasFiltro.poleras?.filter((f) => even(f.fechaVenta)==="202105")),
	 					size(categoriasFiltro.poleras?.filter((f) => even(f.fechaVenta)==="202106")),
	 					size(categoriasFiltro.poleras?.filter((f) => even(f.fechaVenta)==="202107")),
		 				size(categoriasFiltro.poleras?.filter((f) => even(f.fechaVenta)==="202108")),
						size(categoriasFiltro.poleras?.filter((f) => even(f.fechaVenta)==="202109")),
			 			size(categoriasFiltro.poleras?.filter((f) => even(f.fechaVenta)==="202110")),
					 	size(categoriasFiltro.poleras?.filter((f) => even(f.fechaVenta)==="202111")),
					  size(categoriasFiltro.poleras?.filter((f) => even(f.fechaVenta)==="202112")),
		      ],
					// pantalones 1
					[
						size(categoriasFiltro.pantalones?.filter((f) => even(f.fechaVenta)==="202101")),
			 			size(categoriasFiltro.pantalones?.filter((f) => even(f.fechaVenta)==="202102")),
	 					size(categoriasFiltro.pantalones?.filter((f) => even(f.fechaVenta)==="202103")),
	 					size(categoriasFiltro.pantalones?.filter((f) => even(f.fechaVenta)==="202104")),
 						size(categoriasFiltro.pantalones?.filter((f) => even(f.fechaVenta)==="202105")),
	 					size(categoriasFiltro.pantalones?.filter((f) => even(f.fechaVenta)==="202106")),
	 					size(categoriasFiltro.pantalones?.filter((f) => even(f.fechaVenta)==="202107")),
		 				size(categoriasFiltro.pantalones?.filter((f) => even(f.fechaVenta)==="202108")),
						size(categoriasFiltro.pantalones?.filter((f) => even(f.fechaVenta)==="202109")),
			 			size(categoriasFiltro.pantalones?.filter((f) => even(f.fechaVenta)==="202110")),
					 	size(categoriasFiltro.pantalones?.filter((f) => even(f.fechaVenta)==="202111")),
					  size(categoriasFiltro.pantalones?.filter((f) => even(f.fechaVenta)==="202112")),
		      ],
					// parkas 2
					[
						size(categoriasFiltro.parkas?.filter((f) => even(f.fechaVenta)==="202101")),
			 			size(categoriasFiltro.parkas?.filter((f) => even(f.fechaVenta)==="202102")),
	 					size(categoriasFiltro.parkas?.filter((f) => even(f.fechaVenta)==="202103")),
	 					size(categoriasFiltro.parkas?.filter((f) => even(f.fechaVenta)==="202104")),
 						size(categoriasFiltro.parkas?.filter((f) => even(f.fechaVenta)==="202105")),
	 					size(categoriasFiltro.parkas?.filter((f) => even(f.fechaVenta)==="202106")),
	 					size(categoriasFiltro.parkas?.filter((f) => even(f.fechaVenta)==="202107")),
		 				size(categoriasFiltro.parkas?.filter((f) => even(f.fechaVenta)==="202108")),
						size(categoriasFiltro.parkas?.filter((f) => even(f.fechaVenta)==="202109")),
			 			size(categoriasFiltro.parkas?.filter((f) => even(f.fechaVenta)==="202110")),
					 	size(categoriasFiltro.parkas?.filter((f) => even(f.fechaVenta)==="202111")),
					  size(categoriasFiltro.parkas?.filter((f) => even(f.fechaVenta)==="202112")),
		      ],
					// faldas 3
					[
						size(categoriasFiltro.faldas?.filter((f) => even(f.fechaVenta)==="202101")),
			 			size(categoriasFiltro.faldas?.filter((f) => even(f.fechaVenta)==="202102")),
	 					size(categoriasFiltro.faldas?.filter((f) => even(f.fechaVenta)==="202103")),
	 					size(categoriasFiltro.faldas?.filter((f) => even(f.fechaVenta)==="202104")),
 						size(categoriasFiltro.faldas?.filter((f) => even(f.fechaVenta)==="202105")),
	 					size(categoriasFiltro.faldas?.filter((f) => even(f.fechaVenta)==="202106")),
	 					size(categoriasFiltro.faldas?.filter((f) => even(f.fechaVenta)==="202107")),
		 				size(categoriasFiltro.faldas?.filter((f) => even(f.fechaVenta)==="202108")),
						size(categoriasFiltro.faldas?.filter((f) => even(f.fechaVenta)==="202109")),
			 			size(categoriasFiltro.faldas?.filter((f) => even(f.fechaVenta)==="202110")),
					 	size(categoriasFiltro.faldas?.filter((f) => even(f.fechaVenta)==="202111")),
					  size(categoriasFiltro.faldas?.filter((f) => even(f.fechaVenta)==="202112")),
		      ],
					// polerones 4
					[
						size(categoriasFiltro.polerones?.filter((f) => even(f.fechaVenta)==="202101")),
			 			size(categoriasFiltro.polerones?.filter((f) => even(f.fechaVenta)==="202102")),
	 					size(categoriasFiltro.polerones?.filter((f) => even(f.fechaVenta)==="202103")),
	 					size(categoriasFiltro.polerones?.filter((f) => even(f.fechaVenta)==="202104")),
 						size(categoriasFiltro.polerones?.filter((f) => even(f.fechaVenta)==="202105")),
	 					size(categoriasFiltro.polerones?.filter((f) => even(f.fechaVenta)==="202106")),
	 					size(categoriasFiltro.polerones?.filter((f) => even(f.fechaVenta)==="202107")),
		 				size(categoriasFiltro.polerones?.filter((f) => even(f.fechaVenta)==="202108")),
						size(categoriasFiltro.polerones?.filter((f) => even(f.fechaVenta)==="202109")),
			 			size(categoriasFiltro.polerones?.filter((f) => even(f.fechaVenta)==="202110")),
					 	size(categoriasFiltro.polerones?.filter((f) => even(f.fechaVenta)==="202111")),
					  size(categoriasFiltro.polerones?.filter((f) => even(f.fechaVenta)==="202112")),
		      ],
					// vestidos 5
					[
						size(categoriasFiltro.vestidos?.filter((f) => even(f.fechaVenta)==="202101")),
			 			size(categoriasFiltro.vestidos?.filter((f) => even(f.fechaVenta)==="202102")),
	 					size(categoriasFiltro.vestidos?.filter((f) => even(f.fechaVenta)==="202103")),
	 					size(categoriasFiltro.vestidos?.filter((f) => even(f.fechaVenta)==="202104")),
 						size(categoriasFiltro.vestidos?.filter((f) => even(f.fechaVenta)==="202105")),
	 					size(categoriasFiltro.vestidos?.filter((f) => even(f.fechaVenta)==="202106")),
	 					size(categoriasFiltro.vestidos?.filter((f) => even(f.fechaVenta)==="202107")),
		 				size(categoriasFiltro.vestidos?.filter((f) => even(f.fechaVenta)==="202108")),
						size(categoriasFiltro.vestidos?.filter((f) => even(f.fechaVenta)==="202109")),
			 			size(categoriasFiltro.vestidos?.filter((f) => even(f.fechaVenta)==="202110")),
					 	size(categoriasFiltro.vestidos?.filter((f) => even(f.fechaVenta)==="202111")),
					  size(categoriasFiltro.vestidos?.filter((f) => even(f.fechaVenta)==="202112")),
		      ],

				];
				setProducts(fechas)

				console.log(categoriasName);
				console.log(enero);
				console.log(fechas);
			} else {
				setProducts([]);
			}
		})();
	}, []);

	console.log("PRODUCTS", products);

	return (
		<AdminLayout>
			<Line
				data={{
					labels: [
						"Enero",
						"Febrero",
						"Marzo",
						"Abril",
						"Mayo",
						"Junio",
						"Julio",
						"Agosto",
						"Septiembre",
						"Octubre",
						"Noviembre",
						"Diciembre",
					],
					datasets: [
						{
							label: "Poleras",
							data: products[0],
							backgroundColor: [
								"rgba(255, 99, 132, 0.2)",
								"rgba(54, 162, 235, 0.2)",
								"rgba(255, 206, 86, 0.2)",
							],
							borderColor: [
								"rgba(255, 99, 132, 1)",
								"rgba(54, 162, 235, 1)",
								"rgba(255, 206, 86, 1)",
							],
							borderWidth: 1,
						},
						{
							label: "Pantalones",
							data: products[1],
							backgroundColor: [
								"rgba(255, 99, 132, 0.2)",
								"rgba(54, 162, 235, 0.2)",
								"rgba(255, 206, 86, 0.2)",
							],
							borderColor: [
								"rgba(255, 99, 132, 1)",
								"rgba(54, 162, 235, 1)",
								"rgba(255, 206, 86, 1)",
							],
						},
						{
							label: "Parkas",
							data: products[2],
							backgroundColor: [
								"rgba(255, 99, 132, 0.2)",
								"rgba(54, 162, 235, 0.2)",
								"rgba(255, 206, 86, 0.2)",
							],
							borderColor: [
								"rgba(255, 99, 132, 1)",
								"rgba(54, 162, 235, 1)",
								"rgba(255, 206, 86, 1)",
							],
						},
						{
							label: "Faldas",
							data: products[3],
							backgroundColor: [
								"rgba(255, 99, 132, 0.2)",
								"rgba(54, 162, 235, 0.2)",
								"rgba(255, 206, 86, 0.2)",
							],
							borderColor: [
								"rgba(255, 99, 132, 1)",
								"rgba(54, 162, 235, 1)",
								"rgba(255, 206, 86, 1)",
							],
						},
						{
							label: "Polerones",
							data: products[4],
							backgroundColor: [
								"rgb(136, 21, 206, 0.2)",
								"rgb(136, 21, 206, 0.2)", //fondoEtiqueta
								"rgb(136, 21, 206, 0.2)",
							],
							borderColor: [
								"rgb(136, 21, 206, 0.2)",
								"rgb(136, 21, 206, 0.2)", //bordeEtiquetaYLinea
								"rgb(136, 21, 206, 0.2)",
							],
						},
						{
							label: "Vestidos",
							data: products[5],
							backgroundColor: [
								"rgba(0,255,0,1)",
								"rgba(0,255,0,1)",
								"rgba(0,255,0,1)",
							],
							borderColor: [
								"rgba(155, 99, 132, 1)",
								"rgba(54, 162, 235, 1)",
								"rgba(0,255,0,1)",
							],
						},
					],
				}}
				width={300}
				height={200}
				options={{
					maintainAspectRatio: false,
					scales: {
						yAxes: [
							{
								ticks: {
									beginAtZero: true,
								},
							},
						],
					},
					legend: {
						labels: {
							fontSize: 25,
						},
					},
				}}
			/>
		</AdminLayout>
	);
};

export default Estadisticas;
