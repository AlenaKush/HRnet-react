import { Form } from 'react-bootstrap';
import InputField from './InputField';

function SearchField({ value, onChange }) {
  return (
    <Form.Group className="mb-3 d-flex align-items-center gap-2 justify-content-end">
      <Form.Label htmlFor="search" className="mb-3">Search:</Form.Label>
      <div style={{ maxWidth: '250px', flex: '1' }}>
        <InputField
          name="search"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </Form.Group>
  );
}

export default SearchField;
