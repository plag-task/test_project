"use client";
/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";

import Link from "next/link";
import { Pagination } from "@mui/material";
import SearchFilter from "../role-management/components/search-filter/page";

import BasicTable from "../components/table";
import {
  ColumData,
  rowData,
  userTabs,
} from "../role-management/components/helper";
import { usePathname } from "next/navigation";
import Pending from "./pending";

export default function UserManagement() {
  const pathname = usePathname();
  const [tabs, setTabs] = useState(1);
  const handleTabs = (id: number) => {
    setTabs(id);
  };
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
          <button className="bg-[#3E4352] w-full text-[14px] font-[600] text-white rounded-[40px] outline-none border-0 py-2 px-3">
            Subscription
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
          <Link
            key={index}
            href={"javascript:void(0)"}
            onClick={() => handleTabs(items.id)}
          >
            <button
              className={`text-[#000] border-b border-[#979797] font-semibold rounded-[20px] text-[14px] px-5 py-1.5 text-center w-[140px] h-11 hover:bg-yellow-500 hover:text-white ${tabs === items.id ? "bg-yellow-500 text-white" : ""}`}
            >
              {items.label}
            </button>
          </Link>
        ))}
      </div>
      {/* table */}

      <div className="bg-white border rounded-3xl mt-4 w-full p-4">
        <SearchFilter
          title={
            tabs === 1
              ? "All"
              : tabs === 2
                ? "Pending"
                : tabs === 3
                  ? "Deactivated"
                  : tabs === 4
                    ? "Rejected"
                    : tabs === 5
                      ? "Not approved"
                      : tabs === 6
                        ? "Behavior"
                        : tabs === 7
                          ? "Reports/Issues"
                          : ""
          }
        />
        <div className="mt-4">
          {tabs == 1 && (
            <>
              <BasicTable rowData={rowData.map(getRow)} ColumData={ColumData} />
              <div className="mt-5 flex items-center justify-center">
                <Pagination count={10} />
              </div>
            </>
          )}
          {tabs == 2 && <Pending />}
          {tabs == 3 && <>Coming Soon</>}
          {tabs == 4 && <>Coming Soon</>}
          {tabs == 5 && <>Coming Soon</>}
          {tabs == 6 && <>Coming Soon</>}
          {tabs == 7 && <>Coming Soon</>}
        </div>
      </div>
    </>
  );
}
