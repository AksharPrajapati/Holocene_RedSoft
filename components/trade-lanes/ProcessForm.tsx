import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import Input from "../common/Input";
import Select from "../common/Select";
import Accordion from "../common/Accordion";
import Button from "../common/Button";
import { Tabs } from "../common/Tabs";
import DocumentsTab from "./DocumentsTab";
import PolicyUpdatesTab from "./PolicyUpdatesTab";
import CommentsTab from "./CommentsTab";
import AverageCTime from "./AverageCTime";
import FrequentProtsC from "./FrequentProtsC";
import Modal from "../common/Modal";
import { HSCodeItem } from "./HSCodeItem";
import HScodeRecommendations from "./HScodeRecommendations";
import { getTradeLanesTableData } from "../../MockData/Tradelanes";
import StepsTab from "./StepsTab";

const options = [
  { value: "Afghanistan", text: "Afghanistan" },
  { value: "Tanzania", text: "Tanzania" },
  { value: "India", text: "India" },
  { value: "Chine", text: "China" },
  { value: "Japan", text: "Japan" },
];

const comments = [
  { userName: "Jared Laprise", cdate: "4/23/2022" },
  { userName: "James Tippets", cdate: "4/23/2022" },
  { userName: "Melissa Aldridge", cdate: "4/24/2022" },
  { userName: "Melissa Aldridge", cdate: "4/27/2022" },
];
const holoceneRecommendationsTab = [
  { label: "Steps" },
  { label: "Documents" },
  { label: "Policy Updates" },
  { label: "Comments", number: comments.length },
];

const ports = [
  { city: "Dar Es Salaam, Tanzania, TZDAR", days: 33 },
  { city: "Zanzibar, Tanzania, TZMKO", days: 27 },
  { city: "Tanga, Tanzania, TZTGT", days: 7 },
];

const filledDocumentsData = [
  {
    id: 1,
    label: "Packing List",
    type: "checkbox",
    checked: true,
    values: [{ label: "Certified", checked: true }, { label: "Legalised", checked: true }],
  },
  {
    id: 2,
    label: "Commercial Invoice",
    type: "checkbox",
    checked: true,
    values: [{ label: "Certified", checked: true }, { label: "Legalised", checked: true }],
  },
  {
    id: 3,
    label: "Export Declaration",
    type: "select",
    checked: true,
    values: [{ label: "Certified", checked: true }, { label: "Legalised", checked: true }],
  },
  {
    id: 4,
    label: "Letter of Credit",
    checked: true,
  },
  {
    id: 5,
    label: "Import Declaration",
    type: "select",
    values: [{ label: "Certified" }, { label: "Legalised" }],
  },
  {
    id: 6,
    label: "Bill Of Lading",
    type: "select",
    separater: true,
    values: [{ label: "Certified" }, { label: "Legalised" }],
  },
  {
    id: 7,
    label: "Airway Bill",
    type: "select",
    values: [{ label: "Certified" }, { label: "Legalised" }],
  },
  {
    id: 8,
    label: "Certificate of Origin",
    type: "select",
    separater: true,
    checked: true,
    values: [{ label: "Certified", checked: true }, { label: "Legalised", checked: true }],
  },
  {
    id: 9,
    label: "Cerificate of Prefeerential Origin",
    type: "select",
    values: [{ label: "Certified" }, { label: "Legalised" }],
  },
  {
    id: 10,
    label: "Conformity Certificate",
    type: "select",
    separater: true,
    values: [{ label: "Certified" }, { label: "Legalised" }],
  },
  {
    id: 11,
    label: "Health Certificate",
    type: "select",
    values: [{ label: "Certified" }, { label: "Legalised" }],
  },
  {
    id: 12,
    label: "Other Certifications",
    type: "input",
    separater: true,
    values: [{ label: "Certified" }, { label: "Legalised" }],
  },
];

const emptyDocumentsData = [
  {
    id: 1,
    label: "Packing List",
    type: "checkbox",
    values: [{ label: "Certified" }, { label: "Legalised" }],
  },
  {
    id: 2,
    label: "Commercial Invoice",
    type: "checkbox",
    values: [{ label: "Certified" }, { label: "Legalised" }],
  },
  {
    id: 3,
    label: "Export Declaration",
    type: "select",
    values: [{ label: "Certified" }, { label: "Legalised" }],
  },
  {
    id: 4,
    label: "Letter of Credit",
    type: "select",
    values: [{ label: "Certified" }, { label: "Legalised" }],
  },
  {
    id: 5,
    label: "Import Declaration",
    type: "select",
    values: [{ label: "Certified" }, { label: "Legalised" }],
  },
  {
    id: 6,
    label: "Bill Of Lading",
    type: "select",
    separater: true,
    values: [{ label: "Certified" }, { label: "Legalised" }],
  },
  {
    id: 7,
    label: "Airway Bill",
    type: "select",
    values: [{ label: "Certified" }, { label: "Legalised" }],
  },
  {
    id: 8,
    label: "Certificate of Origin",
    type: "select",
    separater: true,
    values: [{ label: "Certified" }, { label: "Legalised" }],
  },
  {
    id: 9,
    label: "Cerificate of Prefeerential Origin",
    type: "select",
    values: [{ label: "Certified" }, { label: "Legalised" }],
  },
  {
    id: 10,
    label: "Conformity Certificate",
    type: "select",
    separater: true,
    values: [{ label: "Certified" }, { label: "Legalised" }],
  },
  {
    id: 11,
    label: "Health Certificate",
    type: "select",
    values: [{ label: "Certified" }, { label: "Legalised" }],
  },
  {
    id: 12,
    label: "Other Certifications",
    type: "input",
    separater: true,
    values: [{ label: "Certified" }, { label: "Legalised" }],
  },
];

