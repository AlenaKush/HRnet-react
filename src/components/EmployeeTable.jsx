import Table from 'react-bootstrap/Table';
import { states } from '../utils/constants';


function EmployeeTable({ employees }) {
  if (!employees.length) {
    return <p className="text-center">No employees found.</p>;
  }
  
  function getAbbreviation(stateName) {
    const match = states.find((s) => s.name === stateName);
    return match ? match.abbreviation : stateName;
  }

  function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
  
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    }).format(date);
  }
  
  
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Start Date</th>
          <th>Department</th>
          <th>Date of Birth</th>
          <th>Street</th>
          <th>City</th>
          <th>State</th>
          <th>Zip Code</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((emp, index) => (
          <tr key={index}>
            <td>{emp.firstName}</td>
            <td>{emp.lastName}</td>
            <td>{formatDate(emp.startDate)}</td>
            <td>{emp.department}</td>
            <td>{formatDate(emp.birthDate)}</td>
            <td>{emp.street}</td>
            <td>{emp.city}</td>
            <td>{getAbbreviation(emp.state)}</td>
            <td>{emp.zipCode}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default EmployeeTable;
