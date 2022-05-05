import React, { useState } from "react";
import { DotsVerticalIcon } from "@heroicons/react/solid";

export type WT = {
  memberImage: string;
  noOfContries: number;
  noOfShipments: number;
};
export type Ctype = {
  text?: string;
  // classname?:string;
  workLoadByMember?: Array<WT>;
};
const Card: React.FC<Ctype> = ({ text, workLoadByMember=[] }) => {
  const [count, setcount] = useState(5);
  return (
    <>
      <div className="">
        <div className={`p-5 bg-white h-96 shadow-sm  ${ count>5 &&text==="Workload by Member"? 'overflow-y-scroll':''} `}>
          <div className="flex justify-between mb-1">
            <div className="text-gray-900 font-medium">{text}</div>

            <DotsVerticalIcon className="h-5 w-5 text-gray-500" />
          </div>
          <div className="">
            {" "}
            {text === "Workload by Member" &&
              workLoadByMember?.slice(0, count).map((member, id) => {
                return (
                  <div key="id" className="mt-3 flex ">
                    <div className="flex ">
                      <span>{id + 1}</span>
                      <img
                        className="w-10 h-10 rounded-full ml-3"
                        src={`${member.memberImage}`}
                      />
                    </div>
                    <div className="ml-4">
                      <div className="text-base leading-6 text-gray-900 font-medium">
                        Andy Markus
                      </div>
                      <div className="flex">
                        <div className="text-sm text-gray-500 leading-5 font-normal">
                          {member.noOfContries} countries{" "}
                        </div>
                        <div className="text-sm text-gray-500 leading-5 font-normal ">
                          {" "}
                          <span className="font-extrabold  mr-2 ml-2 ">
                            .
                          </span>{" "}
                          <span>{member.noOfShipments} shipments </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          {count < workLoadByMember?.length && text === "Workload by Member" && (
            <div className="flex justify-center mt-7 ">
              <button
                className="text-indigo-600 "
                onClick={() => {
                  setcount(count + 5);
                }}
              >
                View All
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Card;
