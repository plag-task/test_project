"use client"; // Mark this component as a Client Component

import { useState } from "react";
import Link from "next/link";
import Notification from "../../assets/icons/notification.svg"; // Corrected spelling from Notifiction
import Flag from "../../assets/icons/americanflag.svg";
import ArrowDown from "../../assets/icons/arrowd.svg"; // Renamed for clarity
import Profile from "../../assets/icons/profile.svg";

const Navbar = () => {
  const [dropdown, setDropDwon] = useState(false);
  const handleToggle = () => {
    setDropDwon(!dropdown);
  };
  return (
    <nav className="bg-[#dddcd7] text-gray-700 font-semibold p-4 fixed top-0 w-[83%] ml-64 z-10">
      <div className="max-w-[656px] mx-auto w-[76%]">
        <div className="flex justify-between items-center w-full">
          {/* Search Box */}
          <div className=" border border-Custombrown rounded-[20px] p-3 bg-gray-100 flex items-center w-full justify-center">
            <form className="w-[250px]">
              <label htmlFor="search" className="sr-only">
                Search
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-500"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="search"
                  id="search"
                  className="block w-full pl-10 p-3 text-[16px] text-[#00000073] border border-[#00000014] rounded-[20px] bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Search"
                  required
                />
              </div>
            </form>
            {/* Notification and User Info */}
            <div className="flex items-center space-x-4">
              {/* Notification */}
              <div className="text-lg font-semibold ml-6">
                <Notification />
              </div>
              {/* Country and Language */}
              <div className="flex items-center space-x-4 relative">
                <Flag className="" />
                <p
                  className="text-[14px] text-[#646464]"
                  onClick={handleToggle}
                >
                  English
                </p>
                <ArrowDown className="" onClick={handleToggle} />
                {dropdown ? (
                  <div className="drop_toggle">
                    <ul>
                      <li>
                        <Link href={"#"}>
                          <Flag className="" />
                          <span> English</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                ) : (
                  ""
                )}
              </div>
              {/* Profile Icon */}
              <div className="flex items-center space-x-2">
                <Profile className=" rounded-full" />
                <div className="text-[14px] text-[#404040]">
                  <p>Moni Roy</p>
                  <p className="text-gray-400 font-[400]">Admin</p>
                </div>
                <ArrowDown className="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
