import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import EmployeeTable from "../components/EmployeeTable";
import EntriesSelector from "../components/EntriesSelector";
import SearchField from "../components/SearchField";
import TableInfo from "../components/TableInfo";
import TablePagination from "../components/Pagination";

function EmployeeList() {
  const employees = useSelector((state) => state.employees.employees);
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const filteredEmployees = employees.filter((emp) => {
    const values = [
      emp.firstName,
      emp.lastName,
      emp.department,
      emp.city,
      emp.state,
    ];
    return values.some((field) =>
      field.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  const [currentPage, setCurrentPage] = useState(1);
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const paginatedEmployees = filteredEmployees.slice(startIndex, endIndex);

  return (
    <div className="container mt-4">
      <h1 className="text-center">Current Employees</h1>
      <div className="d-flex justify-content-between align-items-center my-3">
        <EntriesSelector value={entriesPerPage} onChange={setEntriesPerPage} />
        <SearchField value={searchTerm} onChange={setSearchTerm} />
      </div>
      <EmployeeTable employees={paginatedEmployees} />
      <div className="d-flex justify-content-between align-items-center my-3">
        <TableInfo
          currentPage={currentPage}
          entriesPerPage={entriesPerPage}
          totalEntries={filteredEmployees.length}
        />
        <TablePagination
          currentPage={currentPage}
          totalEntries={filteredEmployees.length}
          entriesPerPage={entriesPerPage}
          onPageChange={setCurrentPage}
        />
      </div>
      <div className="text-center">
        <Link to="/create-employee" className="btn btn-primary my-3">
          Back to Create Employee
        </Link>
      </div>
    </div>
  );
}

export default EmployeeList;
