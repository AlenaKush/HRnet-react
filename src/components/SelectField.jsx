import { Form } from 'react-bootstrap';

function SelectField({ name, label, options = [], value, onChange, labelPosition = 'top' }) {
  const isSideLabel = labelPosition === 'side';

  return (
    <Form.Group className={`mb-3 ${isSideLabel ? 'd-flex align-items-center' : ''}`} controlId={name}>
      {label && (
        <Form.Label className={isSideLabel ? 'me-2 mb-0' : ''}>{label}</Form.Label>
      )}
      <Form.Select 
        name={name} 
        value={value} 
        onChange={onChange} 
        style={isSideLabel ? { width: 'auto', flex: '1' } : {}}
      >
        {options.map((option) =>
          typeof option === 'string' || typeof option === 'number' ? (
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
