import Pagination from 'react-bootstrap/Pagination';

function TablePagination({ currentPage, totalEntries, entriesPerPage, onPageChange }) {
  const totalPages = Math.ceil(totalEntries / entriesPerPage);

  if (totalPages <= 1) return null;

  const pages = [];

  for (let page = 1; page <= totalPages; page++) {
    pages.push(
      <Pagination.Item
        key={page}
        active={page === currentPage}
        onClick={() => onPageChange(page)}
      >
        {page}
      </Pagination.Item>
    );
  }

  return (
    <Pagination className="justify-content-center">
      {pages}
    </Pagination>
  );
}

export default TablePagination;
