function DateField({ name, label, value, onChange }) {
    return (
      <div className="mb-3">
        {label && <label htmlFor={name} className="form-label">{label}</label>}
        <input
          id={name}
          name={name}
          type="date"
          className="form-control"
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
  
  export default DateField;
  