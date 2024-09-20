import React from "react";
import ListHeader from "../components/list-header";
import BasicTable from "../components/table";
import { Pagination } from "@mui/material";
import { List_Of_Goals_Column_data, List_Of_Goals_Row_Data } from "./helper";

export default function ListOfGoals() {
  return (
    <>
      <div className="bg-white border rounded-[40px] mt-4 w-full p-[10px]">
        <ListHeader title="List of Goals" subTitle="Add  Goals" />
        <div className="mt-4">
          <BasicTable
            rowData={List_Of_Goals_Row_Data}
            ColumData={List_Of_Goals_Column_data}
          />

          <div className="mt-5 flex items-center justify-center">
            <Pagination count={10} />
          </div>
        </div>
      </div>
    </>
  );
}
