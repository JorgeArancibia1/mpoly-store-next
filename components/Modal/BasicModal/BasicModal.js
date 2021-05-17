import { Icon, Modal } from "semantic-ui-react";

const BasicModal = (props) => {

  const { show, setShowModal, title, children, ...rest } = props

  const onClose = () => setShowModal(false)

	return (
		<Modal className="basic-modal" open={show} onClose={onClose} {...rest} >
			<Modal.Header>
        <span>{ title }</span> <Icon name='close' onClick={ onClose } />
      </Modal.Header>
      <Modal.Content>
        { children }
      </Modal.Content>
		</Modal>
	);
};

export default BasicModal;
