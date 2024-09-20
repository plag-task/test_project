import Link from "next/link";
import { SVG } from "../assets/icons";

/* eslint-disable @next/next/no-img-element */
export const Interest_list_Column_data = [
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
    classname: "w-[15%]",
  },
  {
    id: 2,
    name: (
      <div className="flex align-items text-[#000]">
        <span>
          <img src="/Filter.svg" alt="" className="inline-block" />
        </span>
        <span>Name</span>
      </div>
    ),
    key: "name",
    classname: "w-[70%]",
  },
  {
    id: 3,
    name: "",
    key: "action",
  },
];

export const Interest_list_Row_Data = [1, 2, 3].map(() => {
  return {
    id: Math.floor(Math.random() * 10),
    name: "Arts & Culture",
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
