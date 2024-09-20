import { SVG } from "@/app/assets/icons";

/* eslint-disable @next/next/no-img-element */
export const userTabs = [
  {
    id: 1,
    label: "All",
    URL: "/",
  },
  {
    id: 2,
    label: "Pending",
    URL: "/pending",
  },
  {
    id: 3,
    label: "Deactivated",
    URL: "#",
  },
  {
    id: 4,
    label: "Rejected",
    URL: "#",
  },
  {
    id: 5,
    label: "Not approved",
    URL: "#",
  },
  {
    id: 6,
    label: "Behavior",
    URL: "#",
  },
  {
    id: 7,
    label: "Reports/Issues",
    URL: "#",
  },
];

export const RoleData = [
  { id: 1, label: "Admins", URL: "/" },
  { id: 2, label: "Technical", URL: "#" },
  { id: 3, label: "Operations", URL: "#" },
  { id: 4, label: "Marketing", URL: "#" },
  { id: 5, label: "Finance Director", URL: "#" },
];

export const ColumData = [
  {
    id: 1,
    name: "User name ID",
    key: "userName",
  },
  {
    id: 2,
    name: (
      <div className="flex align-items text-[#000]">
        <span>
          <img src="/Filter.svg" alt="" className="inline-block" />
        </span>
        <span>Activity Date</span>
      </div>
    ),
    key: "activity",
  },
  {
    id: 3,
    name: "Location",
    key: "location",
  },
  {
    id: 4,
    name: (
      <div className="flex align-items">
        <span>
          <img src="/Filter.svg" alt="" className="inline-block" />
        </span>{" "}
        <span>Age</span>
      </div>
    ),
    key: "age",
  },
  {
    id: 5,
    name: "Race",
    key: "race",
  },
  {
    id: 6,
    name: "Gander",
    key: "gander",
  },
  {
    id: 7,
    name: "Subscrip. status",
    key: "status",
  },
];

export const rowData = [1, 2, 3, 4, 5].map(() => {
  return {
    userName: "Moni Roy",
    activity: "Activity",
    location: "Country ",
    age: "44",
    race: "Country",
    gander: "Male",
    status: "",
  };
});
