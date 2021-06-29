// import { Button } from '@material-ui/core';
import SyncIcon from "@material-ui/icons/Sync";
import { useRouter } from "next/router";
import { Button } from "semantic-ui-react";
import BasicModal from "../Modal/BasicModal";
import DinamicModal from "../Modal/DinamicModal/DinamicModal";

const Intermedio = ({
	abrirModal = false,
	mostrar = false,
	setShowModal,
	isCreate = false
}) => {
	const router = useRouter();

	return (
		<div className={isCreate ? "fsb" : "interior fdfe"}>
			{isCreate && (
				<Button color="blue" onClick={abrirModal}>
					Crear Producto
				</Button>
			)}
			<Button onClick={()=>router.reload(window.location.pathname)}>
				<SyncIcon />
			</Button>
			<BasicModal
				show={mostrar}
				setShowModal={setShowModal}
				title="Crear Producto"
				size="small"
			>
				<DinamicModal textoBoton="Crear producto" />
			</BasicModal>
		</div>
	);
};

export default Intermedio;
