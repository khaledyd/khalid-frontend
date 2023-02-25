import React from "react";

export default function Pagination({ currentPage, totalPageCount, onPageChange }) {
  const pageNumbers = Array.from({ length: totalPageCount }, (_, i) => i + 1);

  return (
    <div className=" flex justify-center items-end gap-5 mt-10 mb-5">
      {pageNumbers.map((page) => (
        <button
          key={page}
          className={`px-4 py-1 bg-slate-700 text-gray-50 ${
            page === currentPage ? "bg-slate-900" : ""
          }`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
    </div>
  );
}
