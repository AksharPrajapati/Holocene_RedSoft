export type ITradeLanesTableData = {
  id: string;
  destination: string;
  type: string;
  hscodes: string;
  origin: string;
  inceptionDate: string;
  impact: string;
  summary: string;
};

export const getTradeLanesTableData = (): ITradeLanesTableData[] => [
  {
    id: "1",
    destination: "Costa Rica",
    type: "Import tariff",
    hscodes: "8450.2345",
    origin: "Bolivia",
    inceptionDate: "14/02/2020",
    impact: "Low",
    summary: "Cras mollis felis in nisl faucibus, porttitor consequ...",
  },
  {
    id: "2",
    destination: "Bhutan",
    type: "Import licensing",
    hscodes: "8450.2345",
    origin: "Bolivia",
    inceptionDate: "16/06/2020",
    impact: "Medium",
    summary: "Cras mollis felis in nisl faucibus, porttitor consequ...",
  },
  {
    id: "3",
    destination: "United States",
    type: "Import licensing",
    hscodes: "8450.2345",
    origin: "Algeria",
    inceptionDate: "16/06/2020",
    impact: "High",
    summary: "Nulla lacinia quam id libero rhoncus, at condiment...",
  },
  {
    id: "4",
    destination: "Costa Rica",
    type: "Import tariff",
    hscodes: "8450.2345",
    origin: "Bolivia",
    inceptionDate: "14/02/2020",
    impact: "Low",
    summary: "Cras mollis felis in nisl faucibus, porttitor consequ...",
  },
  {
    id: "5",
    destination: "Bhutan",
    type: "Import licensing",
    hscodes: "8450.2345",
    origin: "Bolivia",
    inceptionDate: "16/06/2020",
    impact: "Medium",
    summary: "Cras mollis felis in nisl faucibus, porttitor consequ...",
  },
  {
    id: "6",
    destination: "United States",
    type: "Import licensing",
    hscodes: "8450.2345",
    origin: "Algeria",
    inceptionDate: "16/06/2020",
    impact: "High",
    summary: "Nulla lacinia quam id libero rhoncus, at condiment...",
  },
  {
    id: "7",
    destination: "Costa Rica",
    type: "Import tariff",
    hscodes: "8450.2345",
    origin: "Bolivia",
    inceptionDate: "14/02/2020",
    impact: "Low",
    summary: "Cras mollis felis in nisl faucibus, porttitor consequ...",
  },
  {
    id: "8",
    destination: "Bhutan",
    type: "Import licensing",
    hscodes: "8450.2345",
    origin: "Bolivia",
    inceptionDate: "16/06/2020",
    impact: "Medium",
    summary: "Cras mollis felis in nisl faucibus, porttitor consequ...",
  },
  {
    id: "9",
    destination: "United States",
    type: "Import licensing",
    hscodes: "8450.2345",
    origin: "Algeria",
    inceptionDate: "16/06/2020",
    impact: "High",
    summary: "Nulla lacinia quam id libero rhoncus, at condiment...",
  },
  {
    id: "10",
    destination: "United States",
    type: "Import licensing",
    hscodes: "8450.2345",
    origin: "Algeria",
    inceptionDate: "16/06/2020",
    impact: "High",
    summary: "Nulla lacinia quam id libero rhoncus, at condiment...",
  },
];

type ICardsData = {
  title: string;
  number: string;
  buttonText: string;
};

export const getCardsData = (): ICardsData[] => [
  {
    title: "Private Shipping Processes",
    number: "49",
    buttonText: "View",
  },
  {
    title: "Special Rules",
    number: "213",
    buttonText: "View",
  },
  {
    title: "Holocene Lane Recommendations",
    number: "749",
    buttonText: "View",
  },
  {
    title: "Trade Policy Updates",
    number: "49",
    buttonText: "Last updated",
  },
];

export type IGeneralGuidelinesTableData = {
  id: string;
  destination: string;
  origin: string;
  hscodes: string;
  incoterm: string;
  nodocs: string;
  policyChanges?: number;
};

export const getGeneralGuidelinesTableData =
  (): IGeneralGuidelinesTableData[] => [
    {
      id: "1",
      destination: "Costa Rica",
      origin: "Angola",
      hscodes: "8450.2345",
      incoterm: "FOB",
      nodocs: "3",
      policyChanges: 2,
    },
    {
      id: "2",
      destination: "Bhutan",
      origin: "Angola",
      hscodes: "8450.2345",
      incoterm: "EXW",
      nodocs: "3",
    },
    {
      id: "3",
      destination: "United States",
      origin: "India",
      hscodes: "8450.2345",
      incoterm: "FOB",
      nodocs: "3",
      policyChanges: 4,
    },
    {
      id: "4",
      destination: "Costa Rica",
      origin: "Angola",
      hscodes: "8450.2345",
      incoterm: "FOB",
      nodocs: "3",
    },
    {
      id: "5",
      destination: "Bhutan",
      origin: "Angola",
      hscodes: "8450.2345",
      incoterm: "EXW",
      nodocs: "3",
      policyChanges: 3,
    },
    {
      id: "6",
      destination: "United States",
      origin: "India",
      hscodes: "8450.2345",
      incoterm: "FOB",
      nodocs: "3",
    },
    {
      id: "7",
      destination: "Costa Rica",
      origin: "Angola",
      hscodes: "8450.2345",
      incoterm: "FOB",
      nodocs: "3",
      policyChanges: 5,
    },
  ];

export type ISpecialRulesTableData = {
  destination: string;
  comment: string;
  impact: string;
};

export const getSpecialRulesTableData = (): ISpecialRulesTableData[] => [
  {
    destination: "Costa Rica",
    comment: "Turkish Orgin Parts not Accepted ",
    impact: "Rules of Origin",
  },
  {
    destination: "Bhutan",
    comment: "KUCAS clearance not required",
    impact: "Technical Conformity",
  },
  {
    destination: "United States",
    comment: "Clearing Agent not professional.",
    impact: "General",
  },
  {
    destination: "Costa Rica",
    comment: "Turkish Orgin Parts not Accepted ",
    impact: "Rules of Origin",
  },
  {
    destination: "Bhutan",
    comment: "KUCAS clearance not required",
    impact: "Technical Conformity",
  },
  {
    destination: "United States",
    comment: "Clearing Agent not professional.",
    impact: "General",
  },
  {
    destination: "Costa Rica",
    comment: "Turkish Orgin Parts not Accepted ",
    impact: "Rules of Origin",
  },
  {
    destination: "Bhutan",
    comment: "KUCAS clearance not required",
    impact: "Technical Conformity",
  },
  {
    destination: "United States",
    comment: "Clearing Agent not professional.",
    impact: "General",
  },
  {
    destination: "Costa Rica",
    comment: "Turkish Orgin Parts not Accepted ",
    impact: "Rules of Origin",
  },
];
