"use client"; // Mark this component as a Client Component

import { useState } from "react";
import Link from "next/link";
import { SVG } from "@/app/assets/icons";
import { MENU_DATA } from "./menu";
import { usePathname } from "next/navigation";

const Sidebar = () => {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = useState<{ [key: number]: boolean }>({});
  const [selectedMenu, setSelectedMenu] = useState<number | null>(null); // Track selected menu

  const handleMenuClick = (index: number) => {
    setSelectedMenu(index); // Mark this item as selected
    setOpenMenus((prev) => ({
      ...prev,
      [index]: !prev[index], // Toggle open state for this menu
    }));
  };

  return (
    <div className="p-2 w-64 bg-[#dddcd7] text-customGray font-semibold flex flex-col h-screen overflow-y-auto no-scrollbar border-r border-gray-700 fixed top-0 left-0">
      <div className="p-4 pb-0 text-lg font-semibold">
        <Link href="/" className="flex items-center justify-center">
          <SVG.Logo />
        </Link>
      </div>
      <nav className="flex-1 mt-4">
        <ul className="space-y-2">
          {MENU_DATA.map((item, index) => (
            <li key={index} className="relative">
              <Link
                href={`${item.url}`}
                onClick={() => handleMenuClick(index)}
                className={`flex items-center DropDown gap-[5px] p-4 hover:bg-white rounded-[20px] cursor-pointer ${
                  selectedMenu === index ? "bg-white" : "" // Apply selected styles
                } ${pathname === item.url ? "bg-white" : ""}`}
              >
                {item.label}
                {item.icon && (
                  <span className="ml-2">
                    <item.icon />
                  </span>
                )}
              </Link>
              {openMenus[index] && item.children && (
                <div className="sub-menu pl-6">
                  {item.children.map((subItem) => (
                    <Link
                      key={subItem.id}
                      href={`${subItem.url}`}
                      className={`block p-2 ${pathname === subItem.url ? "seleted" : ""}`}
                    >
                      {subItem.sublevel}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <ul className="space-y-2 mt-32">
        <div className="border-t border-gray-500"></div>
        <li className="flex items-center p-4 hover:bg-white rounded-[20px]">
          <Link href="/#" className="w-full">
            Settings
          </Link>
        </li>
        <li className="flex items-center p-4 hover:bg-white rounded-[20px]">
          <Link href="/#" className="w-full">
            Logout
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
