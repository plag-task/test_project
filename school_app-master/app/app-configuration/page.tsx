'use client';

import React from 'react'
import SelectInput from '../components/select'
import { Location, OptionalParameters, TimeZone } from '../helper'
import ButtonComponent from '../components/button';

const AppConfiguration = () => {
  return (
    <>
    <div className="rounded-[40px] p-[16px] bg-white">
        <div className="border border-[#000] mb-4 rounded-[40px] px-[24px] py-[16px] text-[24px] leading-[24px] font-bold">
            App Configuration
        </div>
        <div className='grid gap-2 md:grid-cols-3'>
            <div>
                <SelectInput options={Location} />
                <p className="text-[12px] ml-4 font-medium leading-[16px] font-roboto text-[#9998A4D9]">
                    Language
                </p>
            </div>
            <div>
                <SelectInput options={TimeZone} />
                <p className="text-[12px] ml-4 font-medium leading-[16px] font-roboto text-[#9998A4D9]">
                    Time Zone
                </p>
            </div>
            <div>
                <SelectInput options={OptionalParameters} />
                <p className="text-[12px] ml-4 font-medium leading-[16px] font-roboto text-[#9998A4D9]">
                    Optional Parameters
                </p>
            </div>
        </div> 
        <div className='mt-6'>
            <ButtonComponent ButtonName='Submit' className="w-[192px] h-[50px]" />
        </div>
     </div>
    </>
  )
}

export default AppConfiguration
