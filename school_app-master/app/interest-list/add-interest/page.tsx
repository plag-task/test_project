"use client";
import { SVG } from "@/app/assets/icons";
import ButtonComponent from "@/app/components/button";
import { useRouter } from "next/navigation";

import React from "react";

export default function AddInterest() {
  const router = useRouter();
  return (
    <>
      <div className="bg-white border rounded-[40px] mt-4 w-full p-[10px]">
        <div className="p-[13.5px] w-full border border-[#5D5D5D] rounded-[40px] items-center flex gap-6 bg-[#fff] mb-3">
          <div
            className="flex items-center gap-[10px] cursor-pointer"
            onClick={() => router.back()}
          >
            <SVG.LeftIcon />
            <span className="text-[#24262C] text-[16px] font-[600]">Back</span>
          </div>

          <div className="w-[100%] sm:w-[458px] border-0 text-[#202224] text-[16px] sm:leading-6 outline-none lg:text-[24px] leading-[24px] font-bold">
            Add interest
          </div>
        </div>
        <div className="grid grid cols-1 lg:grid-cols-2 gap-4">
          <div>
            <input
              className="bg-[#0000000A] p-2 px-[16px] rounded-[40px] outline-none text-[16px] text-[#000] font-[600] placeholder:text-[#000] w-[100%] h-[40px] "
              placeholder="The Coffee Shop Encounter"
            />
            <div className="text-[#9998A4D9] font-[500] text-[12px] mt-[5px] ps-[15px]">
              Story Title
            </div>
          </div>
          <div>
            <select
              id="countries"
              className="bg-[#0000000A] p-2 px-[16px] rounded-[40px] outline-none text-[16px] text-[#000] font-[600] placeholder:text-[#000] w-[100%] h-[40px] "
            >
              <option value="Travel & Food">Travel & Food</option>
              <option value="Music">Music</option>
              <option value="FR">Technology</option>
              <option value="DE">Arts & Culture</option>
            </select>
            <div className="text-[#9998A4D9] font-[500] text-[12px] mt-[5px] ps-[15px]">
              Parent name
            </div>
          </div>
        </div>
        <div className="mt-[30px]">
          <ButtonComponent ButtonName="Save" className="w-[192px] h-[50px]" />
        </div>
      </div>
    </>
  );
}
