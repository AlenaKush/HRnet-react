import Table from "react-bootstrap/Table";
import { states } from "../utils/constants";

function EmployeeTable({ employees, onSort, sortColumn, sortDirection }) {
  if (!employees.length) {
    return <p className="text-center">No employees found.</p>;
  }

  function getAbbreviation(stateName) {
    const match = states.find((s) => s.name === stateName);
    return match ? match.abbreviation : stateName;
  }

  function formatDate(dateString) {
    if (!dateString) return "";
    const date = new Date(dateString);

    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    }).format(date);
  }

  return (
    <Table striped bordered hover responsive className="small">
      <thead>
        <tr>
          <th onClick={() => onSort("firstName")} style={{ cursor: "pointer" }}>
            First Name{" "}
            <span>
              <span className={sortColumn === "firstName" && sortDirection === "asc" ? "text-primary fw-bold" : "text-muted"}>↑</span>
              <span className={sortColumn === "firstName" && sortDirection === "desc" ? "text-primary fw-bold" : "text-muted"}>↓</span>
            </span>
          </th>
          <th onClick={() => onSort("lastName")} style={{ cursor: "pointer" }}>
            Last Name{" "}
            <span>
              <span className={sortColumn === "lastName" && sortDirection === "asc" ? "text-primary fw-bold" : "text-muted"}>↑</span>
              <span className={sortColumn === "lastName" && sortDirection === "desc" ? "text-primary fw-bold" : "text-muted"}>↓</span>
            </span>
          </th>
          <th onClick={() => onSort("startDate")} style={{ cursor: "pointer" }}>
            Start Date{" "}
            <span>
              <span className={sortColumn === "startDate" && sortDirection === "asc" ? "text-primary fw-bold" : "text-muted"}>↑</span>
              <span className={sortColumn === "startDate" && sortDirection === "desc" ? "text-primary fw-bold" : "text-muted"}>↓</span>
            </span>
          </th>
          <th onClick={() => onSort("department")} style={{ cursor: "pointer" }}>
            Department{" "}
            <span>
              <span className={sortColumn === "department" && sortDirection === "asc" ? "text-primary fw-bold" : "text-muted"}>↑</span>
              <span className={sortColumn === "department" && sortDirection === "desc" ? "text-primary fw-bold" : "text-muted"}>↓</span>
            </span>
          </th>
          <th onClick={() => onSort("birthDate")} style={{ cursor: "pointer" }}>
            Date of Birth{" "}
            <span>
              <span className={sortColumn === "birthDate" && sortDirection === "asc" ? "text-primary fw-bold" : "text-muted"}>↑</span>
              <span className={sortColumn === "birthDate" && sortDirection === "desc" ? "text-primary fw-bold" : "text-muted"}>↓</span>
            </span>
          </th>
          <th onClick={() => onSort("street")} style={{ cursor: "pointer" }}>
            Street{" "}
            <span>
              <span className={sortColumn === "street" && sortDirection === "asc" ? "text-primary fw-bold" : "text-muted"}>↑</span>
              <span className={sortColumn === "street" && sortDirection === "desc" ? "text-primary fw-bold" : "text-muted"}>↓</span>
            </span>
          </th>
          <th onClick={() => onSort("city")} style={{ cursor: "pointer" }}>
            City{" "}
            <span>
              <span className={sortColumn === "city" && sortDirection === "asc" ? "text-primary fw-bold" : "text-muted"}>↑</span>
              <span className={sortColumn === "city" && sortDirection === "desc" ? "text-primary fw-bold" : "text-muted"}>↓</span>
            </span>
          </th>
          <th onClick={() => onSort("state")} style={{ cursor: "pointer" }}>
            State{" "}
            <span>
              <span className={sortColumn === "state" && sortDirection === "asc" ? "text-primary fw-bold" : "text-muted"}>↑</span>
              <span className={sortColumn === "state" && sortDirection === "desc" ? "text-primary fw-bold" : "text-muted"}>↓</span>
            </span>
          </th>
          <th onClick={() => onSort("zipCode")} style={{ cursor: "pointer" }}>
            Zip Code{" "}
            <span>
              <span className={sortColumn === "zipCode" && sortDirection === "asc" ? "text-primary fw-bold" : "text-muted"}>↑</span>
              <span className={sortColumn === "zipCode" && sortDirection === "desc" ? "text-primary fw-bold" : "text-muted"}>↓</span>
            </span>
          </th>
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
