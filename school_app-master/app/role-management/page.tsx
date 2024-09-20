"use client";
import React, { useState } from "react";
import { RoleData } from "./components/helper";
import SearchFilter from "./components/search-filter/page";
import RoleAdmin from "./components/role-admin/page";
import Technical from "./components/technical/page";

export default function RoleManagement() {
  const [tabs, setTabs] = useState(1);
  const handleTabs = (id: number) => {
    setTabs(id);
  };
  return (
    <>
      <div className="flex flex-wrap gap-2 justify-center items-center">
        {RoleData.map((items, index) => (
          <button
            onClick={() => handleTabs(items.id)}
            key={index}
            className={`w-[200px] text-[#000] border-b border-[#979797] font-semibold rounded-[20px] text-[14px] px-5 py-2.5 text-center w-36 h-11 hover:bg-yellow-500 hover:text-white ${
              tabs === items.id ? "bg-yellow-500 text-white" : ""
            }`}
          >
            {items.label}
          </button>
        ))}
      </div>
      <div className="bg-white border rounded-3xl mt-4 w-full p-4">
        <SearchFilter
          title={
            tabs === 1
              ? "Admins"
              : tabs === 2
                ? "Technical"
                : tabs === 3
                  ? "Operations"
                  : tabs === 4
                    ? "Marketing"
                    : tabs === 5
                      ? "Finance Director"
                      : ""
          }
        />
        <div className="mt-4">
          {tabs === 1 && <RoleAdmin />}
          {tabs === 2 && <Technical />}
          {tabs === 3 && <Technical />}
          {tabs === 4 && <Technical />}
          {tabs === 5 && <Technical />}
        </div>
      </div>
    </>
  );
}
