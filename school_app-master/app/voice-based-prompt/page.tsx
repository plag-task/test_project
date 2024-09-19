import React from "react";

import BasicTable from "@/app/components/table";
import { Pagination } from "@mui/material";
import ListHeader from "../components/list-header";
import {
  Voice_Based_Prompt_Column_data,
  Voice_Based_Prompt_Row_Data,
} from "./helper";

export default function VoiceBasedPrompt() {
  return (
    <div className="bg-white border rounded-[40px] mt-4 w-full p-[10px]">
      <ListHeader
        title="List of Voice-Based Prompt Questions"
        subTitle="Add Prompt"
      />
      <div className="mt-4">
        <BasicTable
          rowData={Voice_Based_Prompt_Row_Data}
          ColumData={Voice_Based_Prompt_Column_data}
        />

        <div className="mt-5 flex items-center justify-center">
          <Pagination count={10} />
        </div>
      </div>
    </div>
  );
}
