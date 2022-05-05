import React, { useState, ReactNode } from "react";
type AccordionProps = {
  title: string;
  content: ReactNode;
  badge?: number;
  accordianType?: string;
  documentTitle?: ReactNode;
  defaultOpen?: boolean;
};
const Accordion = ({
  title,
  badge,
  content,
  accordianType,
  defaultOpen = false,
  documentTitle,
}: AccordionProps) => {
  const [isOpened, setOpened] = useState<boolean>(defaultOpen);

  const HandleOpening = () => {
    setOpened(!isOpened);
  };
  return (
    <div
      className={
        accordianType === "Document"
          ? "bg-gray-100 rounded-md "
          : "shadow-md bg-white rounded-lg"
      }
    >
      <div
        className={
          accordianType === "Document"
            ? "flex justify-between cursor-pointer items-center"
            : "p-4 flex justify-between cursor-pointer items-center"
        }
        onClick={HandleOpening}
      >
        <div className="flex items-center">
          <h4 className="font-semibold text-xl leading-8 text-gray-800">
            {accordianType !== "Document" ? title : documentTitle}
          </h4>
          {badge && (
            <span className="inline-flex ml-2.5 h-5 items-center px-3 py-0.5 rounded-xl text-sm font-medium bg-orange-500 text-white">
              {badge}
            </span>
          )}
        </div>
        {accordianType !== "Document" ? (
          isOpened ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="cursor-pointer"
            >
              <path
                d="M15.8333 7.5L9.99996 13.3333L4.16663 7.5"
                stroke="#6B7280"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={HandleOpening}
              className="cursor-pointer"
            >
              <path
                d="M12.5 15.8334L6.66667 10L12.5 4.16669"
                stroke="#6B7280"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )
        ) : (
          ""
        )}
      </div>
      {isOpened && (
        <div>
          <p className="p-4">{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;
