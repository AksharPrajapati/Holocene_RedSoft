/* eslint-disable @next/next/no-html-link-for-pages */
/* eslint-disable @next/next/no-img-element */
import { ReactNode } from "react";
import Router from "next/router";

type IPageWrapper = {
  children: ReactNode;
};

export const PageWrapper: React.FC<IPageWrapper> = ({ children }) => {
  const { pathname } = Router;
  const mainpath = pathname.split("/")[1];

  return (
    <div className="min-h-screen flex">
      <div
        className="flex flex-col w-20 overflow-y-auto place-content-between"
        style={{ backgroundColor: "#0E0E8C" }}
      >
        <div className="w-full flex flex-col items-center text-center">
          <div className="flex-shrink-0 flex items-center">
            <img className="w-auto" src="/holoceneMenuLogo.jpeg" alt="logo" />
          </div>
          <div className="flex-1 mt-6 w-full space-y-1">
            <a
              onClick={() => Router.push("/dashboard")}
              className={`${
                mainpath === "dashboard" ? "bg-indigo-800" : ""
              } text-indigo-100 hover:bg-indigo-800 hover:text-white cursor-pointer group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium`}
            >
              <svg
                className="group-hover:text-white h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span className="mt-2">Dashboard</span>
            </a>

            <a
              className={`${
                mainpath === "shipment-queue" ? "bg-indigo-800" : ""
              } text-indigo-100 hover:bg-indigo-800 cursor-pointer hover:text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_8088_5265)">
                  <path
                    d="M8.65527 5.8905V2.97918C8.65527 2.38966 9.13343 1.9115 9.72296 1.9115H14.277C14.8665 1.9115 15.3446 2.38966 15.3446 2.97918V5.8905"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.31055 11.3571V8.02818C5.31055 6.84792 6.26686 5.8916 7.44713 5.8916H16.5539C17.7342 5.8916 18.6905 6.84792 18.6905 8.02818V11.3571"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 0V1.91142"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.6712 18.9217L19.263 15.7368L21.6841 12.1053L11.9999 9.6842L2.31567 12.1053L4.73673 15.7368L5.80078 18.751"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1.10522 18.6419C2.4368 18.0367 4.13154 18.0367 5.46312 18.6419C6.7947 19.2472 8.48944 19.2472 9.82101 18.6419C11.1526 18.0367 12.8473 18.0367 14.1789 18.6419C15.5105 19.2472 17.2052 19.2472 18.5368 18.6419C19.8684 18.0367 21.5631 18.0367 22.8947 18.6419"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M5.46313 22.5461C6.79471 23.1514 8.48945 23.1514 9.82103 22.5461C11.1526 21.9408 12.8473 21.9408 14.1789 22.5461C15.5105 23.1514 17.2052 23.1514 18.5368 22.5461"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_8088_5265">
                    <rect width="24" height="24" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <span className="mt-2">Shipment Queue</span>
            </a>

            <a
              onClick={() => Router.push("/trade-lanes")}
              className={`${
                mainpath === "trade-lanes" ? "bg-indigo-800" : ""
              } text-indigo-100 cursor-pointer hover:bg-indigo-800 hover:text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 12C21 16.9706 16.9706 21 12 21M21 12C21 7.02944 16.9706 3 12 3M21 12H3M12 21C7.02944 21 3 16.9706 3 12M12 21C13.6569 21 15 16.9706 15 12C15 7.02944 13.6569 3 12 3M12 21C10.3431 21 9 16.9706 9 12C9 7.02944 10.3431 3 12 3M3 12C3 7.02944 7.02944 3 12 3"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="mt-2">Trade Lanes</span>
            </a>

            <a
              className={`${
                mainpath === "route-analysis" ? "bg-indigo-800" : ""
              } text-indigo-100 cursor-pointer hover:bg-indigo-800 hover:text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium`}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.6569 16.6569C16.7202 17.5935 14.7616 19.5521 13.4138 20.8999C12.6327 21.681 11.3677 21.6814 10.5866 20.9003C9.26234 19.576 7.34159 17.6553 6.34315 16.6569C3.21895 13.5327 3.21895 8.46734 6.34315 5.34315C9.46734 2.21895 14.5327 2.21895 17.6569 5.34315C20.781 8.46734 20.781 13.5327 17.6569 16.6569Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="mt-2">Route Analysis</span>
            </a>

            <a
              onClick={() => Router.push("/settings")}
              className={`${
                mainpath === "settings" ? "bg-indigo-800" : ""
              } text-indigo-100 hover:bg-indigo-800 cursor-pointer hover:text-white group w-full p-3 rounded-md flex flex-col items-center text-xs font-medium`}
            >
              <svg
                className="group-hover:text-white h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="mt-2">Settings</span>
            </a>
          </div>
        </div>
        <div className="flex self-center p-4 mb-3">
          <a href="#" className="flex-shrink-0 group block">
            <div className="flex items-center">
              <img
                className="inline-block h-10 w-10 rounded-full"
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="prof-pic"
              />
            </div>
          </a>
        </div>
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">{children}</div>
    </div>
  );
};
