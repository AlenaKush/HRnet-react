function TableInfo({ currentPage, entriesPerPage, totalEntries }) {
    if (totalEntries === 0) {
      return <p>Showing 0 to 0 of 0 entries</p>;
    }
  
    const start = (currentPage - 1) * entriesPerPage + 1;
    const end = Math.min(currentPage * entriesPerPage, totalEntries);
  
    return (
      <p className="mb-3">
        Showing {start} to {end} of {totalEntries} entries
      </p>
    );
  }
  
  export default TableInfo;
  