import React from "react";
import PropTypes from "prop-types";

export default function Pagination({
  currentPage,
  itemsPerPage,
  totalItems,
  paginate,
}) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  const maxPageIndex = Math.ceil(totalItems / itemsPerPage);
  const prevPageIndex = currentPage - 1;
  const nextPageIndex = currentPage + 1;

  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <a
            style={prevPageIndex === 0 ? { pointerEvents: "none" } : null}
            onClick={() => paginate(prevPageIndex)}
            className="page-link"
            href="#"
            aria-label="Previous"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a onClick={() => paginate(number)} href="#" className="page-link">
              {number}
            </a>
          </li>
        ))}
        <li className="page-item">
          <a
            style={
              nextPageIndex === maxPageIndex + 1
                ? { pointerEvents: "none" }
                : null
            }
            onClick={() => paginate(nextPageIndex)}
            className="page-link"
            href="#"
            aria-label="Next"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number,
  itemsPerPage: PropTypes.number,
  totalItems: PropTypes.number,
  paginate: PropTypes.func,
};

Pagination.defaultProps = {
  currentPage: 1,
  itemsPerPage: 6,
  totalItems: 0,
  paginate: () => {},
};
