const Titulo = ({titulo = "Título", clase="cfc hv-15"}) => {
	return (
		<section className={clase}>
			<h2 className="">{titulo}</h2>
		</section>
	);
};

export default Titulo;
