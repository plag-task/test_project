export const ColumData = [
  {
    id: 1,
    name: "Campaign",
    key: "campaignName",
  },
  {
    id: 2,
    name: "Discount codes",

    key: "discountCodeName",
  },
  {
    id: 3,
    name: "Offers",
    key: "offersName",
  },
  {
    id: 4,
    name: "Segmentation",
    key: "segmentationName",
  },
  {
    id: 5,
    name: "Budget",
    key: "budgetRange",
  },
  {
    id: 6,
    name: "Duration",
    key: "durationDate",
  },
  {
    id: 7,
    name: "",
    key: "status",
  },
];

export const rowData = [1, 2, 3, 4].map(() => {
  return {
    campaignName: "Complain1",
    discountCodeName: "wv_oe_1",
    offersName: "Offers 3 ",
    segmentationName: "&??????",
    budgetRange: "$100-$200",
    durationDate: "25.05.2024",
    status: "",
  };
});
