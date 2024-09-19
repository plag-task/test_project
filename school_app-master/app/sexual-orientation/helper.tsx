import Link from "next/link";
import { SVG } from "../assets/icons";

/* eslint-disable @next/next/no-img-element */
export const sexualOrientation_Column_data = [
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
  },
  {
    id: 2,
    name: (
      <div className="flex align-items text-[#000]">
        <span>
          <img src="/Filter.svg" alt="" className="inline-block" />
        </span>
        <span>Orientation</span>
      </div>
    ),
    key: "orientation",
  },
  {
    id: 3,
    name: "Description",
    key: "description",
  },
  {
    id: 3,
    name: "",
    key: "action",
  },
];

export const sexualOrientation_Row_Data = [1, 2, 3].map(() => {
  return {
    id: Math.floor(Math.random() * 100),
    orientation: "Bisexual",
    description:
      "An umbrella term for sexual orientations that are not heterosexual. Its also used by individuals who reject traditional labels",
    action: (
      <div className="flex items-center gap-[10px] justify-end">
        <button>
          <SVG.Delete />
        </button>
        <button>
          <Link href="#">
            <img src="/edit.png" alt="" />
          </Link>
        </button>
      </div>
    ),
  };
});
