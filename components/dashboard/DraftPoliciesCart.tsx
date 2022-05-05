import React from "react";
import Image from "next/image";


export type Ctype = {
  dateOfDraft?: string;
  nameOfDrafr?: string;
  imageofDraft?: string;
};
const DraftPolicies: React.FC<Ctype> = ({ dateOfDraft,nameOfDrafr,imageofDraft }) => {
  return (
    <>
      <div className="flex mt-2">
               <Image src={`/${imageofDraft}.svg`} width={85} height={65} alt="image"/>
               <div className="ml-4">
                  <div className="text-sm text-gray-500 leading-5 font-normal">{dateOfDraft}</div>
                  <div className="text-sm leading-5 text-gray-900 font-medium mt-1">{nameOfDrafr}</div>
               </div>
             
              </div>
    </>
  );
};

export default DraftPolicies;
