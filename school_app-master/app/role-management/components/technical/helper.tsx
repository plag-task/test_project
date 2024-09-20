import { SVG } from "@/app/assets/icons";

export const Technical_ColumData = [
  {
    id: 1,
    name: "Team Member ID",
    key: "team_member",
  },
  {
    id: 2,
    name: (
      <div className="flex align-items">
        <span>
          <SVG.Filter />
        </span>{" "}
        <span>First Name</span>
      </div>
    ),
    key: "firstName	",
  },
  {
    id: 3,
    name: (
      <div className="flex align-items">
        <span>
          <SVG.Filter />
        </span>{" "}
        <span>Last Name</span>
      </div>
    ),
    key: "lastName",
  },
  {
    id: 4,
    name: "Email ",
    key: "email",
  },
  {
    id: 5,
    name: (
      <div className="flex align-items justify-between items-center gap-[5px]">
        <span>Role</span>
        <span>
          <SVG.ArrowDown />
        </span>
      </div>
    ),
    key: "role",
  },
  {
    id: 6,
    name: "Location",
    key: "Location",
  },
  {
    id: 7,
    name: "Last Login",
    key: "last_login",
  },
  {
    id: 8,
    name: "Time stamp ",
    key: "time_stamp",
  },
  {
    id: 9,
    name: "",
    key: "action",
  },
];
export const Technical_rowData = [1, 2, 3, 4, 5].map(() => {
  return {
    team_member: "Super Lora",
    firstName: "Label Left",
    lastName: "Label Left",
    email: "example@gmail.com",
    role: "Technical Director",
    location: "Label Left",
    last_login: "Label Left",
    time_stamp: "Label Left",
    action: "action",
  };
});
