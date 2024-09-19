"use client";
import React, { useState } from "react";
import SearchFilter from "../role-management/components/search-filter/page";
import { SVG } from "@/app/assets/icons";
import ButtonComponent from "@/app/components/button";

const ConfigurationList = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => setIsModalOpen(true);
  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="rounded-[40px] p-[16px] bg-white">
        <div className="">
          <div className="mb-[20px]">
            <SearchFilter title="Configuration List" className="text-bold" />
          </div>
          <div className="grid gap-2 md:grid-cols-3">
            <div className="mb-3">
              <div className="bg-[#0000000A] rounded-[40px] px-[16px] py-[8px]">
                <div className="flex items-center justify-between">
                  <h3 className="text-[16px] font-medium leading-[24px] font-roboto text-[#000000]">
                    12
                  </h3>
                  <SVG.EditIcon onClick={toggleModal} />
                </div>
              </div>
              <p className="text-[12px] ml-4 font-medium leading-[16px] font-roboto text-[#9998A4D9]">
                Bio Character Limit
              </p>
            </div>
            <div className="mb-3">
              <div className="bg-[#0000000A] rounded-[40px] px-[16px] py-[8px]">
                <div className="flex items-center justify-between">
                  <h3 className="text-[16px] font-medium leading-[24px] font-roboto text-[#000000]">
                    $100 - $200
                  </h3>
                  <SVG.EditIcon />
                </div>
              </div>
              <p className="text-[12px] ml-4 font-medium leading-[16px] font-roboto text-[#9998A4D9]">
                Max Interest Value
              </p>
            </div>
            <div className="mb-3">
              <div className="bg-[#0000000A] rounded-[40px] px-[16px] py-[8px]">
                <div className="flex items-center justify-between">
                  <h3 className="text-[16px] font-medium leading-[24px] font-roboto text-[#000000]">
                    5 pcs
                  </h3>
                  <SVG.EditIcon />
                </div>
              </div>
              <p className="text-[12px] ml-4 font-medium leading-[16px] font-roboto text-[#9998A4D9]">
                User ID Verification Level: Sumsub level
              </p>
            </div>
            <div className="mb-3">
              <div className="bg-[#0000000A] rounded-[40px] px-[16px] py-[8px]">
                <div className="flex items-center justify-between">
                  <h3 className="text-[16px] font-medium leading-[24px] font-roboto text-[#000000]">
                    12
                  </h3>
                  <SVG.EditIcon />
                </div>
              </div>
              <p className="text-[12px] ml-4 font-medium leading-[16px] font-roboto text-[#9998A4D9]">
                Instant Call Schedule
              </p>
            </div>
            <div className="mb-3">
              <div className="bg-[#0000000A] rounded-[40px] px-[16px] py-[8px]">
                <div className="flex items-center justify-between">
                  <h3 className="text-[16px] font-medium leading-[24px] font-roboto text-[#000000]">
                    $100 - $200
                  </h3>
                  <SVG.EditIcon />
                </div>
              </div>
              <p className="text-[12px] ml-4 font-medium leading-[16px] font-roboto text-[#9998A4D9]">
                Maximum Swipes Allowed
              </p>
            </div>
            <div className="mb-3">
              <div className="bg-[#0000000A] rounded-[40px] px-[16px] py-[8px]">
                <div className="flex items-center justify-between">
                  <h3 className="text-[16px] font-medium leading-[24px] font-roboto text-[#000000]">
                    5 pcs
                  </h3>
                  <SVG.EditIcon />
                </div>
              </div>
              <p className="text-[12px] ml-4 font-medium leading-[16px] font-roboto text-[#9998A4D9]">
                Swipe Hours
              </p>
            </div>
            <div className="mb-3">
              <div className="bg-[#0000000A] rounded-[40px] px-[16px] py-[8px]">
                <div className="flex items-center justify-between">
                  <h3 className="text-[16px] font-medium leading-[24px] font-roboto text-[#000000]">
                    5 pcs
                  </h3>
                  <SVG.EditIcon />
                </div>
              </div>
              <p className="text-[12px] ml-4 font-medium leading-[16px] font-roboto text-[#9998A4D9]">
                Min Images Allowed
              </p>
            </div>
            <div className="mb-3">
              <div className="bg-[#0000000A] rounded-[40px] px-[16px] py-[8px]">
                <div className="flex items-center justify-between">
                  <h3 className="text-[16px] font-medium leading-[24px] font-roboto text-[#000000]">
                    34
                  </h3>
                  <SVG.EditIcon />
                </div>
              </div>
              <p className="text-[12px] ml-4 font-medium leading-[16px] font-roboto text-[#9998A4D9]">
                Maximum Video Size (Mb)
              </p>
            </div>
            <div className="mb-3">
              <div className="bg-[#0000000A] rounded-[40px] px-[16px] py-[8px]">
                <div className="flex items-center justify-between">
                  <h3 className="text-[16px] font-medium leading-[24px] font-roboto text-[#000000]">
                    12
                  </h3>
                  <SVG.EditIcon />
                </div>
              </div>
              <p className="text-[12px] ml-4 font-medium leading-[16px] font-roboto text-[#9998A4D9]">
                Swipe Limit Messages
              </p>
            </div>
            <div className="">
              <div className="bg-[#0000000A] rounded-[40px] px-[16px] py-[8px]">
                <div className="flex items-center justify-between">
                  <h3 className="text-[16px] font-medium leading-[24px] font-roboto text-[#000000]">
                    5 pcs
                  </h3>
                  <SVG.EditIcon />
                </div>
              </div>
              <p className="text-[12px] ml-4 font-medium leading-[16px] font-roboto text-[#9998A4D9]">
                Max Images Allowed
              </p>
            </div>
            <div className="">
              <div className="bg-[#0000000A] rounded-[40px] px-[16px] py-[8px]">
                <div className="flex items-center justify-between">
                  <h3 className="text-[16px] font-medium leading-[24px] font-roboto text-[#000000]">
                    5 pcs
                  </h3>
                  <SVG.EditIcon />
                </div>
              </div>
              <p className="text-[12px] ml-4 font-medium leading-[16px] font-roboto text-[#9998A4D9]">
                No-Show Block Time in Minutes
              </p>
            </div>
            <div className="">
              <div className="bg-[#0000000A] rounded-[40px] px-[16px] py-[8px]">
                <div className="flex items-center justify-between">
                  <h3 className="text-[16px] font-medium leading-[24px] font-roboto text-[#000000]">
                    34
                  </h3>
                  <SVG.EditIcon />
                </div>
              </div>
              <p className="text-[12px] ml-4 font-medium leading-[16px] font-roboto text-[#9998A4D9]">
                Voice Prompt Questions
              </p>
            </div>
          </div>

          <div className="text-end mt-6">
            <ButtonComponent ButtonName="Save" className="w-[192px] h-[50px]" />
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="relative z-10">
          <div
            className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            aria-hidden="true"
          ></div>

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className="sm:flex sm:items-start">
                    <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                      <svg
                        className="h-6 w-6 text-red-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                        />
                      </svg>
                    </div>
                    <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                      <h3
                        className="text-base font-semibold leading-6 text-gray-900"
                        id="modal-title"
                      >
                        Deactivate account
                      </h3>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Are you sure you want to deactivate your account? All
                          of your data will be permanently removed. This action
                          cannot be undone.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                    onClick={handleClose}
                    type="button"
                    className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                  >
                    Deactivate
                  </button>
                  <button
                    onClick={handleClose}
                    type="button"
                    className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ConfigurationList;
