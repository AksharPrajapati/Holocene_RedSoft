import { ISpecialRulesTableData } from "../../MockData/Tradelanes";

type ISpecialRulesTable = {
  tableData: ISpecialRulesTableData[];
};

export const SpecialRulesTable: React.FC<ISpecialRulesTable> = ({
  tableData,
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
                      className="py-3.5 pl-4 pr-3 text-left font-medium text-sm text-gray-900 sm:pl-6"
                    >
                      destination
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left font-medium text-sm text-gray-900"
                    >
                      comment
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left font-medium text-sm text-gray-900"
                    >
                      impact
                    </th>
                    <th
                      scope="col"
                      className="relative py-3.5 pl-3 pr-4 sm:pr-6 lg:pr-8"
                    >
                      <span className="sr-only">Delete</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {tableData.map((e: ISpecialRulesTableData, ind: number) => (
                    <tr
                      key={ind}
                      className={
                        "hover:bg-yellow-50 " +
                        (ind % 2 !== 0 ? "bg-gray-50" : "")
                      }
                    >
                      <td className="whitespace-nowrap py-4 pl-5 pr-3 text-sm font-medium text-gray-900">
                        {e.destination}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {e.comment}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {e.impact}
                      </td>
                      <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6 lg:pr-8">
                        <a className="text-indigo-600 hover:text-indigo-900">
                          Delete
                        </a>
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
  );
};
