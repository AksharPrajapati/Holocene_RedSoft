import React, { useState, useEffect } from "react";
import { Header } from "../components/common/Header";
import { PlusCircleIcon } from "@heroicons/react/solid";
import { PageWrapper } from "../components/common/PageWrapper";
import { PageNameHeader } from "../components/common/PageNameHeader";
import Button from "../components/common/Button";

import { useForm } from "react-hook-form";
import Modal from "../components/common/Modal";
import Select from "../components/common/Select";
import axios from "axios";
export type User = {
  triggerEmail: string;
  primaryContact: string;
  companyAddress: string;
  orderStartPoint: string;
  approval: boolean;
  selectedCustomerTypeId: number;
  availableCustomerTypes: { id: number; type: string }[];
};
const Setting = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [userData, setUserData] = useState<User>();

  useEffect(() => {
    axios
      .get(`${process.env.Base_URL}/api/customer`)
      .then((responce) => {
        const { data } = responce;
        setUserData(data);
      })
      .catch((err) => {
        console.log("error" + err);
      });
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      triggerEmail: "",
      primaryContact: "",
      companyAddress: "",
      orderStartPoint: "",
      approval: false,
      selectedCustomerTypeId: 1,
      availableCustomerTypes: [{}],
    },
  });
  useEffect(() => {
    if (userData) {
      reset({
        triggerEmail: userData.triggerEmail,
        primaryContact: userData.primaryContact,
        companyAddress: userData.companyAddress,
        orderStartPoint: userData.orderStartPoint,
        approval: userData.approval,
        selectedCustomerTypeId: userData.selectedCustomerTypeId,
        availableCustomerTypes: userData.availableCustomerTypes,
      });
    }
  }, [userData, reset]);

  const onSave = async (values: any) => {
    // console.log(values);
    // alert(process.env.Base_URL)
    try {
      const resp = await axios.patch(
        `${process.env.Base_URL}/api/customer`,
        values
      );
      alert(`Setting updated sucessfully`);
    } catch (e) {
      console.log("Error occure" + e);
    }
  };

  const Clicked = () => {
    setShowModal(true);
  };

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
    setShowModal(false);
    // try {
    //   const resp = await axios.post(
    //     `${process.env.Base_URL}/api/rules`,
    //     values
    //   );
    //   alert(`rule added sucessfully`);
    //   reset();
    // } catch (e) {
    //   console.log("Error occure" + e);
    // }
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
              Add Special Rule
            </Button>
          }
          searchText="Search"
          headerText={undefined}
          inputboxSize={"72"}
        />
        <div className="setting w-full h-full bg-gray-50 px-10">
          <PageNameHeader
            pagename="Company Settings"
            mockButton={
              <>
                <Button color="indigo-600" textcolor="white">
                  <PlusCircleIcon
                    className="-ml-1 mr-2 h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                  Invite People
                </Button>
              </>
            }
            className="bg-gray-50"
          />
          <hr />
          <div>
            <form>
              <div>
                <div className="">
                  <div className="accountsection">
                    <div className="account mt-6 text-lg font-medium text-gray-900">
                      Account information
                    </div>

                    <div className="mt-4  space-y-1 sm:space-y-1">
                      <div className=" sm:grid sm:grid-cols-3 border-none sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 ">
                        <label
                          htmlFor="username"
                          className="block text-sm font-medium text-gray-700 sm:mt-px "
                        >
                          Account Usage Type
                        </label>

                        <div className="mt-4 sm:mt-0 sm:col-span-2">
                          <div className="flex">
                            {userData?.availableCustomerTypes.map(
                              (data: any) => (
                                <div
                                  key={data.id}
                                  className="flex items-center h-5"
                                >
                                  <input
                                    id={data.id}
                                    type="checkbox"
                                    name={data.id}
                                    checked={
                                      data.id ===
                                      userData.selectedCustomerTypeId
                                    }
                                    disabled
                                    className="focus:ring-indigo-500 accent-indigo-500 opacity-70 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                  />
                                  <label
                                    htmlFor={data.type}
                                    className="ml-3 text-gray-500 font-medium mr-4 text-sm capitalize"
                                  >
                                    {data.type}
                                  </label>
                                </div>
                              )
                            )}
                          </div>

                          <div className="mt-2 text-sm leading-5 text-gray-500 font-normal;">
                            Please contact Holocene Support to change this.
                          </div>
                        </div>
                      </div>
                      <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-3">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 sm:mt-px"
                        >
                          Incomming Order Email
                        </label>
                        <div className=" sm:mt-0 sm:col-span-2">
                          <div className="max-w-lg w-ful">
                            <input
                              type="email"
                              placeholder="email@example.com"
                              {...register("triggerEmail", {
                                required: true,
                                pattern:
                                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                              })}
                              className="w-9/12 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                            />
                          </div>
                          {errors?.triggerEmail?.type && (
                            <div className="mt-2 text-xs text-red-600">
                              Invalid email format
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-3">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700 sm:mt-px "
                        >
                          Primary Contact
                        </label>
                        <div className="mt-1  sm:mt-0 sm:col-span-2">
                          <div className="max-w-lg w-ful">
                            <input
                              type="text"
                              placeholder="Required"
                              disabled
                              {...register("primaryContact")}
                              className="w-9/12 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md opacity-60"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-3">
                        <label
                          htmlFor="primaryContact"
                          className="block text-sm font-medium text-gray-700 sm:mt-px "
                        >
                          Company Address
                        </label>
                        <div className="mt-1  sm:mt-0 sm:col-span-2">
                          <div className="max-w-lg w-ful">
                            <textarea
                              id="address"
                              disabled
                              rows={3}
                              {...register("companyAddress")}
                              className="w-9/12 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md opacity-60"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-5" />
                <div className="orderprefernce">
                  <div className="account text-lg leading-6 font-medium">
                    SSO & Orders Preferences
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start   sm:pt-4">
                    <label
                      htmlFor="SSO"
                      className="block text-sm font-medium text-gray-700 sm:mt-px "
                    >
                      Enable SSO
                    </label>
                    <div className="mt-1  sm:mt-0 sm:col-span-2">
                      <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Connect Service
                      </button>
                    </div>
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start   sm:pt-4">
                    <label
                      htmlFor="primaryContact"
                      className="block text-sm font-medium text-gray-700 sm:mt-px "
                    >
                      Order Start Point
                    </label>
                    <div className="mt-1  sm:mt-0 sm:col-span-2">
                      <div className="max-w-lg w-ful">
                        <select
                          className="w-9/12 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md opacity-60"
                          id="orderStartPoint"
                          {...register("orderStartPoint")}
                          disabled
                        >
                          <option value="SAP">SAP</option>
                          <option value="CommonEmail">Common Email</option>
                          <option value="CustomDocument">
                            Custom Document (Via Email)
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start   sm:pt-16">
                    <label
                      htmlFor="order"
                      className="block text-sm font-medium text-gray-700 sm:mt-px "
                    >
                      Do you send or receive draft documents for approval?
                    </label>
                    <div className="mt-1  sm:mt-0 sm:col-span-2">
                      <div className="flex items-center h-5">
                        <input
                          id="approval"
                          aria-describedby="approval-description"
                          {...register("approval")}
                          type="checkbox"
                          disabled
                          className="focus:ring-indigo-500 accent-indigo-500 opacity-70 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                        <div className="ml-3 text-sm">
                          <label
                            htmlFor="approval"
                            className="font-medium text-gray-500"
                          >
                            Yes
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="my-5" />
              </div>
              <div className="flex flex-1 justify-end mb-6">
                <div className="pl-1 flex w-2/3 justify-between">
                  <button
                    onClick={() => handleSubmit(onSave)()}
                    type="button"
                    className="px-5 inline-flex justify-center py-2  border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    onClick={() => reset()}
                    className="bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Discard Changes
                  </button>
                </div>
              </div>
            </form>
          </div>
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

export default Setting;
