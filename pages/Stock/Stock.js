import AdminLayout from "../../layouts/AdminLayout";
import ContadorStock from "../../components/ContadorStock/ContadorStock";
import { Button, Loader } from "semantic-ui-react";
import { useState } from "react";
import { useEffect } from "react";
import { size, map } from "lodash";
import { getLastProducts } from "../../api/product";

const Stock = () => {
	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(true);
	const [selected, setSelected] = useState("");

	useEffect(() => {
		if(selected !== '') {
			(async () => {
				setLoading(true);
				const response = await getLastProducts(15, selected);
				if(response.length > 0) {
					const productsByCategory = {};
					response.forEach((product) => {
						productsByCategory[product.categoria.nombreCategoria] = response.filter(element => element.categoria.nombreCategoria === product.categoria.nombreCategoria)
					})
					setProducts(Object.entries(productsByCategory));
				} else {
					setProducts([]);
				}
				setLoading(false);
			})();
		}
		setLoading(false)
	}, [selected]);

	const handleSelect = (e) => {
		const text = e.target.dataset.tipo;
		setSelected(text);
	};

	const noFiltro = () => {
		setFiltradoTipo(products);
	};

	return (
		<AdminLayout>
			<div className="container-tipo-stock fsa m-1 cfc">
				<p className="fs-m">Seleccionar Tipo:</p>
				<Button color="blue" data-tipo="Mujer" onClick={handleSelect}>
					Mujer
				</Button>
				<Button color="blue" data-tipo="Hombre" onClick={handleSelect}>
					Hombre
				</Button>
				<Button color="blue" data-tipo="Niños" onClick={handleSelect}> Niños</Button>
				<Button color="blue" data-tipo="Unisex" onClick={handleSelect}>Unisex</Button>
				<Button color="blue" onClick={noFiltro}>Todos</Button>
			</div>
			<section className="container-stock">
				<div className="Tipo-Linea-1 center fsb">
					{loading && <Loader active>Cargando Stock</Loader>}
					{size(products) === 0 && (
						<div>
							<h3>No hay productos para mostrar.</h3>
						</div>
					)}
					{size(products) > 0 ?
						products.map((categoria) => {
							return (
								<ContadorStock
									titulo={categoria[0]}
									cantidad={categoria[1].length}
								/>
							);
						}): <p>Debes seleccionar una categoria</p>}
				</div>
				<div className="Tipo-Linea-2 center fsb">
				</div>
			</section>
		</AdminLayout>
	);
};

export default Stock;
