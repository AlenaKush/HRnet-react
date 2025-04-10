import { Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function EmployeeModal({ show, onClose }) {
  const navigate = useNavigate();

  function handleGoToList() {
    onClose();
    navigate("/employee-list");
  }

  return (
    <Modal show={show} onHide={onClose} centered>
      <Modal.Body className="text-center">
        <p className="fs-5 mb-4">Employee Created!</p>
        <div className="d-flex justify-content-between">
          <Button variant="primary" onClick={handleGoToList}>
            View Current Employees
          </Button>
          <Button variant="primary" onClick={onClose}>
            OK
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default EmployeeModal;
