import { useState } from "react";
import InputField from "../components/InputField.jsx";
import SelectField from "../components/SelectField.jsx";
import DateField from "../components/DateField.jsx";
import { useNavigate } from "react-router-dom";
import { states, departments } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addEmployee } from "../store/employeeSlice";
import CustomModal from 'alenakush-custom-modal';

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

  const [formData, setFormData] = useState(initialState); //controls the state of data
  const [showModal, setShowModal] = useState(false); //controls the display of modal
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value })); //updates a specific field
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addEmployee({ ...formData }));
    setShowModal(true);
    setFormData(initialState);
  }

  return (
    <main className="mx-auto" style={{ maxWidth: "500px" }} aria-labelledby="create-employee-heading">
      <h1 className="text-center my-3" id="create-employee-heading">HRnet</h1>

      <div className="text-center my-3">
        <button
          className="btn btn-primary"
          onClick={() => navigate("/employee-list")}
          aria-label="Navigate to employee list"
        >
          View Current Employees
        </button>
      </div>

      <h2 className="text-center my-3">Create Employee</h2>

      <form onSubmit={handleSubmit} aria-label="Create employee form">
        <InputField
          id="firstName"
          name="firstName"
          label="First Name"
          value={formData.firstName}
          onChange={handleChange}
        />
        <InputField
          id="lastName"
          name="lastName"
          label="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <DateField
          id="birthDate"
          name="birthDate"
          label="Date of Birth"
          value={formData.birthDate}
          onChange={handleChange}
        />
        <DateField
          id="startDate"
          name="startDate"
          label="Start Date"
          value={formData.startDate}
          onChange={handleChange}
        />
        <InputField
          id="street"
          name="street"
          label="Street"
          value={formData.street}
          onChange={handleChange}
        />
        <InputField
          id="city"
          name="city"
          label="City"
          value={formData.city}
          onChange={handleChange}
        />
        <SelectField
          id="state"
          name="state"
          label="State"
          value={formData.state}
          onChange={handleChange}
          options={states.map((state) => state.name)}
        />
        <InputField
          id="zipCode"
          name="zipCode"
          label="Zip Code"
          value={formData.zipCode}
          onChange={handleChange}
        />
        <SelectField
          id="department"
          name="department"
          label="Department"
          value={formData.department}
          onChange={handleChange}
          options={departments}
        />
        <div className="text-center">
          <button type="submit" className="btn btn-primary my-3" aria-label="Save new employee">
            Save
          </button>
        </div>
      </form>

      <CustomModal
        show={showModal}
        title="Employee Created!"
        onClose={() => setShowModal(false)}
        onConfirm={() => navigate("/employee-list")}
        confirmLabel="View Employees"
        cancelLabel="OK"
        showClose={true}
        style={{
          title: {
            fontSize: "24px",
            marginBottom: "40px",
          },
          buttons: {
            flexDirection: "row-reverse",
          },
          confirmButton: {
            backgroundColor: "#0d6efd",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            padding: "10px",
            cursor: "pointer",
            flex: 1,
          },
          cancelButton: {
            backgroundColor: "#0d6efd",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            padding: "10px",
            cursor: "pointer",
            flex: 1,
          },
        }}
      />
    </main>
  );
}

export default CreateEmployee;
