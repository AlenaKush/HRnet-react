import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import EmployeeTable from "../components/EmployeeTable";
import EntriesSelector from "../components/EntriesSelector";
import SearchField from "../components/SearchField";
import TableInfo from "../components/TableInfo";
import TablePagination from "../components/Pagination";
import { states } from "../utils/constants";


function EmployeeList() {

  // --- STATE ----
  const [searchTerm, setSearchTerm] = useState("");          // Search query
  const [currentPage, setCurrentPage] = useState(1);         // Current page
  const [sortColumn, setSortColumn] = useState(null);        // Column to sort by
  const [sortDirection, setSortDirection] = useState("asc"); // Sorting direction

  // --- DATA from Redux ---
  const employees = useSelector((state) => state.employees.employees);
  const entriesPerPage = useSelector((state) => state.employees.entriesCount);

  useEffect(() => {
    setCurrentPage(1);
  }, [entriesPerPage]);

  // --- SEARCH by text and filtration ---
  const filteredEmployees = employees.filter((emp) => {
    const stateAbbr = states.find((s) => s.name === emp.state)?.abbreviation || "";
    
    const values = [
      emp.firstName,
      emp.lastName,
      emp.department,
      emp.city,
      stateAbbr
    ];
    return values.some((field) =>
      field.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  
  // --- SORT within column ---
  function handleSort(column) {
    if (column === sortColumn) {
      setSortDirection((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortColumn(column);    // updating the state
      setSortDirection("asc");  // updating the state
    }
  }
  // sort function
  function sortData(data) {
    if (!sortColumn) return data;

    return [...data].sort((a, b) => {
      const aVal = a[sortColumn] || "";
      const bVal = b[sortColumn] || "";

      if (aVal < bVal) return sortDirection === "asc" ? -1 : 1;
      if (aVal > bVal) return sortDirection === "asc" ? 1 : -1;
      return 0;
    });
  }

  // --- PAGINATION: Slice data for current page ---
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = startIndex + entriesPerPage;
  const sortedEmployees = sortData(filteredEmployees);
  const paginatedEmployees = sortedEmployees.slice(startIndex, endIndex);

  return (
    <div className="container mt-4">
      <h1 className="text-center">Current Employees</h1>
      <div className="d-flex justify-content-between align-items-center my-3">
        <EntriesSelector id="entriesSelect" />
        <SearchField value={searchTerm} onChange={setSearchTerm} />
      </div>
      <EmployeeTable
        employees={paginatedEmployees}
        onSort={handleSort}
        sortColumn={sortColumn}
        sortDirection={sortDirection}
      />
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
