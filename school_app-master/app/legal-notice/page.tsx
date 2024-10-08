import React from 'react'
const TextEditor = dynamic(() => import("@/app/components/text-editor"), {
  ssr: false,
});

import ButtonComponent from "../components/button";
import dynamic from "next/dynamic";

const LegalNotice = () => {
  return (
    <>
        <div className="">
            <div className="border border-[#000] bg-white rounded-[40px] px-[24px] py-[16px] text-[24px] leading-[24px] font-bold">
                Legal Notice
            </div>
            <div className="rounded-[40px] p-6 mt-3 bg-white">
            <div className="bg-[#0000000A] py-3 px-[16px] h-[210px] rounded-[14px]">
                <TextEditor className="h-[140px]" />
            </div>
            <div className="mt-[20px]">
                <ButtonComponent
                ButtonName="Submit"
                className="w-[192px] h-[50px]"
                />
            </div>
            </div>
        </div>
    </>
  )
}

export default LegalNotice
