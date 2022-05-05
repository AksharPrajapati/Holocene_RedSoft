type IHSCodeItem = {
  label: string;
  code: string;
};

export const HSCodeItem: React.FC<IHSCodeItem> = ({ label, code }) => {
  return (
    <div className="flex w-full shadow-md mt-3 justify-between rounded-lg bg-white px-4 py-2">
      <label className="text-sm leading-5 font-normal">{label}</label>
      <div className="flex">
        <div className="inline-flex items-center px-2 py-0.5 rounded-full text-sm font-medium bg-indigo-50 text-gray-800 mr-5">
          {code}
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_8544_9646)">
              <path
                d="M11.5 5.5L5.5 11.5M5.5 5.5L11.5 11.5L5.5 5.5Z"
                stroke="#4F46E5"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_8544_9646">
                <rect
                  width="8"
                  height="8"
                  fill="white"
                  transform="translate(4.5 4.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.5 2.5C9.12123 2.5 8.77497 2.714 8.60557 3.05279L7.88197 4.5H4.5C3.94772 4.5 3.5 4.94772 3.5 5.5C3.5 6.05228 3.94772 6.5 4.5 6.5L4.5 16.5C4.5 17.6046 5.39543 18.5 6.5 18.5H14.5C15.6046 18.5 16.5 17.6046 16.5 16.5V6.5C17.0523 6.5 17.5 6.05228 17.5 5.5C17.5 4.94772 17.0523 4.5 16.5 4.5H13.118L12.3944 3.05279C12.225 2.714 11.8788 2.5 11.5 2.5H9.5ZM7.5 8.5C7.5 7.94772 7.94772 7.5 8.5 7.5C9.05228 7.5 9.5 7.94772 9.5 8.5V14.5C9.5 15.0523 9.05228 15.5 8.5 15.5C7.94772 15.5 7.5 15.0523 7.5 14.5V8.5ZM12.5 7.5C11.9477 7.5 11.5 7.94772 11.5 8.5V14.5C11.5 15.0523 11.9477 15.5 12.5 15.5C13.0523 15.5 13.5 15.0523 13.5 14.5V8.5C13.5 7.94772 13.0523 7.5 12.5 7.5Z"
            fill="#EF4444"
          />
        </svg>
      </div>
    </div>
  );
};
