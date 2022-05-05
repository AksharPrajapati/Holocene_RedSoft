import React from "react";
const stepsDetails = [
  { stepname: "Step Title", desc: "Description" },
  { stepname: "Step Title", desc: "Description" },
  { stepname: "Step Title", desc: "Description" },
  { stepname: "Step Title", desc: "Description" },
  { stepname: "Step Title", desc: "Description" },
  { stepname: "Step Title", desc: "Description" },
];
const StepsTab = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <div className="flex justify-between">
        <div className="text-xl leading-8 font-semibold text-gray-800">
          Steps
        </div>
        <div className="text-sm leading-5 font-normal text-gray-500">
          You can add, remove and reorder steps
        </div>
      </div>
      <div>
        {stepsDetails.map((step, id) => {
          return (
            <div key={id} className="bg-white p-4 flex shadow rounded-md items-center mt-2">
              <div className="w-7 h-7 rounded-full border  border-gray-200 text-center">
                {id + 1}
              </div>
              <div className="ml-2">
                <div className="text-sm leading-5 font-semibold text-gray-600">
                  {step.stepname}
                </div>
                <div className="text-sm leading-5 font-normal text-gray-400">
                  {" "}
                  Description
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepsTab;
