import React from "react";
import { ITradeLanesTableData } from "../../MockData/Tradelanes";

type ITradePolicyData = {
  tableData: ITradeLanesTableData[];
};

import { Badge } from "../common/Badge";

const PolicyUpdatesTab: React.FC<ITradePolicyData> = ({ tableData }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-md">
      <div className="flex justify-between">
        <div className="text-xl leading-8 font-semibold text-gray-800">
          Policy Updates
        </div>
      </div>

      <div className="flex flex-col">
        <div className=" ">
          <div className="mt-5 flex flex-col">
            <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-300">
                    <thead className="bg-gray-50 uppercase text-semibold">
                      <tr>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left font-medium text-sm text-gray-900"
                        >
                          type
                        </th>

                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left font-medium text-sm text-gray-900"
                        >
                          inception date
                        </th>

                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left font-medium text-sm text-gray-900"
                        >
                          summary
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      {tableData.map((e: ITradeLanesTableData, ind: number) => (
                        <tr
                          key={ind}
                          className={
                            "hover:bg-yellow-50 " +
                            (ind % 2 !== 0 ? "bg-gray-50" : "")
                          }
                        >
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {e.type}
                          </td>

                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            {e.inceptionDate}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                            <Badge
                              variant={
                                e.impact === "High"
                                  ? "red"
                                  : e.impact === "Low"
                                  ? "green"
                                  : "yellow"
                              }
                            >
                              {e.impact}
                            </Badge>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolicyUpdatesTab;
