// import { Button } from '@material-ui/core';
import SyncIcon from '@material-ui/icons/Sync';
import { Button } from 'semantic-ui-react';
import BasicModal from '../Modal/BasicModal';
import DinamicModal from '../Modal/DinamicModal/DinamicModal';

const Intermedio = ({abrirModal=false, mostrar=false, setShowModal,  isCreate=false}) => {
	return (
		<div className={isCreate? "fsb" : "interior fdfe"}>
			{
				isCreate &&
					<Button color="primary" onClick={abrirModal}>Crear Producto</Button>
			}
			<SyncIcon />
			<BasicModal show={mostrar} setShowModal={setShowModal} title="Crear cuenta" size="small">
				<DinamicModal />
      </BasicModal>
		</div>
	);
};

export default Intermedio;
