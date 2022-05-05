export type IPagination = {
  selected: number;
  pages: number;
  setSelected: (page: number) => void;
};

export const Pagination: React.FC<IPagination> = ({
  selected,
  setSelected,
  pages,
}) => {
  return (
    <nav className="border-y border-gray-200 px-4 flex items-center justify-between bg-white">
      <div className="-mt-px w-0 flex-1 flex">
        <a className="border-t-2 cursor-pointer border-transparent py-4 pr-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
          <svg
            className="mr-3 h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            />
          </svg>
          Previous
        </a>
      </div>
      <div className="-mt-px flex">
        {new Array(pages).fill(1).map((e, i) => (
          <a
            key={i}
            onClick={() => setSelected(i + 1)}
            className={
              i + 1 === selected
                ? "border-indigo-500 cursor-pointer text-indigo-600 border-t-2 p-4 inline-flex items-center text-sm font-medium"
                : "border-transparent cursor-pointer text-gray-500 hover:text-gray-700 hover:border-gray-300 border-t-2 p-4 inline-flex items-center text-sm font-medium"
            }
          >
            {i + 1}
          </a>
        ))}
      </div>
      <div className="-mt-px w-0 flex-1 flex justify-end">
        <a className="border-t-2 cursor-pointer border-transparent py-4 pl-1 inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
          Next
          <svg
            className="ml-3 h-5 w-5 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </nav>
  );
};
