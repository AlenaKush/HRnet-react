import Form from "react-bootstrap/Form";

function EntriesSelector({ id = "entriesSelect", value, onChange }) {
  return (
    <Form.Group className="d-flex align-items-center gap-2 mb-3">
      <Form.Label htmlFor={id} className="mb-0">
        Show
      </Form.Label>
      <Form.Select
        id={id}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        style={{ width: "auto" }}
      >
        {[10, 25, 50, 100].map((count) => (
          <option key={count} value={count}>
            {count}
          </option>
        ))}
      </Form.Select>
      <span>entries</span>
    </Form.Group>
  );
}

export default EntriesSelector;
