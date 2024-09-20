import React from "react";
import Sidebar from "@/app/components/sidebar/page";
import Navbar from "@/app/components/header/page";
import Backarrow from "../../assets/icons/backarrow.svg";
import VerLine from "../../assets/icons/vline.svg";
import Play1 from "../../assets/icons/play.svg";
import Img1 from "../../assets/icons/img1.svg";
import Img2 from "../../assets/icons/img2.svg";
import Img3 from "../../assets/icons/img3.svg";
import Img4 from "../../assets/icons/img4.svg";
import Img5 from "../../assets/icons/img5.svg";
import Link from "next/link";

const BasicDeatails = () => {
  return (
    <>
      {/* Search Section */}
      <div className="bg-white border rounded-3xl mt-4 w-full p-4">
        <div className="p-4 w-full border border-black rounded-full h-14 flex items-center gap-6">
          <div className="text-[16] font-[600] ">
            <Link
              href="/role-management"
              className="flex items-center gap-[10px]"
            >
              <Backarrow />

              <span>Back</span>
            </Link>{" "}
          </div>

          <span className="text-black font-semibold text-xl">Moni Roy</span>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-2 justify-center items-center">
          {[
            "Basic Details",
            "Matched List",
            "Unmatched List",
            "Blocked List",
            "Report List",
            "Delegate Users",
          ].map((label) => (
            <button
              key={label}
              className={`text-[#000] border-b border-[#979797] font-semibold rounded-[20px] text-[14px] px-5 py-2.5 text-center  h-11 hover:bg-yellow-500 hover:text-white ${label === "Basic Details" ? "bg-yellow-500 text-white" : ""}`}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Basic Details Section */}
        <div className="p-4 w-full border border-gray-700 rounded-3xl mt-4">
          <h1 className="text-[24px] font-bold font-nunito">
            Basic Information
          </h1>
          <div className="grid grid-cols-4 mt-4 gap-4 p-4 font-roboto">
            {[
              { label: "Email", value: "moniroy@gmail.com" },
              { label: "Phone", value: "004472 37 34 87" },
              { label: "Date", value: "26, Oct 1992" },
              { label: "Age", value: "31" },
            ].map(({ label, value }) => (
              <div key={label} className="w-full">
                <div className="font-bold">{value}</div>
                <div className="text-gray-300 font-bold text-[12px] mt-4">
                  {label}
                </div>
              </div>
            ))}
          </div>

          <VerLine className="w-full mt-4" />

          {/* Gender and Location */}
          <div className="grid grid-cols-5 mt-4 gap-4 p-4 font-roboto">
            {[
              { label: "Gender", value: "Man" },
              { label: "Sexual Orientations", value: "Straight" },
              { label: "State", value: "Los-Angeles" },
              { label: "City", value: "Los-Angeles" },
              { label: "Country", value: "USA" },
            ].map(({ label, value }) => (
              <div key={label} className="w-full">
                <div className="font-bold">{value}</div>
                <div className="text-[#9998A4D9] font-bold text-[12px] mt-4">
                  {label}
                </div>
              </div>
            ))}
          </div>

          <VerLine className="w-full mt-4" />

          {/* Mini Stories */}
          <div className="w-full font-bold font-roboto mt-4 p-4 text-[18px]">
            It’s a rainy afternoon, and you find yourself in a cozy coffee shop.
            Across the room, someone is deeply engrossed in a book, occasionally
            glancing out the window. Their calm demeanor piques your interest.
            Do you…?
            <div className="text-[#9998A4D9] font-bold text-[12px] mt-4">
              Mini Stories
            </div>
          </div>
        </div>

        {/* About Me */}
        <div className="p-4 w-full border border-gray-700 rounded-3xl mt-4">
          <h1 className="text-[24px] font-bold font-nunito">About Me</h1>
          <div className="w-full font-bold font-roboto mt-4 p-4 text-[16px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book...
          </div>

          <VerLine className="w-full mt-4" />

          {/* Table */}
          <div className="grid grid-cols-6 mt-4 gap-4 p-4 font-roboto">
            {[
              { label: "Interest", value: "Man" },
              { label: "Values", value: "Straight" },
              { label: "My Expectation", value: "Los-Angeles" },
              { label: "Bucket List", value: "Los-Angeles" },
              { label: "Communication Preferences", value: "USA" },
              { label: "My Socials", value: "Instagram" },
            ].map(({ label, value }) => (
              <div key={label} className="w-full">
                <div className="font-bold">{value}</div>
                <div className="text-[#9998A4D9] font-bold text-[12px] mt-4">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Preferences */}
        <div className="p-4 w-full border border-gray-700 rounded-3xl mt-4">
          <h1 className="text-[24px] font-bold font-nunito">Preferences</h1>
          <VerLine className="w-full mt-2" />

          <div className="grid grid-cols-6 mt-4 gap-4 p-4 font-roboto">
            {[
              { label: "Location", value: "Los-Angeles" },
              { label: "Looking for", value: "Man" },
              { label: "Sexual Orientation", value: "Straight" },
              { label: "Age Range", value: "25-35" },
              { label: "Distance", value: "16 rm" },
              { label: "Expectation", value: "Find Casual" },
            ].map(({ label, value }) => (
              <div key={label} className="w-full">
                <div className="font-bold">{value}</div>
                <div className="text-[#9998A4D9] font-bold text-[12px] mt-4">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gallery and Login Details */}
        <div className="flex w-full gap-2">
          {/* Gallery */}
          <div className="w-[55%] border border-black p-4 rounded-3xl mt-4">
            <div className="flex gap-8">
              <h1 className="text-[24px] font-bold font-nunito">Gallery</h1>
              <span className="ml-auto">
                <img src="/edit.png" alt="Edit" />
              </span>
            </div>
            <div className="flex gap-2 mt-1.5">
              <div className="w-[50%]">
                <Play1 />
              </div>
              <div className="grid grid-cols-5 gap-1">
                {[Img1, Img2, Img3, Img4, Img5].map((Img, index) => (
                  <div key={index} className="p-2">
                    <Img />
                  </div>
                ))}
                {[Img1, Img2, Img3, Img4, Img5].map((Img, index) => (
                  <div key={index} className="p-2">
                    <Img />
                  </div>
                ))}
                {[Img1, Img2, Img3, Img4, Img5].map((Img, index) => (
                  <div key={index} className="p-2">
                    <Img />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Login Details */}
          <div className="p-4 w-full h-[290px] border border-gray-700 rounded-3xl mt-4">
            <h1 className="text-[24px] font-bold font-nunito">Login Details</h1>
            <VerLine className="w-full mt-2" />
            <div className="grid grid-cols-6 mt-4 gap-4 p-4 font-roboto">
              {[
                { label: "Location", value: "Los-Angeles" },
                { label: "Looking for", value: "Man" },
                { label: "Sexual Orientation", value: "Straight" },
                { label: "Age Range", value: "25-35" },
                { label: "Distance", value: "16 rm" },
                { label: "Expectation", value: "Find Casual" },
              ].map(({ label, value }) => (
                <div key={label} className="w-full">
                  <div className="font-bold">{value}</div>
                  <div className="text-[#9998A4D9] font-bold text-[12px] mt-4">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BasicDeatails;
