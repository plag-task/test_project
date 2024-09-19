"use client";
import React from "react";
import ListHeader from "../components/list-header";
import BasicTable from "../components/table";
import {
  sexualOrientation_Column_data,
  sexualOrientation_Row_Data,
} from "./helper";

export default function sexualOrientation() {
  return (
    <>
      <div className="bg-white border rounded-[40px] mt-4 w-full p-[10px]">
        <ListHeader
          title="Sexual Orientation"
          subTitle="Add Orientation"
          select={
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
          }
        />
        <div className="mt-4">
          <BasicTable
            rowData={sexualOrientation_Row_Data}
            ColumData={sexualOrientation_Column_data}
          />
        </div>
      </div>
    </>
  );
}
