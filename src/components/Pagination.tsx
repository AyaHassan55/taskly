import ArrowIcon from "../assets/icons/Icon_rarrow.svg?react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const pages = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div className="flex items-center justify-center gap-2">
      {/* Previous */}
      <button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="flex items-center justify-center rotate-180 border border-[#C3C6D64D] rounded-xs w-8 h-8 cursor-pointer disabled:opacity-50"
      >
        <ArrowIcon className="w-[4.31px] h-1.75" />
      </button>

      {/* Pages */}
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`cursor-pointer border border-[#C3C6D64D] rounded-xs w-8 h-8 ${
            currentPage === page ? "bg-[#003D9B]" : ""
          }`}
        >
          <span
            className={`text-[12px] font-bold leading-4 ${
              currentPage === page
                ? "text-white"
                : "text-[#434654]"
            }`}
          >
            {page}
          </span>
        </button>
      ))}

      {/* Next */}
      <button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="flex items-center justify-center border border-[#C3C6D64D] rounded-xs w-8 h-8 cursor-pointer disabled:opacity-50"
      >
        <ArrowIcon className="w-[4.31px] h-1.75" />
      </button>
    </div>
  );
};

export default Pagination;