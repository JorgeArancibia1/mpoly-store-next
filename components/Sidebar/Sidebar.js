import Link from "next/link"

const Sidebar = () => {
	return (
		<section className="vertical">
				<ul className="container-links-sidebar">
					<Link href="/ProductosDisponibles">
						<li className="pointer sidebar-link">Productos Disponibles</li>
					</Link>
					<Link href="./ProductosVendidos">
						<li className="pointer sidebar-link">Productos Vendidos</li>
					</Link>
					<Link href="./Stock">
						<li className="pointer sidebar-link">Stock</li>
					</Link>
					<Link href="./Estadisticas">
						<li className="pointer sidebar-link">Estadísticas</li>
					</Link>
					<Link href="./GestionCompras">
						<li className="pointer sidebar-link">Gestión de compras</li>
					</Link>
				</ul>
		</section>
	);
};

export default Sidebar;
