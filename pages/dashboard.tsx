import { Header } from "../components/common/Header";
import { PageWrapper } from "../components/common/PageWrapper";
import Button from "../components/common/Button";
import { DotsVerticalIcon } from "@heroicons/react/solid";
import {
  ClipboardCheckIcon,
  PencilIcon,
  MailIcon,
  PlusCircleIcon,
} from "@heroicons/react/solid";
import { PageNameHeader } from "../components/common/PageNameHeader";
import Card from "../components/dashboard/Card";
import Image from "next/image";
import DraftPolicies from "../components/dashboard/DraftPoliciesCart";
import Select from "../components/common/Select";

export const Dashboard = () => {
  const CardData = [
    { cname: "Shipments Queue" },
    { cname: "Dispatched Orders" },
    { cname: "Workload by Member" },
  ];

  const draftPolicies = [
    {
      dateOfDraft: "April 11, 2022",
      nameOfDrafr:
        "China's widening COVID curbs threaten global supply chain paralysis",
      imageofDraft: "img1",
    },
    {
      dateOfDraft: "April 11, 2022",
      nameOfDrafr:
        "China's widening COVID curbs threaten global supply chain paralysis",
      imageofDraft: "img2",
    },
    {
      dateOfDraft: "April 11, 2022",
      nameOfDrafr:
        "China's widening COVID curbs threaten global supply chain paralysis",
      imageofDraft: "img3",
    },
    {
      dateOfDraft: "April 11, 2022",
      nameOfDrafr:
        "China's widening COVID curbs threaten global supply chain paralysis",
      imageofDraft: "img4",
    },
    {
      dateOfDraft: "April 11, 2022",
      nameOfDrafr:
        "China's widening COVID curbs threaten global supply chain paralysis",
      imageofDraft: "img5",
    },
    {
      dateOfDraft: "April 11, 2022",
      nameOfDrafr:
        "China's widening COVID curbs threaten global supply chain paralysis",
      imageofDraft: "img1",
    },
    {
      dateOfDraft: "April 11, 2022",
      nameOfDrafr:
        "China's widening COVID curbs threaten global supply chain paralysis",
      imageofDraft: "img1",
    },
    {
      dateOfDraft: "April 11, 2022",
      nameOfDrafr:
        "China's widening COVID curbs threaten global supply chain paralysis",
      imageofDraft: "img2",
    },
  ];

  const workLoadByMember = [
    {
      memberImage:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      noOfContries: 11,
      noOfShipments: 23,
      memberName: "Andy Markus",
    },
    {
      memberImage:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      noOfContries: 11,
      noOfShipments: 23,
      memberName: "Michael Owen",
    },
    {
      memberImage:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      noOfContries: 11,
      noOfShipments: 23,
      memberName: "Felsha L Zuschlag",
    },
    {
      memberImage:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      noOfContries: 11,
      noOfShipments: 23,
      memberName: "Eli B Schultz",
    },
    {
      memberImage:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      noOfContries: 11,
      noOfShipments: 23,
      memberName: "Jody Venturoni",
    },
    {
      memberImage:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      noOfContries: 11,
      noOfShipments: 23,
      memberName: "Andy Markus",
    },
    {
      memberImage:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      noOfContries: 11,
      noOfShipments: 23,
    },
  ];
  const Clicked = () => {
    alert("hello");
  };
  const tasklistClicked = () => {
    alert("tasklist");
  };

  return (
    <PageWrapper>
      <div className="h-full bg-gray-50">
        <Header
          customeRulebtn={
            <Button
              onClick={Clicked}
              color="white"
              textcolor="gray-500 ml-3 mr-4"
            >
              <PencilIcon className="h-5 w-5 mr-2 " />
              Add Special Rule
            </Button>
          }
          taskList={
            <Button
              onClick={tasklistClicked}
              color="white"
              textcolor="gray-500 ml-3 mr-4"
            >
              <ClipboardCheckIcon className="h-5 w-5 mr-3 p-0" />
              Task List
            </Button>
          }
          headerBtton="false"
          searchText="Search"
          headerText={
            <div>
              <Button
                onClick={tasklistClicked}
                color="white"
                textcolor="gray-500 ml-3 mr-4"
              >
                <MailIcon className="h-5 w-5 mr-3 p-0" />
                Shipping Mail (6)
              </Button>
            </div>
          }
          inputboxSize={"72"}
        />
        <div className="setting w-full h-full bg-gray-50  px-10">
          <PageNameHeader
            pagename="Welcome, Romain"
            mockButton={
              <>
                <div>
                  {/* <span className="mr-2">Period:</span> */}
                  {/*  */}
                  <Select name={"Period"} label={"Period:"} containerStyles="flex mr-3 " options={ 
                    [ { value: "30", text: " Last 30 days" },
                  { value: "60", text: "Last 60 days" },]}/>

                </div>
                <Button color="indigo-600" textcolor="white">
                  <PlusCircleIcon
                    className="-ml-1 mr-2 h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                  New Shipment
                </Button>
              </>
            }
            className="bg-gray-50"
          />
          <div>
            <div className=" mt-2 inline-block grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {CardData.map((data) => {
                return (
                  <>
                    <Card
                      text={data.cname}
                      workLoadByMember={workLoadByMember}
                    />
                  </>
                );
              })}
            </div>
          </div>
          <div className="flex">
            <div className=" flex flex-col mt-4  h-fit bg-white w-2/5">
              hellosdffffkmmmmmmmmmmmmmmmmmmmme
            </div>
            <div className="mt-4  flex flex-col w-3/5 justify-between">
              <div className="ml-2 bg-white w-full p-6">
                <div className="flex justify-between">
                  <div className="text-base leading-6 font-semibold text-gray-900">
                    Draft Policies
                  </div>
                  <DotsVerticalIcon className="h-5 w-5 text-gray-500" />
                </div>
                <div>
                  {
                    // draftPolicies.map((item,id)=>[
                    //   <DraftPolicies key={id}  dateOfDraft={item.dateOfDraft}
                    //    nameOfDrafr={item.nameOfDrafr}
                    //   imageofDraft={item.imageofDraft}
                    //   />
                    // ])
                  }
                  <div className="flex max-w-md h-52 border-gray-200 border-2 justify-between mt-4">
                    <div className=" ml-4 ">
                      <div className=" w-80 h-44 mt-4 border-gray-200  border-2 p-6 ">
                        <div>
                          <div className=" flex justify-between ">
                            <div className="flex ">
                              <svg
                                width="4"
                                height="24"
                                viewBox="0 0 4 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <rect
                                  width="4"
                                  height="24"
                                  rx="1"
                                  transform="matrix(-1 0 0 1 4 0)"
                                  fill="#3B82F6"
                                />
                              </svg>

                              <span className=" text-gray-900 text-base ml-2  font-medium">
                                Total Changes in 1 Month
                              </span>
                            </div>

                            <DotsVerticalIcon className="h-5 w-5 text-gray-500  " />
                          </div>
                          <div className="font-semibold text-4xl mt-2">34</div>
                          <div className="flex absolute  ">
                            <svg
                              width="14"
                              height="14"
                              viewBox="0 0 14 14"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              className=" mt-4"
                            >
                              <path
                                d="M7.00002 12.8334V1.16669M7.00002 1.16669L1.16669 7.00002M7.00002 1.16669L12.8334 7.00002"
                                stroke="#10B981"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                            <div className=" text-green-700 text-sm ml-2 mt-4 ">40%</div>
                            <div className="text-base text-gray-500 font-medium ml-2 w-20">vs last month</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <DotsVerticalIcon className="h-5 w-5 text-gray-500 mr-8 mt-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default Dashboard;
