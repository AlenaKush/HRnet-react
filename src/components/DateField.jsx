import { Form } from 'react-bootstrap';

function DateField({ name, label, value, onChange }) {
  return (
    <Form.Group className="mb-3" controlId={name}>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control
        type="date"
        name={name}
        value={value}
        onChange={onChange}
      />
    </Form.Group>
  );
}

export default DateField;
