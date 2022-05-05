import Router from "next/router";
import { IGeneralGuidelinesTableData } from "../../MockData/Tradelanes";
import ReactTooltip from "react-tooltip";

type IGeneralGuidelinesTable = {
  tableData: IGeneralGuidelinesTableData[];
  varient?: "pubic-shipping" | "default";
};

export const GeneralGuidelinesTable: React.FC<IGeneralGuidelinesTable> = ({
  tableData,
  varient = "default",
}) => {
  return (
    <div className="">
      <div className="flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full divide-y divide-gray-300">
                <thead className="bg-gray-50 uppercase text-semibold">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-16 pr-3 text-left font-medium text-sm text-gray-900"
                    >
                      destination
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
                      hs.codes
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left font-medium text-sm text-gray-900"
                    >
                      INCOTERM
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left font-medium text-sm text-gray-900"
                    >
                      NO Docs
                    </th>
                    {varient === "pubic-shipping" ? (
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-6 lg:pr-8"
                        style={{ width: "128px" }}
                      >
                        <span className="sr-only">View</span>
                      </th>
                    ) : (
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-4 sm:pr-6 lg:pr-8"
                        style={{ width: "128px" }}
                      >
                        <span className="sr-only"> Edit</span>
                      </th>
                    )}
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {tableData.map(
                    (e: IGeneralGuidelinesTableData, ind: number) => (
                      <tr
                        key={ind}
                        className={
                          "hover:bg-yellow-50 " +
                          (ind % 2 !== 0 ? "bg-gray-50" : "")
                        }
                      >
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900">
                          <div className="flex items-center">
                            {varient !== "pubic-shipping" && ind % 2 === 0 ? (
                              <>
                                <svg
                                  width="20"
                                  height="20"
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  data-tip
                                  data-for={e.id}
                                  className="outline-none cursor-pointer"
                                  onClick={() =>
                                    Router.push(
                                      "/trade-lanes/private-shipping-processes/edit-process"
                                    )
                                  }
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M3 6C3 4.34315 4.34315 3 6 3H16C16.3788 3 16.725 3.214 16.8944 3.55279C17.0638 3.89157 17.0273 4.29698 16.8 4.6L14.25 8L16.8 11.4C17.0273 11.703 17.0638 12.1084 16.8944 12.4472C16.725 12.786 16.3788 13 16 13H6C5.44772 13 5 13.4477 5 14V17C5 17.5523 4.55228 18 4 18C3.44772 18 3 17.5523 3 17V6Z"
                                    fill="#9CA3AF"
                                  />
                                </svg>
                                <ReactTooltip
                                  id={e.id}
                                  place="top"
                                  effect="solid"
                                >
                                  New {e.policyChanges} Policy Changes
                                </ReactTooltip>
                              </>
                            ) : (
                              <div style={{ width: "20px", height: "20px" }} />
                            )}
                            <span className="ml-7">{e.destination}</span>
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {e.origin}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {e.hscodes}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {e.incoterm}
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                          {e.nodocs}
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 lg:pr-8">
                          {varient === "pubic-shipping" ? (
                            <a
                              className="text-indigo-600 cursor-pointer hover:text-indigo-900"
                              onClick={() => {
                                Router.push(
                                  "/trade-lanes/public-shipping-process/view-process"
                                );
                              }}
                            >
                              View
                            </a>
                          ) : (
                            <a
                              className="text-indigo-600 cursor-pointer hover:text-indigo-900"
                              onClick={() =>
                                Router.push(
                                  "/trade-lanes/private-shipping-processes/edit-process"
                                )
                              }
                            >
                              Edit
                            </a>
                          )}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
