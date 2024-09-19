import Link from "next/link";
import { SVG } from "../assets/icons";

/* eslint-disable @next/next/no-img-element */
export const List_Of_Goals_Column_data = [
  {
    id: 1,
    name: (
      <div className="flex align-items text-[#000]">
        <span>
          <img src="/Filter.svg" alt="" className="inline-block" />
        </span>
        <span>ID</span>
      </div>
    ),
    key: "id",
    classname: "w-[20%]",
  },
  {
    id: 2,
    name: (
      <div className="flex align-items text-[#000]">
        <span>
          <img src="/Filter.svg" alt="" className="inline-block" />
        </span>
        <span>Goals</span>
      </div>
    ),
    key: "goals",
    classname: "w-[68%]",
  },
  {
    id: 3,
    name: "",
    key: "action",
  },
];

export const List_Of_Goals_Row_Data = [1, 2, 3].map(() => {
  return {
    id: Math.floor(Math.random() * 10),
    goals: "Find serious",
    action: (
      <div className="flex items-center gap-[10px] justify-end">
        <button>
          <Link href="#">
            <img src="/edit.png" alt="" />
          </Link>
        </button>
        <button>
          <SVG.Delete />
        </button>
      </div>
    ),
  };
});
