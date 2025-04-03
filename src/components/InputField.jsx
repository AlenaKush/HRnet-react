import { Form } from 'react-bootstrap';

function InputField({ name, label, type = 'text', placeholder, value, onChange }) {
  return (
    <Form.Group className="mb-3" controlId={name}>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Control
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </Form.Group>
  );
}

export default InputField;
