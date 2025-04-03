import { Form } from 'react-bootstrap';

function SelectField({ name, label, options = [], value, onChange }) {
  return (
    <Form.Group className="mb-3" controlId={name}>
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Select name={name} value={value} onChange={onChange}>
        <option value="">Select {label || name}</option>
        {options.map((option) =>
          typeof option === 'string' ? (
            <option key={option} value={option}>
              {option}
            </option>
          ) : (
            <option key={option.abbreviation} value={option.abbreviation}>
              {option.name}
            </option>
          )
        )}
      </Form.Select>
    </Form.Group>
  );
}

export default SelectField;
