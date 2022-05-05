import React from "react";

interface Props {
  days?: number;
}
const AverageCTime: React.FC<Props> = ({ days = 0 }) => {
  return (
    <div className="mt-4 p-4 bg-gray-100 rounded-md">
      <div className="text-sm leading-5 font-medium text-gray-700">
        Average Clearance Time at destination (days):
      </div>
      <input
        type="text"
        value={days}
        className="w-14 h-9 border border-gray-300 rounded-md mt-1"
      />
      <div className="text-sm leading-5 text-gray-500 font-normal mt-2">
        {days === 0 ? "* Estimated" : `* Updated ${days} days ago by John S.`}
      </div>
    </div>
  );
};

export default AverageCTime;
