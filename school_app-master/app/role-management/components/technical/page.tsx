/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import BasicTable from "@/app/components/table";
import { Technical_ColumData, Technical_rowData } from "./helper";
import { SVG } from "@/app/assets/icons";
import { Menu, MenuItem } from "@mui/material";

export default function Technical() {
  const [anchorEls, setAnchorEls] = useState<(HTMLElement | null)[]>([]);

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    index: number
  ) => {
    const newAnchorEls = [...anchorEls];
    newAnchorEls[index] = event.currentTarget;
    setAnchorEls(newAnchorEls);
  };

  const handleClose = (index: number) => {
    const newAnchorEls = [...anchorEls];
    newAnchorEls[index] = null;
    setAnchorEls(newAnchorEls);
  };

  const getRow = (row: any, rowIndex: number) => {
    return {
      team_member: (
        <Link href="#">
          <div className="flex items-center gap-[10px] whitespace-nowrap">
            <div className="img">
              <Image
                src="/img.png"
                alt="User Profile"
                width={40}
                height={40}
                className="rounded-full border-[#C8B898] border-2"
              />
            </div>
            <div className="text-[16px] font-[600] text-[#000] hover:text-[#C8B898]">
              Super Lora
            </div>
          </div>
        </Link>
      ),
      firstName: <span className="text-[#5D5D5D]">{row.firstName}</span>,
      lastName: <span className="text-[#5D5D5D]">{row.lastName}</span>,
      email: <span className="text-[#5D5D5D]">row.email</span>,
      role: <span className="text-[#5D5D5D]">{row.role}</span>,
      location: <span className="text-[#5D5D5D]">{row.location}</span>,
      last_login: <span className="text-[#5D5D5D]">{row.last_login}</span>,
      time_stamp: <span className="text-[#5D5D5D]">{row.time_stamp}</span>,
      action: (
        <div className="flex items-center gap-[10px] w-[50px] relative">
          <button aria-label="Edit">
            <img src="/edit.png" alt="Edit Icon" />
          </button>
          <button
            aria-label="Actions Menu"
            onClick={(event) => handleClick(event, rowIndex)}
          >
            <img src="/dot.png" alt="More Actions Icon" />
          </button>
          <Menu
            id={`basic-menu-${rowIndex}`}
            anchorEl={anchorEls[rowIndex]}
            open={Boolean(anchorEls[rowIndex])}
            onClose={() => handleClose(rowIndex)}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
            transformOrigin={{ horizontal: "right", vertical: "top" }}
            anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            PaperProps={{
              elevation: 0,
              sx: {
                borderRadius: "14px",
                boxShadow: "0px 4px 4px 0px #00000040",
                border: "1px solid #97979754",

                "& .MuiList-root": {
                  p: 0,
                },
                "& .MuiMenuItem-root": {
                  borderBottom: "1px solid #97979754",
                  py: 1,
                  px: 2,
                },
              },
            }}
          >
            <MenuItem onClick={() => handleClose(rowIndex)}>Reset 2FA</MenuItem>
            <MenuItem onClick={() => handleClose(rowIndex)}>
              Reset password
            </MenuItem>
            <MenuItem onClick={() => handleClose(rowIndex)}>
              Deactivate member
            </MenuItem>
            <MenuItem onClick={() => handleClose(rowIndex)}>
              <div className="flex items-center gap-[15px]">
                <SVG.Delete /> <span>Delete</span>
              </div>
            </MenuItem>
          </Menu>
        </div>
      ),
    };
  };

  return (
    <>
      <div className="overflow-hidden overflow-x-auto">
        <BasicTable
          rowData={Technical_rowData.map((row, index) => getRow(row, index))}
          ColumData={Technical_ColumData}
        />
      </div>
    </>
  );
}
