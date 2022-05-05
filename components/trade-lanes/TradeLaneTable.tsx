import { useState } from "react";
import { ITradeLanesTableData } from "../../MockData/Tradelanes";
import { Badge } from "../common/Badge";
import { Pagination } from "../common/Pagination";

type ITradeLanesTable = {
  tableData: ITradeLanesTableData[];
};

export const TradeLanesTable: React.FC<ITradeLanesTable> = ({ tableData }) => {
  const [selected, setSelected] = useState(1);
  const pages = Math.floor(tableData.length / 10);

  return (
    <div className="flex flex-col">
      <div className="px-4 lg:px-10">
        <div className="mt-5 flex flex-col">
          <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
              <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-300">
                  <thead className="bg-gray-50 uppercase text-semibold">
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-4 pr-3 text-left font-medium text-sm text-gray-900 sm:pl-6"
                      >
                        destination
                      </th>
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
                        hs.codes
                      </th>
                      <th
                        scope="col"
                        className="px-3 py-3.5 text-left font-medium text-sm text-gray-900"
                      >
                        origin
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
                        impact
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
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                          {e.destination}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {e.type}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {e.hscodes}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {e.origin}
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
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {e.summary}
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
      {pages > 0 && (
        <Pagination
          selected={selected}
          pages={pages}
          setSelected={setSelected}
        />
      )}
    </div>
  );
};
