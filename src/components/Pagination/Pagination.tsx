import ReactPaginate from "react-paginate";
import css from "./Pagination.module.css";

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  onPageChange: (selected: number) => void;
}

const Pagination = ({
  pageCount,
  currentPage,
  onPageChange,
}: PaginationProps) => {
  const handlePageClick = (data: { selected: number }) => {
    onPageChange(data.selected + 1); // бо selected починається з 0
  };

  if (pageCount <= 1) return null;

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel="Next >"
      previousLabel="< Prev"
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      pageCount={pageCount}
      forcePage={currentPage - 1}
      containerClassName={css.pagination}
      activeClassName={css.active}
      previousClassName={css.prev}
      nextClassName={css.next}
      disabledClassName={css.disabled}
    />
  );
};

export default Pagination;
