import { useState } from "react";
import { UploadIcon, PencilIcon } from "@heroicons/react/solid";
import { PageWrapper } from "../../../components/common/PageWrapper";
import BreadCrumbs from "../../../components/common/Breadcrumbs";
import { useForm } from "react-hook-form";
import { Header } from "../../../components/common/Header";
import { PageNameHeader } from "../../../components/common/PageNameHeader";
import Button from "../../../components/common/Button";
import ProcessForm from "../../../components/trade-lanes/ProcessForm";
import HeaderTabs from "../../../components/trade-lanes/HeaderTabs";
import Select from "../../../components/common/Select";
import Modal from "../../../components/common/Modal";

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
  {
    path: "/trade-lanes/private-shipping-processes/create-new-process",
    text: "New Progress",
  },
];

export const CreateNewProcess = () => {
  const [destinationSelected, setDestinationSelected] = useState(false);

  const { register, getValues, handleSubmit, reset, formState } = useForm({
    defaultValues: {
      aliasName: "",
      destination: "",
      origin: "",
      incoterm: "",
      hsCodes: "",
    },
  });
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
      <div className="h-full">
        <Header searchText="Find Shipments" tabs={<HeaderTabs />} />
        <div className="bg-gray-100 h-full flex px-10 flex-col ">
          <BreadCrumbs breadCrumbs={breadCrumbs} className="mt-6" />
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
                  color="indigo-600"
                  textcolor="white"
                  disabled={!destinationSelected}
                >
                  <UploadIcon
                    className="-ml-1 mr-2 h-5 w-5 text-white"
                    aria-hidden="true"
                  />
                  Save Process
                </Button>
              </>
            }
            pagename="Create New Process"
            className="bg-gray-100 "
          />

          <ProcessForm
            setDestinationSelected={setDestinationSelected}
            destinationSelected={destinationSelected}
            formDetails={{
              register,
              getValues,
              handleSubmit,
              reset,
              formState,
            }}
          />
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

export default CreateNewProcess;
