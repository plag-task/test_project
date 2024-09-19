import { SVG } from "@/app/assets/icons";

export const Role_Admin_Column = [
  {
    id: 1,
    name: "User name ID",
    key: "userName",
  },
  {
    id: 2,
    name: (
      <div className="flex items-center gap-2">
        <span>Admin status</span>
        <SVG.ArrowDown />
      </div>
    ),
    key: "admin_status",
  },
  {
    id: 2,
    name: (
      <div className="flex items-center gap-2">
        <span>Activity Date</span>
        <SVG.Filter />
      </div>
    ),
    key: "activity_date",
  },
  {
    id: 3,
    name: "Location",
    key: "location",
  },
  {
    id: 4,
    name: "Status",
    key: "status",
  },
];

export const Role_Admin_Row = [1, 2, 3, 4].map(() => {
  return {
    userName: "Super Admin",
    admin_status: "Super Admin",
    activity_date: "23.06.2024 ",
    location: "Bali",
    status: "",
  };
});
