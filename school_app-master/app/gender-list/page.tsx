"use client";
import React from "react";
import ListHeader from "../components/list-header";
import BasicTable from "../components/table";

import { Gender_Column_data, Gender_Row_Data } from "./helper";

export default function GenderList() {
  return (
    <>
      <div className="bg-white border rounded-[40px] mt-4 w-full p-[10px]">
        <ListHeader title="Gender List" subTitle="Add gender" />
        <div className="mt-4">
          <BasicTable
            rowData={Gender_Row_Data}
            ColumData={Gender_Column_data}
          />
        </div>
      </div>
    </>
  );
}
