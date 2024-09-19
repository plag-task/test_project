import React from "react";

import BasicTable from "@/app/components/table";
import Link from "next/link";

import { Pagination } from "@mui/material";
import SearchFilter from "../role-management/components/search-filter/page";
import { ColumData, rowData } from "./helper";

export default function MarketingTools() {
  const getRow = (row: any) => {
    return {
      campaignName: (
        <span className="text-[#5D5D5D] text-[14px]">{row.campaignName}</span>
      ),
      discountCodeName: (
        <span className="text-[#5D5D5D] text-[14px]">
          {row.discountCodeName}
        </span>
      ),
      offers: (
        <span className="text-[#5D5D5D] text-[14px]">{row.offersName}</span>
      ),
      segmentation: (
        <span className="text-[#5D5D5D] text-[14px]">
          {row.segmentationName}
        </span>
      ),
      budget: (
        <span className="text-[#5D5D5D] text-[14px]">{row.budgetRange}</span>
      ),
      duration: (
        <span className="text-[#5D5D5D] text-[14px]">{row.durationDate}</span>
      ),
      status: (
        <div className="flex items-center gap-[10px]">
          <button>
            <img src="/edit.png" alt="" />
          </button>
        </div>
      ),
    };
  };
  return (
    <>
      <div className="bg-white border rounded-3xl mt-4 w-full p-4">
        <SearchFilter title="Marketing Tools" className="text-bold" />
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
