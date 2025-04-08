import { useState } from "react";
import InputField from "../components/InputField.jsx";
import SelectField from "../components/SelectField.jsx";
import DateField from "../components/DateField.jsx";
import { Link } from "react-router-dom";
import { states, departments } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addEmployee } from "../store/employeeSlice";
import EmployeeModal from '../components/EmployeeModal';


function CreateEmployee() {

  const initialState = {
    firstName: "",
    lastName: "",
    birthDate: "",
    startDate: "",
    department: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
  };

  const [formData, setFormData] = useState(initialState);

  const dispatch = useDispatch();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  const [showModal, setShowModal] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addEmployee(formData));
    setFormData(initialState);
    setShowModal(true);   
  }
  

  return (
    <div className="mx-auto" style={{ maxWidth: "500px" }}>
      <h1 className="text-center my-3">HRnet</h1>
      <div className="text-center my-3">
        <Link to="/employee-list" className="btn btn-primary">
          View Current Employees
        </Link>
      </div>
      <h2 className="text-center my-3">Create Employee</h2>
      <form onSubmit={handleSubmit}>
        <InputField
          name="firstName"
          label="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <InputField
          name="lastName"
          label="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <DateField
          name="birthDate"
          label="Date of Birth"
          value={formData.birthDate}
          onChange={handleChange}
        />
        <DateField
          name="startDate"
          label="Start Date"
          value={formData.startDate}
          onChange={handleChange}
        />
        <InputField
          name="street"
          label="Street"
          value={formData.street}
          onChange={handleChange}
        />
        <InputField
          name="city"
          label="City"
          value={formData.city}
          onChange={handleChange}
        />
        <SelectField
          name="state"
          label="State"
          value={formData.state}
          onChange={handleChange}
          options={states.map((state) => state.name)}
        />
        <InputField
          name="zipCode"
          label="Zip Code"
          value={formData.zipCode}
          onChange={handleChange}
        />
        <SelectField
          name="department"
          label="Department"
          value={formData.department}
          onChange={handleChange}
          options={departments}
        />
        <div className="text-center">
          <button type="submit" className="btn btn-primary my-3">
            Save
          </button>
        </div>
      </form>
      <EmployeeModal show={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default CreateEmployee;