export type IProcessForm = {
  setDestinationSelected?: Dispatch<SetStateAction<boolean>>;
  destinationSelected?: boolean;
  disabled?: boolean;
  hideHoloceneRecc?: boolean;
  formDetails: any;
  policySelected?: boolean;
};

export const ProcessForm: React.FC<IProcessForm> = ({
  setDestinationSelected,
  destinationSelected,
  disabled = false,
  hideHoloceneRecc = false,
  formDetails,
  policySelected = false,
}) => {
  const mainTableData = getTradeLanesTableData();
  const [selectedTab, setSelectedTab] = useState(
    policySelected ? { label: "Policy Updates" } : { label: "" }
  );
  const [showModal, setShowModal] = useState<boolean>(false);
  const [hscodes, setHscodes] = useState<any[]>([]);

  const { register, getValues, handleSubmit, reset, formState } = formDetails;

  const documentsData = destinationSelected
    ? filledDocumentsData
    : emptyDocumentsData;

  return (
    <>
      <div className="h-full">
        <div className="flex">
          <div className="flex flex-col w-1/3 mr-3 h-fit rounded-md shadow-lg bg-white p-4">
            <label className="text-xl leading-8 font-semibold">
              Shipment Details
            </label>
            <Input
              label="Trade Rule Alias Name"
              name="aliasName"
              register={register("aliasName")}
              placeholder="Optional"
              disabled={disabled}
            />
            <Select
              label="Destination"
              name="destination"
              register={register("destination")}
              options={options}
              onMouseUp={() => {
                setDestinationSelected &&
                  setDestinationSelected(
                    !!getValues("destination") && !!getValues("origin")
                  );
              }}
              disabled={disabled}
            />
            <Select
              label="Origin"
              name="origin"
              register={register("origin")}
              options={options}
              disabled={disabled}
              onMouseUp={() => {
                setDestinationSelected &&
                  setDestinationSelected(
                    !!getValues("destination") && !!getValues("origin")
                  );
              }}
            />
            <div className="relative flex items-start mt-2">
              <div className="flex items-center h-5">
                <input
                  id="differentOrigin"
                  name="differentOrigin"
                  type="checkbox"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  disabled={disabled}
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="differentOrigin"
                  className="font-medium text-gray-700"
                >
                  Products may be of different origin
                </label>
              </div>
            </div>
            <Select
              label="Incoterm"
              name="incoterm"
              register={register("incoterm")}
              options={[
                { value: "1", text: "1" },
                { value: "2", text: "2" },
              ]}
              disabledMessage={
                !destinationSelected ? "Choose destination first" : undefined
              }
              disabled={!destinationSelected}
            />
            <Select
              label="Product HS Code(s)"
              name="hsCodes"
              register={register("hsCodes")}
              options={[
                { value: "1", text: "1" },
                { value: "2", text: "2" },
              ]}
              disabledMessage={
                !destinationSelected ? "Choose destination first" : undefined
              }
              disabled={!destinationSelected}
            />
            <label
              htmlFor="findhscode"
              className={
                "text-sm leading-5 font-medium mt-2 text-indigo-600 " +
                (destinationSelected ? "cursor-pointer" : "opacity-60")
              }
              onClick={() => destinationSelected && setShowModal(true)}
            >
              Find HS Codes
            </label>
            <div className="relative flex items-start my-2">
              <div className="flex items-center h-5">
                <input
                  id="sameprocess"
                  name="sameprocess"
                  type="checkbox"
                  className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  disabled={disabled}
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="sameprocess"
                  className="font-medium text-gray-700"
                >
                  All HS Codes have same process
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-2/3 ml-3">
            {!hideHoloceneRecc && (
              <Accordion
                title="Holocene Recommendations"
                defaultOpen={policySelected}
                content={
                  <div>
                    <HScodeRecommendations notAllowed={!destinationSelected} />
                    <Tabs
                      selected={selectedTab}
                      setSelected={setSelectedTab}
                      tabs={holoceneRecommendationsTab}
                      classNameForTab="border-none"
                      variant="button"
                    />

                    {selectedTab.label === "Steps" ? (
                      <StepsTab />
                    ) : selectedTab.label === "Documents" ? (
                      <DocumentsTab />
                    ) : selectedTab.label === "Policy Updates" ? (
                      <PolicyUpdatesTab tableData={mainTableData.slice(5)} />
                    ) : selectedTab.label === "Comments" ? (
                      <CommentsTab commData={comments} />
                    ) : (
                      <>
                        <AverageCTime days={destinationSelected ? 10 : 0} />
                        <FrequentProtsC
                          ports={destinationSelected ? ports : undefined}
                        />
                      </>
                    )}
                  </div>
                }
              />
            )}
            <div
              className={
                "bg-white rounded-lg p-4 " + (hideHoloceneRecc ? "" : "mt-2")
              }
            >
              <div className="text-xl leading-8 text-gray-800 font-semibold">
                Documents
              </div>
              <div className="text-gray-500 italic leading-5 text-sm mb-4">
                Please select which documents are required
              </div>
              <form>
                {documentsData.map((Item: any) => {
                  return (
                    <div
                      key={Item.id}
                      className={
                        "bg-gray-100 rounded-md " +
                        (Item?.separater ? "mt-6" : "mt-2")
                      }
                    >
                      <Accordion
                        title={Item.label}
                        content={
                          <div className="flex">
                            {Item.type === "checkbox" ? (
                              Item.values.map((docItem: any, id: any) => {
                                return (
                                  <div key={id}>
                                    <input
                                      type="checkbox"
                                      className="focus:ring-indigo-500 accent-indigo-500 opacity-70 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                                      disabled={disabled}
                                      checked={docItem.checked}
                                    />
                                    <label
                                      htmlFor={docItem.label}
                                      className="ml-3 text-gray-500  text-sm leading-5  font-normal"
                                    >
                                      {docItem.label}
                                    </label>
                                    {id === 0 && (
                                      <span className="mx-10 text-gray-500 text-sm leading-5 font-normal">
                                        and/or
                                      </span>
                                    )}
                                  </div>
                                );
                              })
                            ) : Item.type === "select" ? (
                              <div className="w-80 -mt-2">
                                <Select
                                  name={Item.label}
                                  options={[
                                    { value: "Certificate 1", text: "Certificate 1" },
                                    { value: "Certificate 2", text: "Certificate 2" },
                                  ]}
                                  containerStyles=""
                                  disabled={disabled}
                                />
                              </div>
                            ) : (
                              <div>
                                <input
                                  type="text"
                                  placeholder=" "
                                  disabled={disabled}
                                  className=" w-80   block  px-3  placeholder-gray-400 transition duration-150 ease-in-out border border-gray-300 rounded-md appearance-none focus:outline-none focus:shadow-outline-blue focus:border-blue-300 sm:text-sm sm:leading-5"
                                />
                              </div>
                            )}
                          </div>
                        }
                        accordianType="Document"
                        documentTitle={
                          <div className="mx-2 rounded-md mb-1">
                            <input
                              type="checkbox"
                              className="focus:ring-indigo-500 accent-indigo-500 opacity-70 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                              onClick={(e) => e.stopPropagation()}
                              disabled={disabled}
                              checked={Item.checked}
                            />
                            <label
                              htmlFor={Item.label}
                              className="ml-3 text-gray-500 font-medium mr-4 text-sm"
                            >
                              {Item.label}
                            </label>
                          </div>
                        }
                      />
                    </div>
                  );
                })}
              </form>
            </div>
            <div className="p-4 mt-4 bg-white rounded-md sm:grid">
              <div className="text-xl leading-8 text-gray-800 grid font-semibold">
                Key Contacts
              </div>
              <form>
                <div className=" mt-4 sm:col-span-2">
                  <textarea
                    id="address"
                    rows={3}
                    className="w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                    disabled={disabled}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Modal
        title="Find HQ Code(s)"
        showModal={showModal}
        setShowModal={setShowModal}
      >
        <form>
          <label className="text-sm text-gray-500 leading-5 font-normal">
            Enter products descriptions to search for HS codes at destination
          </label>
          <div className="flex flex-col mt-5">
            <div className="font-medium">Destination: Tanzania</div>
            <div className="flex w-full mt-1">
              <textarea
                id="productDescription"
                rows={5}
                // {...modalregister("productDescription")}
                className="w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
              />
            </div>
          </div>
          {!!hscodes.length && (
            <div className="flex flex-col my-4 pb-4">
              <div className="font-medium">{hscodes.length} codes found</div>
              {hscodes.map((e: any) => (
                <div key={e.id}>
                  <HSCodeItem label={e.label} code={e.code} />
                </div>
              ))}
            </div>
          )}
          <div className="flex justify-between mt-5">
            <Button
              onClick={() => setShowModal(false)}
              textcolor="gray-500"
              color="white"
              className="w-full mr-2 justify-center"
            >
              Cancel
            </Button>
            <Button
              onClick={() =>
                !hscodes.length &&
                setHscodes([
                  { id: "1", label: "Bananas", code: "1212.1212" },
                  { id: "2", label: "Suger", code: "4242.4242" },
                ])
              }
              className="w-full mrl-2 justify-center"
            >
              {hscodes.length ? "Add All Codes to Process" : "Find Codes"}
            </Button>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default ProcessForm;
