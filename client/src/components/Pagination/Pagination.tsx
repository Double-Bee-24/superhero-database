// Pagination.tsx
import styles from "./Pagination.module.scss";
import { getPrevPage, getNextPage } from "../../utils/paginationUtils";
import { IPaginationProps } from "../../interfaces/IPaginationProps";

const Pagination = ({ page, totalPages, setPage }: IPaginationProps) => {
  const prevPage = getPrevPage(page);
  const nextPage = getNextPage(page, totalPages);

  return (
    <div className={styles.pagination}>
      <button onClick={() => setPage(prevPage)} disabled={page === 1}>
        Previous
      </button>
      <span>
        Page {page} of {totalPages}
      </span>
      <button onClick={() => setPage(nextPage)} disabled={page === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
