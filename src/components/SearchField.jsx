import Form from 'react-bootstrap/Form';

function SearchField({ value, onChange }) {
  return (
    <Form.Group className="mb-3 d-flex align-items-center gap-2 justify-content-end">
      <Form.Label htmlFor="search" className="mb-0">Search:</Form.Label>
      <Form.Control
        id="search"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        style={{ maxWidth: '250px' }}
      />
    </Form.Group>
  );
}

export default SearchField;
