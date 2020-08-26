import React from 'react';
import PropTypes from 'prop-types';
import ReactPaginate from 'react-paginate';

export default function PaginationC({ currentPage, perPage, total, totalPages, paginate }) {
	const pageNumbers = [];

	for (let i = 1; i <= Math.ceil(total / perPage); i++) {
		pageNumbers.push(i);
	}

	return (
		<div className="d-flex justify-content-center align-items-center">
			<ReactPaginate
				previousLabel={'Previous'}
				nextLabel={'Next'}
				breakLabel={'...'}
				breakClassName={'break-me'}
				pageCount={totalPages}
				marginPagesDisplayed={2}
				pageRangeDisplayed={5}
				onPageChange={(e) => paginate(e.selected + 1)}
				containerClassName={'pagination'}
				subContainerClassName={'pages pagination'}
				pageClassName={'page-item'}
				pageLinkClassName={'page-link'}
				breakClassName={'page-link'}
				activeClassName={'active'}
				nextClassName={'page-item'}
				nextLinkClassName={'page-link'}
				previousClassName={'page-item'}
				previousLinkClassName={'page-link'}
			/>
		</div>
	);
}

PaginationC.propTypes = {
	currentPage: PropTypes.number,
	perPage: PropTypes.number,
	total: PropTypes.number,
	totalPages: PropTypes.number,
	paginate: PropTypes.func.isRequired
};
