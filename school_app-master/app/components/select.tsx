'use client';

import React, { useState } from "react";

interface SelectProps {
  labelName?: string;
  options: any;
  className?: string;
  value?: string;
}

const SelectInput = ({ labelName, options, className, value }: SelectProps) => {

  const [selectValue, setSelectValue] = useState(value)
  return (
    <>
      <div className="simple_input">
        <label htmlFor="countries" className="block mb-[10px] text-sm font-medium text-gray-900 dark:text-white">
          {labelName}
        </label>
        <select
          id="countries"
          className={` ${className} bg-[#0000000A] text-gray-900 text-sm rounded-[40px] block w-full p-2.5`}
          value={selectValue}
          onChange={(e) => setSelectValue(e.target.value)}
        >
          {options.map((items: any) => (
            <option key={items.id} value={items.option}>{items.option}</option>
          ))}
        </select>
      </div>
    </>
  );
};

export default SelectInput;
