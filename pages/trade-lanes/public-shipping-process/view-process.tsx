import { PageWrapper } from "../../../components/common/PageWrapper";
import BreadCrumbs from "../../../components/common/Breadcrumbs";
import { useForm } from "react-hook-form";
import { Header } from "../../../components/common/Header";
import { PageNameHeader } from "../../../components/common/PageNameHeader";
import Button from "../../../components/common/Button";
import ProcessForm from "../../../components/trade-lanes/ProcessForm";
import HeaderTabs from "../../../components/trade-lanes/HeaderTabs";
import { useRouter } from "next/router";

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
    path: "/trade-lanes/public-shipping-processes",
    text: "Public Shipping Processes",
  },
  {
    path: "/trade-lanes/public-shipping-processes/view-process",
    text: "View",
  },
];
export const ViewProcess = () => {
  const { register, getValues, handleSubmit, reset, formState } = useForm({
    defaultValues: {
      aliasName: "temp name",
      destination: "Tanzania",
      origin: "India",
      incoterm: "",
      hsCodes: "",
    },
  });
  const router = useRouter();

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
                  color="indigo-600"
                  textcolor="white"
                  onClick={() => router.push("/trade-lanes/private-shipping-processes/create-new-process")}
                >
                  Copy to Private Process
                </Button>
              </>
            }
            pagename="View"
            className="bg-gray-100 "
          />

          <ProcessForm
            disabled
            hideHoloceneRecc
            destinationSelected
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
    </PageWrapper>
  );
};

export default ViewProcess;
