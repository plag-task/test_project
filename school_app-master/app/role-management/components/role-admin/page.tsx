/* eslint-disable @next/next/no-img-element */

import Link from "next/link";
import React from "react";

import SearchFilter from "../search-filter/page";
import BasicTable from "@/app/components/table";
import { Role_Admin_Column, Role_Admin_Row } from "./helper";

export default function RoleAdmin() {
  const getRow = (row: any, index: number) => {
    return {
      userName: (
        <div className="flex items-center gap-[10px]">
          <div className="img">
            <img
              src="/img.png"
              alt=""
              className={`rounded-full ${index === 0 ? "border-[#C8B898]" : index === 3 ? "border-[#D5A911]" : "border-[#000]"} border-2`}
            />
          </div>
          <div
            className={`text-[14px] font-[600] ${index === 0 ? "text-[#C8B898] hover:text-[#C8B898]" : index === 3 ? "text-[#D5A911]" : "text-[#3E4352] hover:text-[#C8B898]"}`}
          >
            <Link href="#">
              {index === 0
                ? "Super Admin"
                : index === 3
                  ? "Admin "
                  : "Moderator"}
            </Link>
          </div>
        </div>
      ),
      admin_status: (
        <div
          className={`flex items-center gap-[10px] ${index === 0 ? "text-[#C8B898]" : index === 3 ? "text-[#D5A911]" : "text-[#3E4352]"} font-[600] text-[14px]`}
        >
          <span
            className={`color-dot ${index === 0 ? "bg-[#C8B898]" : index === 3 ? "bg-[#D5A911]" : "bg-[#3E4352]"}`}
          ></span>{" "}
          <span>
            {" "}
            {index === 0
              ? "Super Admin"
              : index === 3
                ? "Admin Mah"
                : "Moderator"}
          </span>
        </div>
      ),
      activity_date: row.activity_date,
      location: row.location,
      status: (
        <div className="flex items-center gap-[16px]">
          <button className="bg-[#D5A911] w-full text-[14px] font-[600] text-white rounded-[40px] outline-none border-0 py-2 px-3">
            Reactive
          </button>

          <img src="/edit.png" alt="" />
        </div>
      ),
    };
  };
  return (
    <>
      <div className="mt-4">
        <BasicTable
          rowData={Role_Admin_Row.map(getRow)}
          ColumData={Role_Admin_Column}
        />
      </div>
    </>
  );
}
