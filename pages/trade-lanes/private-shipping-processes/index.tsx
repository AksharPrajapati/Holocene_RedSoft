import { useEffect, useState } from "react";
import { PlusCircleIcon, UploadIcon, PencilIcon } from "@heroicons/react/solid";
import { PageWrapper } from "../../../components/common/PageWrapper";
import { ITab, Tabs } from "../../../components/common/Tabs";
import { GeneralGuidelinesTable } from "../../../components/trade-lanes/GeneralGuidelinesTable";
import { SpecialRulesTable } from "../../../components/trade-lanes/SpecialRulesTable";
import {
  getGeneralGuidelinesTableData,
  getSpecialRulesTableData,
} from "../../../MockData/Tradelanes";
import BreadCrumbs from "../../../components/common/Breadcrumbs";

import Button from "../../../components/common/Button";
import { Header } from "../../../components/common/Header";
import { PageNameHeader } from "../../../components/common/PageNameHeader";
import Router from "next/router";
import Modal from "../../../components/common/Modal";
import Select from "../../../components/common/Select";
import { useForm } from "react-hook-form";

const tableTabs: ITab[] = [
  { label: "General Guidelines", number: 41 },
  { label: "Special Rules", number: 8 },
];

const headerTabs: ITab[] = [
  { label: "Private Shipping Processes", number: 49 },
  { label: "Public Shipping Process", number: 723 },
  { label: "Policy Updates", number: 14 },
];

const breadCrumbs = [
  {
    path: "/dashboard",
    text: "Home",
  },
  {
    path: "/trade-lanes",
    text: "Trade Lanes",
  },
  {
    path: "/trade-lanes/private-shipping-processes",
    text: "Private Shipping Processes",
  },
];

export const PrivateShippingProcesses = () => {
  const [selectedTab, setSelectedTab] = useState(tableTabs[0]);
  const [selectedHeaderTab, setSelectedHeaderTab] = useState(headerTabs[0]);
  const generalGuidelinesTableData = getGeneralGuidelinesTableData();
  const specialRulesTableData = getSpecialRulesTableData();
  useEffect(() => {
    if (selectedHeaderTab.label === "Public Shipping Process") {
      Router.push("/trade-lanes/public-shipping-process");
    }
    if (selectedHeaderTab.label === "Private Shipping Process") {
      Router.push("/trade-lanes/private-shipping-processes");
    }
  }, [selectedHeaderTab]);

  const [showModal, setShowModal] = useState<boolean>(false);
  const {
    register: modalregister,
    handleSubmit: modalHandleSubmit,
    // modalreset,
    // formState: { modalerrors },
  } = useForm({
    defaultValues: {
      destination: "",
      rule: "",
      impact: "",
    },
  });
  const onModalSave = async (values: any) => {
    console.log({ values });
  };

  return (
    <PageWrapper>
      <div className="">
        <Header
          searchText="Find Shipments"
          tabs={
            <Tabs
              selected={selectedHeaderTab}
              setSelected={setSelectedHeaderTab}
              tabs={headerTabs}
            />
          }
        />
      </div>
      <div className="bg-gray-100 h-full flex flex-col">
        <BreadCrumbs breadCrumbs={breadCrumbs} className="mx-10 mt-6" />
        <PageNameHeader
          mockButton={
            <>
              <Button
                color="white"
                textcolor="gray-500 mr-4"
                onClick={() => setShowModal(true)}
              >
                <PencilIcon
                  className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                  aria-hidden="true"
                />
                Add Special Rules
              </Button>
              <Button
                color="white"
                textcolor="gray-500 mr-4"
                onClick={() =>
                  Router.push(
                    "/trade-lanes/private-shipping-processes/create-new-process"
                  )
                }
              >
                <PlusCircleIcon
                  className="-ml-1 mr-2 h-5 w-5 text-gray-500"
                  aria-hidden="true"
                />
                Create Process from File
              </Button>
              <Button color="indigo-600" textcolor="white">
                <UploadIcon
                  className="-ml-1 mr-2 h-5 w-5 text-white"
                  aria-hidden="true"
                />
                Create Shipping Process
              </Button>
            </>
          }
          pagename="Private Shipping Processes"
          className="bg-gray-100 mx-10"
        />
        <div className="mx-10 bg-white ring-1 ring-black ring-opacity-5 shadow rounded-lg">
          <div className="flex justify-between pl-2">
            <Tabs
              selected={selectedTab}
              setSelected={setSelectedTab}
              tabs={tableTabs}
              classNames="border-b border-gray-200 "
            />
            <div className="h-full flex flex-1 justify-end p-2">
              <div className="flex items-center">
                <label
                  htmlFor="sort"
                  className="block text-sm w-14 font-medium text-gray-700"
                >
                  Sort by:
                </label>
                <select
                  id="sort"
                  name="sort"
                  className="block w-44 pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
                >
                  <option>Recently Updated</option>
                </select>
              </div>
              <div className="relative ml-4">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  name="search"
                  id="search"
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-72 pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Search Trade Rules"
                />
              </div>
            </div>
          </div>
          {selectedTab.label === "General Guidelines" ? (
            <GeneralGuidelinesTable tableData={generalGuidelinesTableData} />
          ) : (
            <SpecialRulesTable tableData={specialRulesTableData} />
          )}
        </div>
      </div>
      <Modal
        title="Special Rules"
        showModal={showModal}
        setShowModal={setShowModal}
      >
        <form>
          <div className="flex pt-4 justify-between">
            <div>Destination</div>
            <Select
              register={modalregister("destination")}
              name="destination"
              containerStyles="w-80"
              options={[
                { value: "1", text: "1" },
                { value: "2", text: "2" },
              ]}
            />
          </div>

          <div className="flex justify-between mt-4">
            <div>Impact</div>
            <Select
              containerStyles="w-80"
              name="impact"
              register={modalregister("impact")}
              options={[
                { value: "1", text: "1" },
                { value: "2", text: "2" },
              ]}
            />
          </div>
          <div className="flex justify-between mt-4  ">
            <div>Rule</div>
            <div>
              <div className="mt-1  sm:mt-0 ">
                <div className="max-w-lg w-ful">
                  <textarea
                    id="rule"
                    rows={5}
                    {...modalregister("rule")}
                    className=" w-80 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-5">
            <div className="flex justify-between w-80">
              <Button
                onClick={() => modalHandleSubmit(onModalSave)()}
                className="w-full mr-2 justify-center"
              >
                Save Rule
              </Button>
              <Button
                onClick={() => setShowModal(false)}
                textcolor="gray-500"
                color="white"
                className="w-full ml-2 justify-center"
              >
                Cancel
              </Button>
            </div>
          </div>
        </form>
      </Modal>
    </PageWrapper>
  );
};

export default PrivateShippingProcesses;
