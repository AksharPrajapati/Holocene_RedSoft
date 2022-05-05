import React from "react";
import { SearchIcon } from "@heroicons/react/solid";
import { BellIcon } from "@heroicons/react/outline";
import { ReactNode } from "react";

type IHeader = {
  customeRulebtn?: ReactNode;
  taskList?: ReactNode;
  headerText?: ReactNode;
  searchText?: string;
  inputboxSize?: string;
  tabs?: ReactNode;
  headerBtton?:string
};

export const Header: React.FC<IHeader> = ({
  customeRulebtn,
  searchText,
  headerText,
  taskList,
  headerBtton,
  tabs,
  inputboxSize = "72",
}) => {
  return (
    <>
      <div className="pl-6 bg-white flex justify-between">
        {headerText && (
          <div className="flex items-center">
            <h3 className="text-base ml-4 leading-6 font-normal text-gray-400">
              {headerText}
            </h3>
          </div>
        )}
        {tabs && <div className="flex ml-4 items-end"> {tabs} </div>}
        {!tabs && !headerText && <div />}
        <div className="pr-6 py-3 flex sm:mt-0 sm:ml-4">
     {   headerBtton!=="false" ? <div className="mr-2 sm:flex sm:items-center sm:justify-between">
            <div className="mt-3 sm:mt-0 sm:ml-4   ">
              <div className="flex rounded-md shadow-sm ">
                <div className="relative flex-grow focus-within:z-10 ">
                  <div className="absolute inset-y-0 left-0 pl-3  flex items-center pointer-events-none">
                    <SearchIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>

                  <input
                    type="text"
                    name="desktop-search-candidate"
                    id="desktop-search-candidate"
                    className={`p-1.5 py-2 focus:ring-indigo-500 border w-${inputboxSize} border-gray-300 focus:border-indigo-500 rounded-md pl-10 sm:block sm:text-sm `}
                    placeholder={searchText}
                  />
                </div>
              </div>
            </div>
          </div> :<div> {taskList}</div>}
          <div className="">{customeRulebtn}</div>
          <div className="self-center">
            <button
              type="button"
              className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};
