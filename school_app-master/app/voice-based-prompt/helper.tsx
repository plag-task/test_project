import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export const Voice_Based_Prompt_Column_data = [
  {
    id: 1,
    name: (
      <div className="flex align-items text-[#000]">
        <span>
          <img src="/Filter.svg" alt="" className="inline-block" />
        </span>
        <span>Prompt ID</span>
      </div>
    ),
    key: "story_id",
    classname: "w-[45%]",
  },
  {
    id: 2,
    name: (
      <div className="flex align-items text-[#000]">
        <span>
          <img src="/Filter.svg" alt="" className="inline-block" />
        </span>
        <span>Category</span>
      </div>
    ),
    key: "story_title",
    classname: "w-[45%]",
  },
  {
    id: 3,
    name: "",
    key: "action",
  },
];

export const Voice_Based_Prompt_Row_Data = [1, 2, 3, 4, 5].map(() => {
  return {
    story_id: "MIS1000001",
    story_title: "Personality Insights",
    action: (
      <div className="flex items-center gap-[10px]">
        <button>
          <Link href="/voice-based-prompt/edit">
            <img src="/edit.png" alt="" />
          </Link>
        </button>
        <button>
          <img src="/dot.png" alt="" />
        </button>
      </div>
    ),
  };
});
