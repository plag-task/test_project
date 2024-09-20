"use client";
import React from "react";
import { SVG } from "../assets/icons";
import { useRouter } from "next/navigation";

export default function ListHeader(props: any) {
  const router = useRouter();
  return (
    <>
      <div className="p-[13.5px] w-full border border-[#5D5D5D] justify-between rounded-[40px] items-center flex gap-6 bg-[#fff]">
        {props.ArrowBack === "back" && (
          <div
            className="flex items-center gap-[10px] cursor-pointer"
            onClick={() => router.back()}
          >
            <SVG.LeftIcon />
            <span className="text-[#24262C] text-[16px] font-[600] whitespace-nowrap">
              Back to list
            </span>
          </div>
        )}

        <div className="w-[100%] sm:w-[458px] border-0 text-[#202224] text-[16px] sm:leading-6 outline-none lg:text-[24px] leading-[24px] font-bold">
          {props.title}
        </div>
        <div className="flex justify-end gap-6 items-center">
          <button
            onClick={props.onClick}
            className="border-[2px] whitespace-nowrap h-[40px] border-[#24262C] font-[600] rounded-full px-5 
          text-[#24262C]"
          >
            {props.subTitle}
          </button>
          <div>
            <form className="flex items-center max-w-sm mx-auto gap-4">
              <label className="sr-only">Search</label>
              <div className="relative w-full">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  className="bg-[#f7f7f7] text-[14px] w-[250px] rounded-full focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search branch name..."
                  required
                />
              </div>
              {props.select}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
