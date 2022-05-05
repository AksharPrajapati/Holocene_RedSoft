import React, { useState } from "react";
import { ITab, Tabs } from "../common/Tabs";
import { useRouter } from "next/router";

const headerTabs: ITab[] = [
  {
    label: "Private Shipping Processes",
    number: 49,
    path: "private-shipping-processes",
  },
  {
    label: "Public Shipping Process",
    number: 723,
    path: "public-shipping-process",
  },
  { label: "Policy Updates", number: 14, path: "" },
];

const HeaderTabs: React.FC = () => {
  const router = useRouter();
  const [selectedHeaderTab, setSelectedHeaderTab] = useState(
    headerTabs.find((e) => e.path === router.pathname.split("/")[2]) ||
      headerTabs[0]
  );

  return (
    <Tabs
      selected={selectedHeaderTab}
      setSelected={(selected) => {
        setSelectedHeaderTab(selected);
        if (selected.label === "Public Shipping Process") {
          router.push("/trade-lanes/public-shipping-process");
        }
        if (selected.label === "Private Shipping Processes") {
          router.push("/trade-lanes/private-shipping-processes");
        }
      }}
      tabs={headerTabs}
    />
  );
};

export default HeaderTabs;
