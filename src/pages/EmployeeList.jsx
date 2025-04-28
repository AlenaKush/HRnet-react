import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage, setSearchTerm, setSortColumn, setSortDirection } from "../store/tableSlice";
import { Link } from "react-router-dom";
import EmployeeTable from "../components/EmployeeTable";
import EntriesSelector from "../components/EntriesSelector";
import SearchField from "../components/SearchField";
import TableInfo from "../components/TableInfo";
import TablePagination from "../components/Pagination";
import { states } from "../utils/constants";


function EmployeeList() {

  // --- DATA from Redux ---
  const employees = useSelector((state) => state.employees.employees);
  const entriesCount = useSelector((state) => state.table.entriesCount);
  const sortColumn = useSelector((state) => state.table.sortColumn);
  const sortDirection = useSelector((state) => state.table.sortDirection);
  const currentPage = useSelector((state) => state.table.currentPage);
  const searchTerm = useSelector((state) => state.table.searchTerm);
  
  const dispatch = useDispatch();
  
  const handleSearchChange = (term) => {
    dispatch(setSearchTerm(term));
    dispatch(setCurrentPage(1)); 
  };
  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };
  
  // --- SEARCH by text and filtration ---
  const filteredEmployees = employees.filter((emp) => {
    const fields = [
      emp.firstName,
      emp.lastName,
      emp.startDate,
      emp.department,
      emp.birthDate,
      emp.street,
      emp.city,
      states.find((s) => s.name === emp.state)?.abbreviation || "",
      emp.zipCode,
    ];

    return fields.some((field) =>
      String(field).toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  
  // --- SORT within column ---
  function handleSort(column) {
    if (column === sortColumn) {
      dispatch(setSortDirection(sortDirection === "asc" ? "desc" : "asc"));
    } else {
      dispatch(setSortColumn(column));
      dispatch(setSortDirection("asc"));
    }
  }

  // sort employees by selected column
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

  // --- PAGINATION: cut sorted data for current page ---
  const startIndex = (currentPage - 1) * entriesCount;
  const endIndex = startIndex + entriesCount;
  const sortedEmployees = sortData(filteredEmployees);
  const paginatedEmployees = sortedEmployees.slice(startIndex, endIndex);

  return (
    <div className="container mt-4">
      <h1 className="text-center">Current Employees</h1>
      <div className="d-flex justify-content-between align-items-center my-3">
        <EntriesSelector id="entriesSelect" />
        <SearchField value={searchTerm} onChange={handleSearchChange} />
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
          entriesPerPage={entriesCount}
          totalEntries={filteredEmployees.length}
        />
        <TablePagination
          currentPage={currentPage}
          totalEntries={filteredEmployees.length}
          entriesPerPage={entriesCount}
          onPageChange={handlePageChange}
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
