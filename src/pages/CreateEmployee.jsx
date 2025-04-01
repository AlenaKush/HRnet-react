import { useState } from 'react';
import InputField from '../components/InputField.jsx';
import SelectField from '../components/SelectField.jsx';
import DateField from '../components/DateField.jsx';
import { Link } from 'react-router-dom';

function CreateEmployee() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    birthDate: '',
    startDate: '',
    department: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Form submitted:', formData);
  }

  return (
    <div className="container mt-4">
      <h1>HRnet</h1>
      <Link to="/employee-list" className="btn btn-secondary mb-4">
        View Current Employees
      </Link>
      <h2>Create Employee</h2>
      <form onSubmit={handleSubmit}>
        <InputField name="firstName" label="First Name" value={formData.firstName} onChange={handleChange} />
        <InputField name="lastName" label="Last Name" value={formData.lastName} onChange={handleChange} />
        <DateField name="birthDate" label="Date of Birth" value={formData.birthDate} onChange={handleChange} />
        <DateField name="startDate" label="Start Date" value={formData.startDate} onChange={handleChange} />
        <InputField name="street" label="Street" value={formData.street} onChange={handleChange} />
        <InputField name="city" label="City" value={formData.city} onChange={handleChange} />
        <SelectField
          name="state"
          label="State"
          value={formData.state}
          onChange={handleChange}
          options={['California', 'Texas', 'New York', 'Florida', 'Washington']}
        />
        <InputField name="zipCode" label="Zip Code" value={formData.zipCode} onChange={handleChange} />
        <SelectField
          name="department"
          label="Department"
          value={formData.department}
          onChange={handleChange}
          options={['Sales', 'Marketing', 'Engineering', 'HR', 'Legal']}
        />
        <button type="submit" className="btn btn-primary">Save</button>
      </form>
    </div>
  );
}

export default CreateEmployee;
