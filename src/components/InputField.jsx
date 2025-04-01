function InputField({ name, type = 'text', placeholder, value, onChange, label }) {
    return (
      <div className="mb-3">
        {label && <label htmlFor={name} className="form-label">{label}</label>}
        <input
          id={name}
          name={name}
          type={type}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </div>
    );
  }
  
  export default InputField;
  