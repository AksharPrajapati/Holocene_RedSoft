import { PageWrapper } from "../../components/common/PageWrapper";
import { Pagination } from "../../components/common/Pagination";
import { TradeLanesTable } from "../../components/trade-lanes/TradeLaneTable";
import Router from "next/router";
import {
  getCardsData,
  getTradeLanesTableData,
} from "../../MockData/Tradelanes";
import { PlusCircleIcon, UploadIcon, PencilIcon } from "@heroicons/react/solid";

import { Header } from "../../components/common/Header";
import Button from "../../components/common/Button";
import { PageNameHeader } from "../../components/common/PageNameHeader";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "../../components/common/Modal";
import Select from "../../components/common/Select";

export const TradeLanes = () => {
  const mainTableData = getTradeLanesTableData();
  const cards = getCardsData();
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
      <Header
        searchText="Find Shipments"
        customeRulebtn={undefined}
        headerText="Trading lanes are processes for shipping between origins -> destinations"
      />
      <div className="bg-gray-50 h-full flex flex-col justify-between">
        <div>
          <PageNameHeader
            mockButton={
              <>
                <Button
                  color="white"
                  textcolor="gray-500 mr-4"
                  onClick={() => setShowModal(true)}
                >
                  <PencilIcon
                    className="-ml-1 mr-2  h-5 w-5 text-gray-500"
                    aria-hidden="true"
                  />
                  Add Special Rules
                </Button>
                <Button color="white" textcolor="gray-500 mr-4">
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
            pagename="Trade Lanes"
            className="bg-gray-50 mx-10"
          />
          <div className="flex px-7 mb-6 ">
            {cards.map((e, i) => (
              <dl key={i} className="w-1/4">
                <div className="px-4 py-5 mx-3 bg-white shadow rounded-lg overflow-hidden">
                  <dt className="text-sm font-medium text-gray-500 truncate">
                    {e.title}
                  </dt>
                  <dd className="flex justify-between mt-1 text-3xl font-semibold text-gray-900">
                    {e.number}
                    <a
                      onClick={() =>
                        i === 0 &&
                        Router.push("/trade-lanes/private-shipping-processes")
                      }
                      className="flex items-center text-blue-600 text-sm cursor-pointer hover:text-blue-700 transition duration-300 ease-in-out"
                    >
                      {e.buttonText}
                      {e.buttonText === "View" ? (
                        <svg
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7.5 4.16658L13.3333 9.99992L7.5 15.8333"
                            stroke="#4F46E5"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : null}
                    </a>
                  </dd>
                </div>
              </dl>
            ))}
          </div>
          <label className="text-2xl mx-10 leading-8 font-semibold">
            14 Policy Updates
          </label>
          <TradeLanesTable tableData={mainTableData} />
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

export default TradeLanes;
