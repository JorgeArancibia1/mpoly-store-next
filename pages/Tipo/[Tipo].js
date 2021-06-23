import DetalleTipo from "../../components/DetalleTipo/DetalleTipo";
import BasicLayout from "../../layouts/BasicLayout/BasicLayout";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { obtenerProductosSegunTipo } from "../../api/product";
import { size, map } from 'lodash';

const Tipo = () => {
	const [products, setproducts] = useState(null);
  const { query } = useRouter();
  // console.log("query.tipo", query.Tipo)
  
  useEffect(() => {
		(async () => {
			const response = await obtenerProductosSegunTipo(18, query.Tipo);
			if (size(response) > 0) {
				setproducts(response)
			} else {
				setproducts([]);
			}
		})()
	}, [])

// console.log("productosTipo => ",products)


	return (
		<BasicLayout>
			<div className="100vh">
				<DetalleTipo titulo={query.Tipo} productos={products} />
			</div>
		</BasicLayout>
	);
};

export default Tipo;
