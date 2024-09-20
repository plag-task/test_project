"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";

import Link from "next/link";
import { Pagination } from "@mui/material";
import {
  ColumData,
  rowData,
  userTabs,
} from "../role-management/components/helper";
import SearchFilter from "../role-management/components/search-filter/page";
import BasicTable from "@/app/components/table";
import { usePathname } from "next/navigation";
export default function Pending() {
  const pathname = usePathname();
  const getRow = (row: any) => {
    return {
      userName: (
        <Link href="/details">
          <div className="flex items-center gap-[10px]">
            <div className="img">
              <img src="/img.png" alt="" className="rounded-full" />
            </div>
            <div className="text-[16px] font-[600] text-[#000] hover:text-[#C8B898]">
              Moni Roy
            </div>
          </div>
        </Link>
      ),
      activity: row.activity,
      location: row.location,
      age: row.age,
      race: row.race,
      gander: row.gander,
      status: (
        <div className="flex items-center gap-[10px]">
          <button className="bg-[#C8B898] w-full text-[14px] font-[600] text-white rounded-[40px] outline-none border-0 py-2 px-3">
            Pending
          </button>

          <button>
            <img src="/edit.png" alt="" />
          </button>
          <button>
            <img src="/dot.png" alt="" />
          </button>
        </div>
      ),
    };
  };
  return (
    <>
      <div className=" flex flex-wrap gap-2 justify-center items-center">
        {userTabs.map((items, index) => (
          <Link key={index} href={items.URL}>
            <button
              className={`text-[#000] border-b border-[#979797] font-semibold rounded-[20px] text-[14px] px-5 py-2.5 text-center w-36 h-11 hover:bg-yellow-500 hover:text-white ${pathname === items.URL ? "bg-yellow-500 text-white" : ""}`}
            >
              {items.label}
            </button>
          </Link>
        ))}
      </div>
      {/* table */}

      <div className="bg-white border rounded-3xl mt-4 w-full p-4">
        <SearchFilter title="Pending" />
        <div className="mt-4">
          <BasicTable rowData={rowData.map(getRow)} ColumData={ColumData} />

          <div className="mt-5 flex items-center justify-center">
            <Pagination count={10} />
          </div>
        </div>
      </div>
    </>
  );
}
