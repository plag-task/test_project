/* eslint-disable @next/next/no-img-element */
import { SVG } from "@/app/assets/icons";
import ListHeader from "@/app/components/list-header";
import React from "react";

export default function Edit() {
  return (
    <>
      <ListHeader
        title="Mini-Interactive Stories"
        subTitle="Add Stories"
        ArrowBack="back"
      />
      <div className="bg-white rounded-[40px] mt-4 w-full p-[5px]">
        <div className="rounded-[40px] border-[#000] border p-[20px]">
          <div className="flex items-center justify-between border-b border-[#979797] pb-2 mb-3">
            <h2 className="text-[24px] text-[#000] font-[700]">
              Story Title: The Coffee Shop Encounter
            </h2>
            <div className="flex items-center gap-[25px]">
              <span className="text-[#5D5D5D] text-[24px] font-[700]">
                Story ID: MIS1000001
              </span>
              <button>
                <SVG.Edit />
              </button>
            </div>
          </div>
          <div className="flex gap-4 flex-wrap mb-[16px]">
            <div className="lg:w-[30%] w-[100%]">
              <input
                className="bg-[#0000000A] p-2 px-[16px] rounded-[40px] outline-none text-[16px] text-[#000] font-[600] placeholder:text-[#000] w-[100%] h-[40px] "
                placeholder="The Coffee Shop Encounter"
              />
              <div className="text-[#9998A4D9] font-[500] text-[12px] mt-[5px] ps-[15px]">
                Story Title
              </div>
            </div>
            <div className="lg:w-[68.3%] w-[100%]">
              <input
                className="truncate bg-[#0000000A] p-2 px-[16px] rounded-[40px] outline-none text-[16px] text-[#000] font-[600] placeholder:text-[#000] w-[100%] h-[40px] "
                placeholder="Romantic, Urban (Visual Representation of the Scene: Insert Romantic Image/Video of Café)."
              />
              <div className="text-[#9998A4D9] font-[500] text-[12px] mt-[5px] ps-[15px]">
                Theme
              </div>
            </div>
            <div className="w-[100%]">
              <textarea
                className="resize-none bg-[#0000000A] p-3 px-[16px] rounded-[40px] outline-none text-[16px] text-[#000] font-[600] placeholder:text-[#000] w-[100%] h-[80px] "
                placeholder="You meet someone interesting at a local coffee shop. Do you start a conversation about the book they’re reading, compliment their style or ask for a coffee recommendation?"
              />
              <div className="text-[#9998A4D9] font-[500] text-[12px] mt-[5px] ps-[15px]">
                Plot
              </div>
            </div>
          </div>
          <div className="rounded-[40px] border-[#000] border p-[20px] mb-3">
            <h2 className="text-[24px] text-[#000] font-[700] border-b border-[#979797] pb-3 mb-2">
              Decision Screen:
            </h2>
            <div className="flex flex-col mb-3 gap-[12px] border-b border-[#979797] pb-[16px]">
              <div className="flex items-center gap-4">
                <div className="w-[30%] text-[14px] font-[700] text-[#5D5D5D]">
                  Outcome A1 Feedback:
                </div>
                <div className="w-[30%] text-[14px] font-[500] text-[#5D5D5D]">
                  They are delighted to share their thoughts.
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[30%] text-[14px] font-[700] text-[#5D5D5D]">
                  Outcome A2 Feedback:
                </div>
                <div className="w-[30%] text-[14px] font-[500] text-[#5D5D5D]">
                  They seem reserved.
                </div>
              </div>
            </div>
            <h2 className="text-[24px] text-[#000] font-[700] mb-3">
              Choices B: Compliment their style.
            </h2>
            <div className="flex flex-col mb-3 gap-[10px] border-b border-[#979797] pb-[16px]">
              <div className="flex items-center gap-4">
                <div className="w-[30%] text-[14px] font-[700] text-[#5D5D5D]">
                  Outcome B1 Feedback:
                </div>
                <div className="w-[30%] text-[14px] font-[500] text-[#5D5D5D]">
                  They warmly accept the compliment.
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[30%] text-[14px] font-[700] text-[#5D5D5D]">
                  Outcome B2 Feedback:
                </div>
                <div className="w-[30%] text-[14px] font-[500] text-[#5D5D5D]">
                  They seem shy.
                </div>
              </div>
            </div>

            <h2 className="text-[24px] text-[#000] font-[700] mb-3">
              Choices C: Ask for a coffee recommendation.
            </h2>
            <div className="flex flex-col mb-3 gap-[10px] border-b border-[#979797] pb-[16px]">
              <div className="flex items-center gap-4">
                <div className="w-[30%] text-[14px] font-[700] text-[#5D5D5D]">
                  Outcome C1 Feedback:
                </div>
                <div className="w-[30%] text-[14px] font-[500] text-[#5D5D5D]">
                  They enthusiastically suggest their favorite blend.
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[30%] text-[14px] font-[700] text-[#5D5D5D]">
                  Outcome C2 Feedback:
                </div>
                <div className="w-[30%] text-[14px] font-[500] text-[#5D5D5D]">
                  They’re unsure.
                </div>
              </div>
            </div>
            <h2 className="text-[24px] text-[#000] font-[700] mb-3">
              Choices D: Ask for a coffee recommendation.
            </h2>
            <div className="flex flex-col mb-3 gap-[10px]">
              <div className="flex items-center gap-4">
                <div className="w-[30%] text-[14px] font-[700] text-[#5D5D5D]">
                  Outcome D1 Feedback:
                </div>
                <div className="w-[30%] text-[14px] font-[500] text-[#5D5D5D]">
                  They enthusiastically suggest their favorite blend.
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-[30%] text-[14px] font-[700] text-[#5D5D5D]">
                  Outcome D2 Feedback:
                </div>
                <div className="w-[30%] text-[14px] font-[500] text-[#5D5D5D]">
                  They’re unsure.
                </div>
              </div>
            </div>
          </div>
          <div className="rounded-[40px] border-[#000] border p-[20px]">
            <h2 className="text-[24px] font-[700] text-[#000] mb-3">Video</h2>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="img-overlay">
                  <button className="delete-icon">
                    <SVG.DeleteIcon />
                  </button>
                  <button className="play-icon">
                    <SVG.PlayIcon />
                  </button>
                </div>

                <img src="/img-1.png" className="rounded-[8px]" alt="" />
              </div>
              <div className="bg-[#00000080] rounded-[8px] upload-file w-[88px] h-[88px] flex items-center justify-center relative">
                <button>
                  <SVG.AddIcon />
                </button>
                <input type="file" />
              </div>
            </div>
            <h2 className="text-[24px] font-[700] text-[#000] mb-3">
              Background
            </h2>
            <div className="flex items-center gap-3">
              <div className="relative img-card">
                <button className="delete-icon">
                  <SVG.DeleteIcon />
                </button>

                <img src="/img-1.png" className="rounded-[8px]" alt="" />
              </div>
              <div className="relative img-card">
                <button className="delete-icon">
                  <SVG.DeleteIcon />
                </button>

                <img src="/img-2.png" className="rounded-[8px]" alt="" />
              </div>
              <div className="relative img-card">
                <button className="delete-icon">
                  <SVG.DeleteIcon />
                </button>

                <img src="/img-3.png" className="rounded-[8px]" alt="" />
              </div>
              <div className="bg-[#00000080] rounded-[8px] upload-file w-[88px] h-[88px] flex items-center justify-center relative">
                <button>
                  <SVG.AddIcon />
                </button>
                <input type="file" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
