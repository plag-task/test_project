"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";

import Link from "next/link";
import { Pagination } from "@mui/material";
import { ColumData, rowData } from "../role-management/components/helper";

import BasicTable from "@/app/components/table";

export default function Pending() {
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
      <BasicTable rowData={rowData.map(getRow)} ColumData={ColumData} />

      <div className="mt-5 flex items-center justify-center">
        <Pagination count={10} />
      </div>
    </>
  );
}
