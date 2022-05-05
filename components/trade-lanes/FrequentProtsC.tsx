import React from "react";

type ITab = { city: string; days?: number };
interface Props {
  ports?: ITab[];
}
const FrequentProtsC: React.FC<Props> = ({ ports }) => {
  return (
    <div className="p-4 mt-2 bg-gray-100 rounded-md">
      <div className="text-sm leading-5 mb-1 font-medium text-gray-700">
        Frequent Ports & Congestion:
      </div>
      {ports ? (
        ports.map((item, id) => {
          return (
            <div
              key={id}
              className="flex justify-between w-full rounded-md shadow px-4 py-2 bg-white mt-2"
            >
              <div className="text-sm leading-5 font-normal text-gray-600">
                {item.city}{" "}
              </div>
              <div className="text-sm text-red-500 leading-5">
                {item.days} days
              </div>
            </div>
          );
        })
      ) : (
        <div className="text-sm mt-2 rounded-md shadow p-2 bg-white text-gray-500 bg-white w-full italic">
          Waiting Destination and Origin Countries
        </div>
      )}
    </div>
  );
};

export default FrequentProtsC;
