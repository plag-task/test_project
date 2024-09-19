import React from "react";
import ListHeader from "../components/list-header";
import BasicTable from "../components/table";
import { Pagination } from "@mui/material";
import { Predefined_Column_data, Predefined_Row_Data } from "./helper";

export default function Predefined() {
  return (
    <>
      <div className="bg-white border rounded-[40px] mt-4 w-full p-[10px]">
        <ListHeader
          title="List of Predefined Mini Stories"
          subTitle="Add Stories"
        />
        <div className="mt-4">
          <BasicTable
            rowData={Predefined_Row_Data}
            ColumData={Predefined_Column_data}
          />

          <div className="mt-5 flex items-center justify-center">
            <Pagination count={10} />
          </div>
        </div>
      </div>
    </>
  );
}
