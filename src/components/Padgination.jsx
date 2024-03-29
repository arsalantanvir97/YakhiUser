import React from "react";
import ReactPaginate from "react-paginate";

export default function Pagination({
  totalDocs,
  totalPages,
  currentPage,
  setPage,
  hasNextPage,
  hasPrevPage,
}) {
  return (
    <div className="row">
      <div className="col-sm-12 col-md-5">
        <div
          className="dataTables_info"
          id="DataTables_Table_0_info"
          role="status"
          aria-live="polite"
        >
          {/* Showing 1 to 2 of {totalDocs} entries */}
        </div>
      </div>
      <div className="col-sm-12 col-md-12">
        <ReactPaginate
          previousLabel={"<<"}
          nextLabel={">>"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={totalPages}
          marginPagesDisplayed={2}
          pageRangeDisplayed={1}
          onPageChange={(page) => setPage(page.selected + 1)}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      </div>
    </div>
  );
}
