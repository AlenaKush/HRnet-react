import { Modal, Button } from 'react-bootstrap';

function EmployeeModal({ show, onClose }) {
  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Body className="text-center">
        <p className="fs-5 mb-4">Employee Created!</p>
        <Button variant="primary" onClick={onClose}>
          OK
        </Button>
      </Modal.Body>
    </Modal>
  );
}

export default EmployeeModal;
