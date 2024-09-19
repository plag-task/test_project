import React from "react";
import ListHeader from "../components/list-header";
import BasicTable from "@/app/components/table";
import { Pagination } from "@mui/material";
import { InterActive_Column_data, Interactive_Row_Data } from "./helper";

export default function page() {
  return (
    <div className="bg-white border rounded-[40px] mt-4 w-full p-[10px]">
      <ListHeader
        title="List of Mini-Interactive Stories "
        subTitle="Add Stories"
      />
      <div className="mt-4">
        <BasicTable
          rowData={Interactive_Row_Data}
          ColumData={InterActive_Column_data}
        />

        <div className="mt-5 flex items-center justify-center">
          <Pagination count={10} />
        </div>
      </div>
    </div>
  );
}
