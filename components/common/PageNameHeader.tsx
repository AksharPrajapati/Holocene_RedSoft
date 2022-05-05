import React from "react";
import { PlusCircleIcon, SearchIcon } from "@heroicons/react/solid";
import { BellIcon } from "@heroicons/react/outline";
import { ReactNode } from "react";

type IHeader = {
  mockButton?: ReactNode;
  pagename?: string;
  className?:string
};

export const PageNameHeader: React.FC<IHeader> = ({ mockButton, pagename,className  }) => {
  return (
    <div className={`py-8 ${className} `}>
    
      <div className="sm:flex sm:items-center sm:justify-between">
        <h3 className="text-3xl leading-6  text-gray-900 font-bold">
          {pagename}
        </h3>
        <div className="mt-3 flex sm:mt-0 sm:ml-4">{mockButton}</div>
      </div>
    </div>
  );
};

PageNameHeader.defaultProps = {
  mockButton: "",
  pagename: "",
};
