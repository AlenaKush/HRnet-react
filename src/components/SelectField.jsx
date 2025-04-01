function SelectField({ name, label, options = [], value, onChange }) {
    return (
      <div className="mb-3">
        {label && <label htmlFor={name} className="form-label">{label}</label>}
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          className="form-select"
        >
          <option value="">Select {label || name}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }
  
  export default SelectField;
  