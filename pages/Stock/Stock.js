import AdminLayout from "../../layouts/AdminLayout";
import ContadorStock from "../../components/ContadorStock/ContadorStock";
import { Button, Loader } from "semantic-ui-react";
import { useState } from "react";
import { useEffect } from "react";
import { size, map } from "lodash";
import { getLastProducts } from "../../api/product";

const Stock = () => {
	const [products, setproducts] = useState(null);
	const [selected, setSelected] = useState("");
	const [filtradoTipo, setFiltradoTipo] = useState([]);
	const [count, setCount] = useState(0);
	// console.log(products);

	useEffect(() => {
		(async () => {
			const response = await getLastProducts(15);
			if (size(response) > 0) {
				setproducts(response);
			} else {
				setproducts([]);
			}
		})();
	}, []);

	useEffect(() => {
		let filtro = []
		let categoriasCount;
			if (selected === "Mujer") {
				filtro = products?.filter((producto) => producto.tipo.nombreTipo.includes("Mujer") && producto.estado.includes("Disponible"));
				console.log(filtro)

				const resultCategoriasFiltradas = filtro.reduce((acc,item)=>{
						console.log(item.categoria)
						console.log("acc => ",acc)
						console.log("acc => ",acc)
					let contadores = []
					let initialNum =0

					

					if(!acc.includes(item.categoria.nombreCategoria)){
						
						acc.push(item.categoria.nombreCategoria);
					}
					return acc;
				},[])
		
				console.log(resultCategoriasFiltradas);

				setFiltradoTipo(filtro);
				 categoriasCount = filtro?.filter(
					(producto) =>
						producto.categoria.nombreCategoria.includes("Poleras")
				);
			} else if (selected === "Hombre"){
				filtro = products?.filter((producto) => producto.tipo.nombreTipo.includes("Hombre") && producto.estado.includes("Disponible"));
				setFiltradoTipo(filtro);
			} else if (selected === "Niños"){
				filtro = products?.filter((producto) => producto.tipo.nombreTipo.includes("Niños") && producto.estado.includes("Disponible"));
				setFiltradoTipo(filtro);
			} else if (selected === "Unisex"){
				filtro = products?.filter((producto) => producto.tipo.nombreTipo.includes("Unisex") && producto.estado.includes("Disponible"));
				setFiltradoTipo(filtro);
			}
			console.log(filtro);
			setCount(size(filtro))
	}, [selected]);

	// filtrado por categorias

	const polerones = products?.filter(
		(producto) =>
			producto.categoria.nombreCategoria.includes("Polerones") &&
			producto.estado.includes("Disponible")
	);
	const vestidos = products?.filter(
		(producto) =>
			producto.categoria.nombreCategoria.includes("Vestidos") &&
			producto.estado.includes("Disponible")
	);

	//filtrado por tipos
	const fType = products?.filter(producto => producto.estado.includes('Disponible'))

	console.log("FT",fType)
	console.log("FP",products)

	const handleSelect = (text) => {
		setSelected(text);
	};

	const filtradoMujer = () => {
		setSelected("Mujer");
	};
	const filtradoHombre = () => {
		setSelected("Hombre");
		// let filtro = products?.filter((producto) => producto.tipo.nombreTipo.includes("Hombre") && producto.estado.includes("Disponible"));
		// console.log(filtro);
		// setFiltradoTipo(filtro);
	};
	const filtradoNiño = () => {
		setSelected("Niños");
	};
	const filtradoUnisex = () => {
		setSelected("Unisex");
	};
	const noFiltro = () => {
		setFiltradoTipo(products);
	};

	let categoriasView = filtradoTipo.reduce((acc,item)=>{
	if(!acc.includes(item.categoria.nombreCategoria)){
		
		acc.push(item.categoria.nombreCategoria);
	}
	return acc;
},[])
	console.log(filtradoTipo)
	console.log(categoriasView)

	return (
		<AdminLayout>
			<div className="container-tipo-stock fsa m-1 cfc">
				<p className="fs-m">Seleccionar Tipo:</p>
				<Button color="blue" onClick={filtradoMujer}>
					Mujer
				</Button>
				<Button color="blue" onClick={filtradoHombre}>
					Hombre
				</Button>
				<Button color="blue" onClick={filtradoNiño}> Niños</Button>
				<Button color="blue" onClick={filtradoUnisex}>Unisex</Button>
				<Button color="blue" onClick={noFiltro}>Todos</Button>
			</div>
			<section className="container-stock">
				<div className="Tipo-Linea-1 center fsb">
					{!products && <Loader active>Cargando Stock</Loader>}
					{products && size(products) === 0 && (
						<div>
							<h3>No hay productos para mostrar.</h3>
						</div>
					)}
					{size(filtradoTipo) > 0 &&
						filtradoTipo.map((producto) => {
							return (
								<ContadorStock
									titulo={producto.categoria.nombreCategoria}
									cantidad={count}
								/>
							);
						})}
					{/* <ContadorStock titulo="Poleras" cantidad="26" />
					<ContadorStock titulo="Polerones" cantidad="40" />
					<ContadorStock titulo="Pantalones" cantidad="16" /> */}
				</div>
				<div className="Tipo-Linea-2 center fsb">
					{/* <ContadorStock titulo="Chaquetas" cantidad="31" />
					<ContadorStock titulo="Vestidos" cantidad="0" />
					<ContadorStock titulo="Accesorios" cantidad="7" /> */}
				</div>
			</section>
		</AdminLayout>
	);
};

export default Stock;
