"use client";
import React from "react";
import ListHeader from "../components/list-header";
import BasicTable from "../components/table";

import { useRouter } from "next/navigation";
import {
  ExpectationsList_Column_data,
  ExpectationsList_Row_Data,
} from "./helper";

export default function ExpectationsList() {
  const router = useRouter();
  return (
    <>
      <div className="bg-white border rounded-[40px] mt-4 w-full p-[10px]">
        <ListHeader
          title="Expectations List"
          onClick={() => router.push("/interest-list/add-interest")}
          subTitle="Add values"
        />
        <div className="mt-4">
          <BasicTable
            rowData={ExpectationsList_Row_Data}
            ColumData={ExpectationsList_Column_data}
          />
        </div>
      </div>
    </>
  );
}
