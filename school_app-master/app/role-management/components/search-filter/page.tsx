"use client";
import React from "react";

export default function SearchFilter(props: any) {
  return (
    <>
      <div className="p-[13.5px] w-full border border-[#5D5D5D] justify-between rounded-[40px] items-center flex gap-6">
        <div className="w-[100%] sm:w-[458px] border-0 text-[#202224] text-[16px] sm:leading-6 outline-none select-none lg:text-[24px] leading-[24px] font-bold">
          {props.title}
        </div>
        <div className="flex justify-end gap-6 items-center">
          <button
            className="border-[2px] w-[113px] h-[40px] border-[#24262C] font-[600] rounded-full px-4 
          text-[#202224]"
          >
            Add Role
          </button>
          <div>
            <form className="flex items-center max-w-sm mx-auto">
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
            </form>
          </div>
          <div className="">
            <select className="border-2 h-[40px] w-[84px] px-2 border-[#5D5D5D] rounded-full sm:w-[84px] text-[#000]  text-[14px] font-[600] sm:leading-6 outline-none select-none">
              <option value={"may"}>May</option>
              <option value={"june"}>June</option>
              <option value={"July"}>July</option>
              <option value={"August"}>August</option>
              <option value={"September"}>September</option>
              <option value={"October"}>October</option>
              <option value={"November"}>November</option>
              <option value={"December"}>December</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}
