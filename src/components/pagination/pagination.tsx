import React, { useState } from "react";
import { ArrowLefttIcon, ArrowRightIcon } from "../icons";
import styles from "./pagination.module.scss";

interface PaginationProps {
  totalPages: number;
  defaultActivePage: number;
  onChangePage: (page: number) => void;
}

const Pagination = ({
  totalPages,
  defaultActivePage,
  onChangePage,
}: PaginationProps) => {
  const maxFirstPages = 3;
  const [activePage, setActivePage] = useState(defaultActivePage);

  const handlePaginationChange = (pageNumber: number) => {
    setActivePage(pageNumber);
    onChangePage(pageNumber);
  };

  const firstPages = Array.from(
    { length: totalPages > maxFirstPages ? maxFirstPages : totalPages },
    (_, i) => i + 1
  );

  const lastTwoPages = [totalPages - 1, totalPages];

  const showThreeDots =
    activePage > maxFirstPages && activePage < totalPages - 2;

  const canShowLastPages = totalPages > maxFirstPages;

  return (
    <div>
      <button
        onClick={() => handlePaginationChange(activePage - 1)}
        disabled={activePage === 1}
        className={styles.paginateButton}
      >
        <ArrowLefttIcon />
      </button>
      {firstPages.map((pageNumber) => (
        <span
          key={pageNumber}
          className={`${styles.pageNumber} ${
            activePage == pageNumber ? styles.activePage : ""
          }`}
          onClick={() => handlePaginationChange(pageNumber)}
        >
          {pageNumber}
        </span>
      ))}
      {(canShowLastPages || showThreeDots) && <span>...</span>}
      {showThreeDots && (
        <span
          className={`${styles.pageNumber} ${styles.activePage}`}
          onClick={() => handlePaginationChange(activePage)}
        >
          {activePage}
        </span>
      )}
      {canShowLastPages &&
        lastTwoPages.map((pageNumber) => (
          <span
            className={`${styles.pageNumber} ${
              activePage == pageNumber ? styles.activePage : ""
            }`}
            key={pageNumber}
            onClick={() => handlePaginationChange(pageNumber)}
          >
            {pageNumber}
          </span>
        ))}
      <button
        onClick={() => handlePaginationChange(activePage + 1)}
        disabled={activePage === totalPages}
        className={styles.paginateButton}
      >
        <ArrowRightIcon />
      </button>
    </div>
  );
};

export default Pagination;
